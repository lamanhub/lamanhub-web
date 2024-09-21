import axios from "axios";
import client from "./client";

export const getAllShowcase = async () => {
  return await client
    .get("/api/showcases", { params: { populate: "*" } })
    .then((response) => response.data);
};

export const getShowcaseByRepository = async (repository: string) => {
  const [showcases, github, readme] = await Promise.all([
    client
      .get("/api/showcases", {
        params: {
          populate: "*",
          filters: {
            repository: {
              $eq: repository,
            },
          },
        },
      })
      .then((response) => response.data),
    axios
      .get(`https://api.github.com/repos/${repository}`, {
        headers: {
          Authorization: `token ${process.env.GIT_TOKEN}`,
        },
      })
      .then((response) => response.data),
    axios
      .get(`https://api.github.com/repos/${repository}/readme`, {
        headers: {
          Authorization: `token ${process.env.GIT_TOKEN}`,
        },
      })
      .then((response) => {
        return Buffer.from(response.data.content, "base64").toString("utf-8");
      }),
  ]);

  if (!showcases.data.length) {
    throw new Error("Not found");
  }

  return { info: showcases.data[0], github, readme };
};
