import client from "./client";

export const getAllCategory = async () => {
  return await client("/api/categories", {
    method: "GET",
  });
};

export const getCategoryBySlug = async (slug: string) => {
  const posts = await client("/api/categories?filters[Slug][$eq]=" + slug, {
    method: "GET",
  });

  if (!posts.data.length) {
    throw new Error("Not found");
  }

  return posts.data[0];
};
