import Head from "next/head";
import AnimatedAbout from "@/components/aboutpage/AnimatedAbout";

/* ----------‑‑‑  COMPONENT  ‑‑‑---------- */

const About = () => {
  return (
    <>
      <Head>
        <title>About | Daniel Mbedobe Kunji</title>
        <meta
          name="description"
          content="Learn more about Daniel’s journey in web development, data entry, and the technologies he loves."
        />
        <meta
          name="keywords"
          content="Daniel Mbedobe, web developer, MERN, React, Tailwind, data entry, Ghana"
        />
        <meta name="author" content="Daniel Mbedobe" />
        <link rel="canonical" href="https://dkmbedobe.onrender.com/about" />
      </Head>

      <AnimatedAbout />
    </>
  );
};

export default About;
