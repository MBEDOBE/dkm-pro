/** Use NEXT_PUBLIC_SITE_URL at build time when moving to a custom domain. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://dkmbedobe.onrender.com").replace(/\/+$/, "");
