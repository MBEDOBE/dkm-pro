import { createPageMetadata } from "@/lib/seo";
import PortfolioContent from "@/components/portfolio/AnimatedPortfolio";

export const metadata = createPageMetadata(
  "Projects & Portfolio",
  "Explore Daniel Mbedobe's web development work, including education websites, a hospitality application, and WordPress redesigns.",
  "/portfolio"
);

export default function MyWorks() {
  return <PortfolioContent />;
}
