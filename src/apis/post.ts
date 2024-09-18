import client from "./client";

export const getAllPost = async () => {
  return await client("/api/posts?populate=*", {
    method: "GET",
  });
};

export const getPostBySlug = async (slug: string) => {
  const posts = await client(
    "/api/posts?populate=*&filters[slug][$eq]=" + slug,
    {
      method: "GET",
    }
  );

  if (!posts.data.length) {
    throw new Error("Not found");
  }

  return posts.data[0];
};

export const getPostByCategory = async (id: number) => {
  return await client("/api/posts?populate=*&filters[category][id]=" + id, {
    method: "GET",
  });
};
