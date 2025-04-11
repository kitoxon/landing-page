import { defineField, defineType } from "sanity";
import { DownloadIcon } from "@sanity/icons";

export const downloadType = defineType({
  name: "bi_download",
  title: "資料ダウンロードフォーム(資料ダウンロードページ)",
  type: "document",
  icon: DownloadIcon,
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
      name: "inquiryType",
      title: "検討フェーズ",
      type: "string",
      validation: (Rule) => Rule.required(),
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
