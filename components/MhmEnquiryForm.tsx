"use client";

import { useState } from "react";

const packageOptions = [
  "Awareness Package",
  "Compliance Package",
  "Sustainable Model Package",
  "Not sure — help me decide",
];

const inputCls =
  "w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all";

export default function MhmEnquiryForm() {
  const [status, setStatus] = useState<
    "idle" | "opening" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("opening");
    setErrorMsg(null);

    const fd = new FormData(e.currentTarget);
    const field = (name: string) =>
      (fd.get(name) ?? "").toString().trim() || "-";

    const lines = [
      "*MHM Compliance Proposal Request*",
      "",
      `School: ${field("school")}`,
      `Contact: ${field("contact")}`,
      `Phone: ${field("phone")}`,
      `Email: ${field("email")}`,
      `Students: ${field("students")}`,
      `Package: ${field("package")}`,
      "",
      `Message: ${field("message")}`,
      "",
      "────────────────────",
      "Sent from MHM Compliance Page",
    ];

    const subject = `MHM Proposal Request — ${field("school")}`;
    const body = lines.join("\n");

    const mailtoUrl = `mailto:raginnovations@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    const whatsappUrl = `https://wa.me/919425128596?text=${encodeURIComponent(
      body
    )}`;

    try {
      const waWindow = window.open(whatsappUrl, "_blank");

      setTimeout(() => {
        const mailWindow = window.open(mailtoUrl, "_blank");

        if (!waWindow && !mailWindow) {
          setStatus("error");
          setErrorMsg(
            "Popup blocked by browser. Please allow popups for this site."
          );
          return;
        }

        setStatus("success");
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setStatus("idle"), 4000);
      }, 300);
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="mhm-school"
            className="block text-sm font-medium text-navy mb-1.5"
          >
            School Name *
          </label>
          <input
            id="mhm-school"
            name="school"
            required
            placeholder="e.g. Kendriya Vidyalaya, Bhopal"
            className={inputCls}
          />
        </div>
        <div>
          <label
            htmlFor="mhm-contact"
            className="block text-sm font-medium text-navy mb-1.5"
          >
            Contact Person *
          </label>
          <input
            id="mhm-contact"
            name="contact"
            required
            placeholder="Your name"
            className={inputCls}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="mhm-phone"
            className="block text-sm font-medium text-navy mb-1.5"
          >
            Phone *
          </label>
          <input
            id="mhm-phone"
            name="phone"
            type="tel"
            required
            placeholder="+91 XXXXX XXXXX"
            className={inputCls}
          />
        </div>
        <div>
          <label
            htmlFor="mhm-email"
            className="block text-sm font-medium text-navy mb-1.5"
          >
            Email *
          </label>
          <input
            id="mhm-email"
            name="email"
            type="email"
            required
            placeholder="you@school.edu.in"
            className={inputCls}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="mhm-students"
            className="block text-sm font-medium text-navy mb-1.5"
          >
            Number of Students
          </label>
          <input
            id="mhm-students"
            name="students"
            type="number"
            min={1}
            placeholder="e.g. 500"
            className={inputCls}
          />
        </div>
        <div>
          <label
            htmlFor="mhm-package"
            className="block text-sm font-medium text-navy mb-1.5"
          >
            Interested Package
          </label>
          <select id="mhm-package" name="package" className={inputCls + " text-gray-600"}>
            {packageOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="mhm-message"
          className="block text-sm font-medium text-navy mb-1.5"
        >
          Message
        </label>
        <textarea
          id="mhm-message"
          name="message"
          rows={4}
          placeholder="Tell us about your school's requirements, existing infrastructure, goals..."
          className={inputCls + " resize-y"}
        />
      </div>

      <button
        type="submit"
        disabled={status === "opening"}
        className="btn-cta bg-primary w-full sm:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === "opening"
          ? "Opening Email & WhatsApp..."
          : status === "success"
          ? "✓ Request Sent!"
          : "Request Proposal →"}
      </button>

      {status === "success" && (
        <p className="text-sm text-green-600 font-medium">
          Message ready! Check your email client and WhatsApp.
        </p>
      )}
      {status === "error" && errorMsg && (
        <p className="text-sm text-red-600">{errorMsg}</p>
      )}
    </form>
  );
}
