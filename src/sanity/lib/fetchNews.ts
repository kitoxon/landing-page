import { client } from "./client";

export async function fetchNews(limit?: number) {
  const range = typeof limit === "number" ? `[0...${limit}]` : "";
  const query = `*[_type == "news"] | order(publishedAt desc)${range} {
    title,
    company,
    industry,
    summary,
    slug,
    body,
    "mainImage": mainImage.asset->url,
    publishedAt,
  }`;

  return await client.fetch(query);
}
