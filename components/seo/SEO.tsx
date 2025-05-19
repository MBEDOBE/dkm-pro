"use client";

import Head from "next/head";

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
  author?: string;
}

const SEO = ({
  title,
  description = "Daniel Mbedobe Kunji - Web Developer & Data Entry Specialist",
  keywords = "web developer, MERN, React, Tailwind, WordPress, frontend, data entry",
  author = "Daniel Mbedobe",
}: SEOProps) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Daniel Mbedobe Kunji",
    url: "https://dkmbedobe.onrender.com",
    image: "https://dkmbedobe.onrender.com/pp.webp",
    jobTitle: "Web Developer & Data Entry Specialist",
    sameAs: [
      "https://github.com/Mbedobe",
      "https://www.linkedin.com/in/danielmbedobe",
      "https://x.com/@kd_mbedobe",
    ],
  };

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href="https://dkmbedobe.onrender.com" />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </Head>
  );
};

export default SEO;
