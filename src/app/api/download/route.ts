import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const formData = await req.formData();
  const email = formData.get("email") as string;
  const name = formData.get("name") as string;
  const company = formData.get("company") as string;
  const phone = formData.get("phone") as string;
  const inquiryType = formData.get("inquiryType") as string;
  const year = new Date().getFullYear();
  const template = await client.fetch(
    `*[_type == "emailTemplate" && slug.current == "bi-download-confirmation"][0]`,
  );
  if (!template) {
    throw new Error("メールテンプレートが見つかりません");
  }
  function renderTemplate(template: string) {
    return template
      .replace(/{{company}}/g, company || "")
      .replace(/{{name}}/g, name || "")
      .replace(/{{year}}/g, year.toString());
  }
  const transporter = nodemailer.createTransport({
    service: "gmail", // or 'SendinBlue', 'Mailgun', etc.
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  const emailText = renderTemplate(template.body);
  const mailOptions: any = {
    from: `"${name}" <${email}>`,
    to: "munkhjin@nextstairs.co.jp",
    subject: template.subject,
    text: emailText,
  };
  try {
    await transporter.sendMail(mailOptions);
    await transporter.sendMail({
      from: `Brand Insight(ブランドインサイト) <${process.env.EMAIL_USER}>`,
      to: email, // 👈 customer email
      subject: template.subject,
      text: emailText,
    });

    await client.create({
      _type: "bi_download",
      company,
      name,
      email,
      phone,
      inquiryType,
    });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
