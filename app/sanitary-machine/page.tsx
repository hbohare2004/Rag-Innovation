import { permanentRedirect } from "next/navigation";

export default function SanitaryMachineRedirectPage() {
  permanentRedirect("/products");
}
