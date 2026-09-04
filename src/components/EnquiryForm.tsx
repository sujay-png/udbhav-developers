import * as React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/Icon";
import { cn } from "@/lib/utils";

const RECAPTCHA_SITE_KEY = "6LecgFcsAAAAAHJLmH8O7RCs8JnHHJcE3ADP23mN";

type Status = "idle" | "submitting" | "success" | "error";

declare global {
  interface Window {
    grecaptcha: any;
  }
}

export function EnquiryForm({ dark = true, redirectUrl, showCaptcha = false }: { dark?: boolean; redirectUrl?: string; showCaptcha?: boolean }) {
  const [status, setStatus] = React.useState<Status>("idle");
  const recaptchaRef = React.useRef<HTMLDivElement>(null);
  const widgetIdRef = React.useRef<number | null>(null);

  // Load reCAPTCHA script on mount — only when showCaptcha is true
  React.useEffect(() => {
    if (!showCaptcha) return;

    const tryRender = () => {
      if (recaptchaRef.current && widgetIdRef.current === null && window.grecaptcha?.render) {
        try {
          widgetIdRef.current = window.grecaptcha.render(recaptchaRef.current, {
            sitekey: RECAPTCHA_SITE_KEY,
          });
        } catch (e) {
          console.warn("reCAPTCHA render error:", e);
        }
      }
    };

    const existing = document.getElementById("recaptcha-script");
    if (!existing) {
      const script = document.createElement("script");
      script.id = "recaptcha-script";
      script.src = "https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit";
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }

    const waitForRecaptcha = () => {
      if (window.grecaptcha?.ready) {
        window.grecaptcha.ready(() => tryRender());
      } else {
        setTimeout(waitForRecaptcha, 200);
      }
    };
    waitForRecaptcha();

    return () => {
      if (widgetIdRef.current !== null && window.grecaptcha?.reset) {
        try { window.grecaptcha.reset(widgetIdRef.current); } catch {}
      }
      widgetIdRef.current = null;
    };
  }, [showCaptcha]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Get reCAPTCHA token only when captcha is enabled
    let recaptchaToken = "";
    if (showCaptcha && window.grecaptcha && widgetIdRef.current !== null) {
      recaptchaToken = window.grecaptcha.getResponse(widgetIdRef.current);
      if (!recaptchaToken) {
        alert("Please complete the reCAPTCHA verification.");
        setStatus("idle");
        return;
      }
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formId: 1,
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          subject: formData.get("subject"),
          message: formData.get("message"),
          recaptchaToken,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit enquiry');
      }

      // Reset reCAPTCHA
      if (showCaptcha && window.grecaptcha && widgetIdRef.current !== null) {
        window.grecaptcha.reset(widgetIdRef.current);
      }

      if (redirectUrl) {
        window.location.href = redirectUrl;
        return;
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  const labelTone = dark ? "text-cream/60" : "text-muted-foreground";
  const inputTone = dark ? "border-cream/25 text-cream placeholder:text-cream/35" : "";

  if (status === "success") {
    return (
      <div className="flex min-h-[320px] flex-col items-center justify-center rounded-md p-8 text-center">
        <div className={cn("grid h-14 w-14 place-items-center rounded-full", dark ? "bg-clay/20" : "bg-muted")}>
          <Icon name="check" className="h-6 w-6 text-clay" />
        </div>
        <h3 className={cn("mt-5 font-display text-2xl", dark ? "text-cream" : "text-ink")}>Enquiry sent.</h3>
        <p className={cn("mt-2 max-w-xs text-sm", dark ? "text-cream/60" : "text-muted-foreground")}>
          Thank you for reaching out — our team will get back to you within one business day.
        </p>
        <Button variant={dark ? "outlineLight" : "outline"} size="sm" className="mt-6" onClick={() => setStatus("idle")}>
          Send another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="enq-name" className={labelTone}>Enter Your Name</Label>
          <Input id="enq-name" name="name" required placeholder="Your full name" className={inputTone} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="enq-email" className={labelTone}>Enter Your Email</Label>
          <Input id="enq-email" name="email" type="email" required placeholder="you@example.com" className={inputTone} />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="enq-phone" className={labelTone}>Phone Number</Label>
          <Input id="enq-phone" name="phone" type="tel" required placeholder="+91 98765 43210" className={inputTone} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="enq-subject" className={labelTone}>Subject</Label>
          <Input id="enq-subject" name="subject" required placeholder="e.g. Enquiry about 3 BHK" className={inputTone} />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="enq-message" className={labelTone}>Message</Label>
        <Textarea
          id="enq-message"
          name="message"
          placeholder="Tell us more about what you're looking for..."
          className={cn(inputTone, "min-h-[120px]")}
        />
      </div>

      {/* Google reCAPTCHA — only rendered when showCaptcha is true */}
      {showCaptcha && (
        <div className="my-2" style={{ minHeight: '78px' }}>
          <div ref={recaptchaRef} id="recaptcha-container" />
        </div>
      )}

      {status === "error" && (
        <div className="rounded-md bg-red-500/10 p-3 text-sm text-red-500">
          Failed to send message. Please try again later.
        </div>
      )}

      <Button type="submit" variant="accent" size="lg" className="w-full" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send Message"}
        <Icon name="arrow-right" className="h-4 w-4" />
      </Button>
    </form>
  );
}
