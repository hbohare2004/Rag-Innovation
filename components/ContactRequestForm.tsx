"use client";

import { useState } from "react";

export default function ContactRequestForm() {
  const [status, setStatus] = useState<"idle" | "opening" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  function buildMessage(formData: FormData) {
    const name = (formData.get("name") ?? "").toString().trim();
    const email = (formData.get("email") ?? "").toString().trim();
    const phone = (formData.get("phone") ?? "").toString().trim();
    const org = (formData.get("org") ?? "").toString().trim();
    const interest = (formData.get("interest") ?? "").toString().trim();
    const message = (formData.get("message") ?? "").toString().trim();

    const bodyLines = [
      " *New Enquiry from Rag Innovations Website*",
      "",
      ` Name: ${name || "-"}`,
      ` Email: ${email || "-"}`,
      ` Phone: ${phone || "-"}`,
      ` Organisation: ${org || "-"}`,
      ` Interested in: ${interest || "-"}`,
      "",
      " Message:",
      message || "-",
      "",
      "────────────────────",
      "Sent via Rag Innovations Contact Form",
    ];

    const subject = `New Enquiry${name ? ` - ${name}` : ""}`;

    return {
      subject,
      body: bodyLines.join("\n"),
      whatsappText: bodyLines.join("\n"), // WhatsApp looks better with line breaks
    };
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("opening");
    setErrorMsg(null);

    const formData = new FormData(e.currentTarget);
    const { subject, body, whatsappText } = buildMessage(formData);

    const mailtoUrl = `mailto:raginnovations@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    const whatsappUrl = `https://wa.me/9425128596?text=${encodeURIComponent(whatsappText)}`;

    try {
      // Open WhatsApp first (better UX as it's mobile-friendly)
      const waWindow = window.open(whatsappUrl, "_blank");

      // Small delay so both don't get blocked
      setTimeout(() => {
        const mailWindow = window.open(mailtoUrl, "_blank");

        if (!waWindow && !mailWindow) {
          setStatus("error");
          setErrorMsg("Popup blocked by browser. Please allow popups for this site.");
          return;
        }

        // Success
        setStatus("success");
        e.currentTarget.reset();

        // Auto reset status after 4 seconds
        setTimeout(() => setStatus("idle"), 4000);
      }, 300);
    } catch (err) {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    }
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      {/* Your existing form fields remain exactly the same */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-navy mb-1.5">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-navy mb-1.5">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-navy mb-1.5">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            placeholder="+91 XXXXX XXXXX"
          />
        </div>
        <div>
          <label htmlFor="org" className="block text-sm font-medium text-navy mb-1.5">
            Organisation
          </label>
          <input
            type="text"
            id="org"
            name="org"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            placeholder="Your organisation"
          />
        </div>
      </div>

      <div>
        <label htmlFor="interest" className="block text-sm font-medium text-navy mb-1.5">
          I'm Interested in
        </label>
        <select
          id="interest"
          name="interest"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-600"
        >
          <option value="">Select an option</option>
          <option value="machine">Sanitary Pad Making Machine</option>
          <option value="materials">Raw Materials</option>
          <option value="training">Vocational Training</option>
          <option value="awareness">Awareness Campaigns</option>
          <option value="maintenance">Machine Maintenance / Upgrade</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-navy mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-y"
          placeholder="Tell us about your requirements, goals, and any questions..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "opening"}
        className="btn-cta w-full sm:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === "opening" ? "Opening Email & WhatsApp..." : "Send Message →"}
      </button>

      {/* Status Messages */}
      {status === "success" && (
        <p className="text-sm text-green-600 font-medium">
          ✅ Message ready! Check your email client and WhatsApp.
        </p>
      )}

      {status === "error" && errorMsg && (
        <p className="text-sm text-red-600">{errorMsg}</p>
      )}
    </form>
  );
}