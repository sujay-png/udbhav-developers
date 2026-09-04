import * as React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/Icon";
import { cn } from "@/lib/utils";

// Form field options have been simplified.

type Status = "idle" | "submitting" | "success" | "error";

export function EnquiryForm({ dark = true, redirectUrl }: { dark?: boolean; redirectUrl?: string }) {
  const [status, setStatus] = React.useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    
    // We can pass the standard fields straight to the API
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit enquiry');
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
          <Label htmlFor="name" className={labelTone}>Enter Your Name</Label>
          <Input id="name" name="name" required className={dark ? "border-cream/25 text-cream placeholder:text-cream/35" : ""} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className={labelTone}>Enter Your Email</Label>
          <Input id="email" name="email" type="email" required className={dark ? "border-cream/25 text-cream placeholder:text-cream/35" : ""} />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="phone" className={labelTone}>Phone Number</Label>
          <Input id="phone" name="phone" type="tel" required className={dark ? "border-cream/25 text-cream placeholder:text-cream/35" : ""} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="subject" className={labelTone}>Subject</Label>
          <Input id="subject" name="subject" required className={dark ? "border-cream/25 text-cream placeholder:text-cream/35" : ""} />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className={labelTone}>Message</Label>
        <Textarea
          id="message"
          name="message"
          className={dark ? "border-cream/25 text-cream placeholder:text-cream/35" : ""}
        />
      </div>

      {status === "error" && (
        <div className="rounded-md bg-red-500/10 p-3 text-sm text-red-500">
          Failed to send message. Please ensure email API keys are configured correctly or try again later.
        </div>
      )}

      <Button type="submit" variant="accent" size="lg" className="w-full" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send Message"}
        <Icon name="arrow-right" className="h-4 w-4" />
      </Button>
    </form>
  );
}
