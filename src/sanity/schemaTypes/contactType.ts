import { EnvelopeIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const contactType = defineType({
  name: "bi_contact",
  title: "お問い合わせフォーム",
  type: "document",
  icon: EnvelopeIcon,
  fields: [
    defineField({
      name: "company",
      title: "貴社名",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "name",
      title: "お名前",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "メールアドレス",
      type: "string",
      validation: (Rule) => Rule.email().required(),
    }),
    defineField({
      name: "phone",
      title: "電話番号",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "department",
      title: "部署",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "position",
      title: "役職",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "inquiryType",
      title: "お問い合わせ内容",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "message",
      title: "お問い合わせ詳細",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "fileUrl",
      title: "ファイル (Optional)",
      type: "url",
    }),
  ],
  preview: {
    select: {
      title: "company",
      subtitle: "name",
      email: "email",
    },
    prepare({ title, subtitle, email }) {
      return {
        title: title || "会社名未入力",
        subtitle: `${subtitle}（${email}）`,
      };
    },
  },
});
