import { defineType, defineField } from "sanity";
import { HomeIcon } from "@sanity/icons";
export const topDownloadType = defineType({
  name: "bi_top",
  title: "資料ダウンロードフォーム(トップページ)",
  type: "document",
  icon: HomeIcon,
  fields: [
    defineField({
      name: "company",
      title: "貴社名",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "firstName",
      title: "お名前 (名)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "ご連絡先メールアドレス",
      type: "string",
      validation: (Rule) => Rule.email().required(),
    }),
    defineField({
      name: "lastName",
      title: "お名前 (姓)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "company",
      subtitle: "lastName",
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
