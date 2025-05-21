import Head from "next/head";

import AnimatedHero from "@/components/homepage/AnimatedHome";

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Home | Daniel Mbedobe Kunji</title>
        <meta
          name="description"
          content="Daniel Mbedobe is a skilled frontend developer and data entry and extraction expert..."
        />
        <meta
          name="keywords"
          content="Daniel Mbedobe Kunji, frontend developer, MERN stack, ..."
        />
        <meta name="author" content="Daniel Mbedobe" />
        <link rel="canonical" href="https://dkmbedobe.onrender.com" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
            }),
          }}
        />
      </Head>

      <AnimatedHero />
    </>
  );
};

export default HomePage;
