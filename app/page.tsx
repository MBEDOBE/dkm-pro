import { SITE_URL } from "@/lib/site";
import { createPageMetadata } from "@/lib/seo";
import AnimatedHome from "@/components/homepage/AnimatedHome";

export const metadata = createPageMetadata(
  "Web Developer | Responsive Websites & React",
  "Daniel Mbedobe designs and develops responsive websites, landing pages, and React interfaces for businesses and organizations. Explore selected web projects.",
  "/"
);

export default function HomePage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Daniel Mbedobe Kunji",
    url: SITE_URL,
    image: `${SITE_URL}/assets/pp.webp`,
    jobTitle: "Web Developer",
    sameAs: [
      "https://github.com/Mbedobe",
      "https://www.linkedin.com/in/danielmbedobe",
      "https://x.com/@kd_mbedobe",
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <AnimatedHome />
    </>
  );
}
