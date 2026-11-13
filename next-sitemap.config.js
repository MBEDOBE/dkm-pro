/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://dkmbedobe.onrender.com").replace(/\/+$/, ""),
  outDir: "out", // Next.js `output: "export"` deploys the `out` directory.
  generateRobotsTxt: true,
  generateIndexSitemap: false, // Four routes do not need an index of sitemaps.
};
