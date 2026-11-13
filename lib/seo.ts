import type { Metadata } from "next";

const profileImage = {
  url: "/assets/pp.webp",
  width: 422,
  height: 591,
  alt: "Portrait of Daniel Mbedobe",
};

/** Keep route-specific titles, descriptions and social previews in sync. */
export function createPageMetadata(title: string, description: string, path: string): Metadata {
  const fullTitle = `${title} | Daniel Mbedobe`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: "Daniel Mbedobe Portfolio",
      type: "website",
      images: [profileImage],
    },
    // The existing image is portrait, so a standard summary card avoids
    // forcing it into a landscape crop. A dedicated social card can come later.
    twitter: { card: "summary", title: fullTitle, description, images: [profileImage.url] },
  };
}
