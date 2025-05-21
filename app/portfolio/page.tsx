import Head from "next/head";
import PortfolioContent from "@/components/portfolio/AnimatedPortfolio";

const MyWorks = () => {
  return (
    <>
      <Head>
        <title>Portfolio | Daniel Mbedobe Kunji</title>
        <meta
          name="description"
          content="Browse through Daniel Mbedobe Kunji’s portfolio to see his recent projects built with React, Tailwind, WordPress, and more."
        />
        <meta
          name="keywords"
          content="portfolio, Daniel Mbedobe Kunji, projects, React, WordPress, Tailwind, frontend work, MERN apps, Ghana developer, web development"
        />
        <meta name="author" content="Daniel Mbedobe" />
        <link rel="canonical" href="https://dkmbedobe.onrender.com/portfolio" />
      </Head>

      <PortfolioContent />
    </>
  );
};

export default MyWorks;
