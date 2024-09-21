import client from "./client";

export const getAllCategory = async () => {
  return await client.get("/api/categories").then((response) => response.data);
};

export const getCategoryBySlug = async (slug: string) => {
  const categories = await client
    .get("/api/categories", {
      params: {
        filters: {
          slug: {
            $eq: slug,
          },
        },
      },
    })
    .then((response) => response.data);

  if (!categories.data.length) {
    throw new Error("Not found");
  }

  return categories.data[0];
};
