import { createPageMetadata } from "@/lib/seo";
import AnimatedAbout from "@/components/aboutpage/AnimatedAbout";

export const metadata = createPageMetadata(
  "About",
  "Meet Daniel Mbedobe, a web developer creating small business websites, landing pages, and responsive interfaces with React and Next.js.",
  "/about-daniel-mbedobe"
);

export default function AboutPage() {
  return <AnimatedAbout />;
}
