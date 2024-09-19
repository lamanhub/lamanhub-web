import moment from "moment";
import { getAllCategory } from "./category";
import { getAllPost } from "./post";

const lastUpdate = "2024-09-15";

const generateSitemap = async (baseURL: string) => {
  const [categories, posts] = await Promise.all([
    getAllCategory(),
    getAllPost(),
  ]);

  const categoriesUrls = (
    categories.data as { attributes: { Slug: string } }[]
  ).map(
    (el) => `
<url>
  <loc>${baseURL}/blog/categories/${el.attributes.Slug}</loc>
  <lastmod>${lastUpdate}</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.6</priority>
</url>
`
  );

  const postsUrls = (
    posts.data as { attributes: { slug: string; publishedAt: string } }[]
  ).map(
    (el) => `
<url>
  <loc>${baseURL}/blog/${el.attributes.slug}</loc>
  <lastmod>${moment(el.attributes.publishedAt).format("YYYY-MM-DD")}</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.6</priority>
</url>
`
  );

  return `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>${baseURL}/</loc>
        <lastmod>${lastUpdate}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.6</priority>
    </url>
    <url>
        <loc>${baseURL}/blog</loc>
        <lastmod>${lastUpdate}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.6</priority>
    </url>
    ${categoriesUrls.join("\n")}
    ${postsUrls.join("\n")}
</urlset>
`;
};

export default generateSitemap;
