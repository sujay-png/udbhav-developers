import * as React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/Icon";
import { cn } from "@/lib/utils";

const unitTypes = ["2 BHK", "3 BHK", "4 BHK", "Commercial"] as const;
const intents = ["Self Use", "Investment"] as const;

type Status = "idle" | "submitting" | "success" | "error";

export function EnquiryForm({ dark = true }: { dark?: boolean }) {
  const [unitType, setUnitType] = React.useState<string | null>(null);
  const [intent, setIntent] = React.useState<string | null>(null);
  const [status, setStatus] = React.useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const payload = { ...data, unitType, intent };

    // Wire this up to your own endpoint — e.g. a WordPress REST route,
    // Formspree, or a serverless function. Left as a console log so the
    // form is fully functional out of the box during development.
    console.log("Enquiry submitted:", payload);

    await new Promise((r) => setTimeout(r, 700));
    setStatus("success");
    form.reset();
    setUnitType(null);
    setIntent(null);
  }

  const toggleClass = (active: boolean) =>
    cn(
      "rounded-sm border px-4 py-2 text-sm font-medium transition-colors",
      dark
        ? active
          ? "border-clay bg-clay text-cream"
          : "border-cream/25 text-cream/70 hover:border-cream/50"
        : active
          ? "border-clay bg-clay text-cream"
          : "border-ink/20 text-ink/70 hover:border-ink/40"
    );

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
          <Label htmlFor="name" className={labelTone}>Full Name</Label>
          <Input id="name" name="name" placeholder="Enter your name" required className={dark ? "border-cream/25 text-cream placeholder:text-cream/35" : ""} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone" className={labelTone}>Phone Number</Label>
          <Input id="phone" name="phone" type="tel" placeholder="+91 00000 00000" required className={dark ? "border-cream/25 text-cream placeholder:text-cream/35" : ""} />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className={labelTone}>Email Address</Label>
        <Input id="email" name="email" type="email" placeholder="you@example.com" required className={dark ? "border-cream/25 text-cream placeholder:text-cream/35" : ""} />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label className={labelTone}>Preferred Unit Type</Label>
          <div className="flex flex-wrap gap-2">
            {unitTypes.map((u) => (
              <button type="button" key={u} onClick={() => setUnitType(u)} className={toggleClass(unitType === u)}>
                {u}
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <Label className={labelTone}>Intended Use</Label>
          <div className="flex flex-wrap gap-2">
            {intents.map((i) => (
              <button type="button" key={i} onClick={() => setIntent(i)} className={toggleClass(intent === i)}>
                {i}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className={labelTone}>Your Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us more about your requirements"
          className={dark ? "border-cream/25 text-cream placeholder:text-cream/35" : ""}
        />
      </div>

      <label className="flex items-start gap-2.5 text-xs leading-relaxed">
        <input type="checkbox" name="whatsappOptIn" className="mt-0.5 h-4 w-4 accent-clay" />
        <span className={dark ? "text-cream/55" : "text-muted-foreground"}>
          I agree to receive project details and updates via WhatsApp.
        </span>
      </label>

      <Button type="submit" variant="accent" size="lg" className="w-full" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send Message"}
        <Icon name="arrow-right" className="h-4 w-4" />
      </Button>
    </form>
  );
}
