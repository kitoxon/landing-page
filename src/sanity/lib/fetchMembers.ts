import { client } from "./client";

export const fetchMembers = async () => {
  const query = `*[_type == "teamMember"] | order(_createdAt asc){
    name,
    nameEn,
    role,
    bio,
    "photo": photo.asset->url
  }`;

  const data = await client.fetch(query);
  return data;
};
