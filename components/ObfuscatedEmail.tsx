"use client";

import { useEffect, useState } from "react";

type Props = {
  className?: string;
};

const LOCAL = "raginnovations";
const DOMAIN = "gmail.com";
const DISPLAY = `${LOCAL}@${DOMAIN}`;

/**
 * Keeps mailto out of the initial href (points to /contact until hydrated);
 * visible label matches the original plain email for consistent UI.
 */
export default function ObfuscatedEmail({ className }: Props) {
  const [href, setHref] = useState("/contact");

  useEffect(() => {
    setHref(`mailto:${LOCAL}@${DOMAIN}`);
  }, []);

  return (
    <a href={href} className={className}>
      {DISPLAY}
    </a>
  );
}
