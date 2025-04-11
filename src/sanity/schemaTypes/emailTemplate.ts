import { defineField, defineType } from "sanity";
import { ArchiveIcon } from "@sanity/icons";

export const emailTemplate = defineType({
  name: "emailTemplate",
  title: "メールテンプレート",
  type: "document",
  icon: ArchiveIcon,
  fields: [
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "subject",
      },
    }),
    defineField({
      name: "subject",
      title: "メール件名",
      type: "string",
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "text",
      rows: 20,
      description: "Use {{name}}, {{email}}, {{company}}, {{message}}, etc.",
    }),
  ],
});
