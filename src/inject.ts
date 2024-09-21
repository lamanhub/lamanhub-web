import markdownit from "markdown-it";
export * as category from "./apis/category";
export * as post from "./apis/post";
export * as showcase from "./apis/showcase";

export const md = markdownit();
export { default as moment } from "moment";
export { default as generateSitemap } from "./apis/sitemap";

export function formatBytes(bytes: number, decimals = 2) {
  if (bytes === 0) return "0 Bytes";

  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB"];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));

  return (
    parseFloat((bytes / Math.pow(1024, i)).toFixed(decimals)) + " " + sizes[i]
  );
}
