import { createPageMetadata } from "@/lib/seo";
import ContactContent from "@/components/contact/ContactContent";

export const metadata = createPageMetadata(
  "Contact",
  "Contact Daniel Mbedobe about a landing page, small business website, responsive redesign, or focused React and Next.js interface update.",
  "/contact"
);

export default function ContactPage() {
  return <ContactContent />;
}
