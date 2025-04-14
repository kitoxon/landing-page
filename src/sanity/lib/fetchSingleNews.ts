import { client } from "./client";

export async function fetchSingleNews(slug: string) {
  const query = `*[_type == "news" && slug.current == $slug][0] {
    title,
    company,
    industry,
    summary,
    slug,
    body,
    "mainImage": mainImage.asset->url,
    publishedAt,
    }`;
  return await client.fetch(query, { slug });
}
