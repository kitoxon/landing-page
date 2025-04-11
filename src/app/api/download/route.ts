import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const formData = await req.formData();
  const email = formData.get("email") as string;
  const name = formData.get("name") as string;
  const company = formData.get("company") as string;

  const template = await client.fetch(
    `*[_type == "emailTemplate" && slug.current == "bi-download-confirmation"][0]`,
  );
  if (!template) {
    throw new Error("メールテンプレートが見つかりません");
  }
  function renderTemplate(template: string) {
    return template
      .replace(/{{company}}/g, company || "")
      .replace(/{{name}}/g, name || "");
  }
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Download Brand Insight",
    text: "Thank you for downloading Brand Insight!",
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    return NextResponse.json({ message: "Email sending failed" });
  }
}
