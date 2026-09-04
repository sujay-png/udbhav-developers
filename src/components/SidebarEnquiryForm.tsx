import * as React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/Icon";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

export function SidebarEnquiryForm({ dark = false, redirectUrl }: { dark?: boolean; redirectUrl?: string }) {
  const [status, setStatus] = React.useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formId: 3,
          firstName: formData.get("firstName"),
          lastName: formData.get("lastName"),
          phone: formData.get("phone"),
          email: formData.get("email"),
          bhk: formData.getAll("bhk").join(", "),
          unitType: formData.get("unitType"),
          intendedUse: formData.get("intendedUse"),
          loanPref: formData.get("loanPref"),
          whatsapp: formData.get("whatsapp") === "on",
        }),
      });

      if (!response.ok) throw new Error('Submission failed');

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

  const label = cn("text-xs font-semibold uppercase tracking-wider mb-1 block", dark ? "text-cream/60" : "text-gray-500");
  const inputCls = cn("w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#B02317]/30 focus:border-[#B02317] transition-colors", dark ? "bg-transparent border-cream/25 text-cream placeholder:text-cream/35" : "border-gray-300 bg-white text-gray-900 placeholder:text-gray-400");
  const radioLabel = cn("flex items-center gap-2 text-sm cursor-pointer", dark ? "text-cream/80" : "text-gray-700");

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
        <div className="grid h-12 w-12 place-items-center rounded-full bg-[#B02317]/10">
          <Icon name="check" className="h-6 w-6 text-[#B02317]" />
        </div>
        <h3 className={cn("font-bold text-lg", dark ? "text-cream" : "text-gray-900")}>Enquiry sent!</h3>
        <p className={cn("text-sm", dark ? "text-cream/60" : "text-gray-500")}>
          Our team will reach out to you shortly.
        </p>
        <button onClick={() => setStatus("idle")} className="text-sm text-[#B02317] underline underline-offset-2">
          Submit another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      {/* Name */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className={label}>First Name</label>
          <input name="firstName" required placeholder="First" className={inputCls} />
        </div>
        <div>
          <label className={label}>Last Name</label>
          <input name="lastName" required placeholder="Last" className={inputCls} />
        </div>
      </div>

      {/* Phone */}
      <div>
        <label className={label}>Phone Number</label>
        <input name="phone" type="tel" required placeholder="+91 98765 43210" className={inputCls} />
      </div>

      {/* Email */}
      <div>
        <label className={label}>Email Address</label>
        <input name="email" type="email" required placeholder="you@example.com" className={inputCls} />
      </div>

      {/* Preferred Unit Type */}
      <div>
        <label className={label}>Preferred Unit Type <span className="text-[#B02317]">*</span></label>
        <div className="flex gap-4 mt-1">
          <label className={radioLabel}>
            <input type="radio" name="unitType" value="3 BHK" required className="accent-[#B02317]" />
            3 BHK
          </label>
          <label className={radioLabel}>
            <input type="radio" name="unitType" value="4 BHK" className="accent-[#B02317]" />
            4 BHK
          </label>
        </div>
      </div>

      {/* Intended Use */}
      <div>
        <label className={label}>Intended Use <span className="text-[#B02317]">*</span></label>
        <div className="flex gap-4 mt-1">
          <label className={radioLabel}>
            <input type="radio" name="intendedUse" value="Self-Use" required className="accent-[#B02317]" />
            Self-Use
          </label>
          <label className={radioLabel}>
            <input type="radio" name="intendedUse" value="Investment" className="accent-[#B02317]" />
            Investment
          </label>
        </div>
      </div>

      {/* Bank / Loan Preference */}
      <div>
        <label className={label}>Bank / Loan Preference <span className="text-[#B02317]">*</span></label>
        <select name="loanPref" required className={cn(inputCls, "h-10 cursor-pointer")}>
          <option value="">Select an option</option>
          <option value="Need Home Loan Assistance">Need Home Loan Assistance</option>
          <option value="Already Pre-Approved">Already Pre-Approved</option>
          <option value="Planning to Apply">Planning to Apply</option>
          <option value="Self-Funded">Self-Funded</option>
        </select>
      </div>

      {/* WhatsApp Consent */}
      <div className="pt-1">
        <label className={cn("flex items-start gap-2 cursor-pointer text-xs", dark ? "text-cream/70" : "text-gray-600")}>
          <input type="checkbox" name="whatsapp" className="mt-0.5 accent-[#B02317] h-4 w-4 flex-shrink-0" />
          I agree to receive project details and updates via WhatsApp
        </label>
      </div>

      {status === "error" && (
        <div className="rounded-md bg-red-500/10 p-3 text-sm text-red-500">
          Submission failed. Please try again.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 w-full flex h-12 items-center justify-center rounded-md bg-[#B02317] text-[15px] font-bold text-white shadow hover:bg-[#8e1c12] transition-colors disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting…" : "Submit Enquiry"}
      </button>
    </form>
  );
}
