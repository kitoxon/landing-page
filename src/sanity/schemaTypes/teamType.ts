import { defineField, defineType } from "sanity";
import { UsersIcon } from "@sanity/icons";

export const teamMember = defineType({
  name: "teamMember",
  title: "チームメンバー",
  type: "document",
  icon: UsersIcon,
  fields: [
    defineField({
      name: "name",
      title: "名前（日本語）",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "nameEn",
      title: "名前（英語）",
      type: "string",
    }),
    defineField({
      name: "role",
      title: "役職",
      type: "string",
    }),
    defineField({
      name: "photo",
      title: "写真",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "bio",
      title: "メンバー経歴",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});
