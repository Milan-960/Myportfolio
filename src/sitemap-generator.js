const fs = require("fs");
const path = require("path");

// Base URL of your site, using the environment variable with the correct prefix or a default
const baseUrl = process.env.REACT_APP_SITEMAP_URL || "https://milansachani.dev";

// List of static pages to include in the sitemap
const staticPages = ["/", "/blog", "/about", "/projects", "/contact"];

// Generate XML structure for the sitemap
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages
    .map((page) => {
      return `
        <url>
          <loc>${baseUrl}${page}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <priority>0.80</priority>
        </url>
      `;
    })
    .join("")}
</urlset>`;

// Save sitemap to the public folder at the project root
const filePath = path.resolve(__dirname, "../public", "sitemap.xml");
fs.writeFileSync(filePath, sitemap, "utf8");

console.log("✅ Sitemap generated successfully at public/sitemap.xml");
