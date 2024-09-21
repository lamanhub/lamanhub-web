import client from "./client";

export const getAllPost = async () => {
  return await client
    .get("/api/posts", {
      params: {
        populate: "*",
        sort: "publishedAt:desc",
      },
    })
    .then((response) => {
      return response.data;
    });
};

export const getPostBySlug = async (slug: string) => {
  const posts = await client
    .get("/api/posts", {
      params: {
        populate: "*",
        filters: {
          slug: {
            $eq: slug,
          },
        },
      },
    })
    .then((response) => response.data);

  if (!posts.data.length) {
    throw new Error("Not found");
  }

  return posts.data[0];
};

export const getPostByCategory = async (id: number) => {
  return await client
    .get("/api/posts", {
      params: {
        populate: "*",
        filters: {
          category: {
            id,
          },
        },
        sort: "publishedAt:desc",
      },
    })
    .then((response) => response.data);
};
