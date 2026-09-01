"use client";

import { useState } from "react";

export default function ContactRequestForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg(null);

    const formElement = e.currentTarget;
    const formData = new FormData(formElement);

    const name = (formData.get("name") ?? "").toString().trim();
    const email = (formData.get("email") ?? "").toString().trim();
    const phone = (formData.get("phone") ?? "").toString().trim();
    const org = (formData.get("org") ?? "").toString().trim();
    const interest = (formData.get("interest") ?? "").toString().trim();
    const message = (formData.get("message") ?? "").toString().trim();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, org, interest, message }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        formElement.reset();
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong. Please try again.");
      }
    } catch {
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
        disabled={status === "sending"}
        className="btn-cta bg-primary w-full sm:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Sending..." : "Send Message →"}
      </button>

      {/* Status Messages */}
      {status === "success" && (
        <p className="text-sm text-green-600 font-medium">
          ✅ Thank you! Your enquiry has been submitted successfully.
        </p>
      )}

      {status === "error" && errorMsg && (
        <p className="text-sm text-red-600">{errorMsg}</p>
      )}
    </form>
  );
}