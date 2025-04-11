import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { client } from "@/sanity/lib/client";
export async function POST(req: Request) {
  const formData = await req.formData();
  const company = formData.get("company") as string;
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const department = formData.get("department") as string;
  const position = formData.get("position") as string;
  const message = formData.get("message") as string;
  const inquiryType = formData.get("inquiryType") as string;
  const file = formData.get("file") as File | null;
  const year = new Date().getFullYear();
  const template = await client.fetch(
    `*[_type == "emailTemplate" && slug.current == "bi-contact-confirmation"][0]`,
  );

  if (!template) {
    throw new Error("メールテンプレートが見つかりません");
  }
  function renderTemplate(
    template: string,
    values: Record<string, string | undefined>,
  ) {
    template = template.replace(
      /{{#if fileUrl}}([\s\S]*?){{\/if}}/,
      (_, content) =>
        values.fileUrl ? content.replace("{{fileUrl}}", values.fileUrl) : "",
    );
    return template
      .replace(/{{company}}/g, company || "")
      .replace(/{{name}}/g, name || "")
      .replace(/{{email}}/g, email || "")
      .replace(/{{phone}}/g, phone || "")
      .replace(/{{department}}/g, department || "")
      .replace(/{{position}}/g, position || "")
      .replace(/{{message}}/g, message || "")
      .replace(/{{inquiryType}}/g, inquiryType || "")
      .replace(/{{year}}/g, year.toString());
  }
  let attachment: any = null;
  let fileUrl: string = "";
  if (file) {
    const buffer = Buffer.from(await file.arrayBuffer());
    attachment = {
      filename: file.name,
      content: buffer,
      contentType: file.type,
    };
    const uploadAsset = await client.assets.upload("file", buffer, {
      filename: file.name,
      contentType: file.type,
    });
    fileUrl = uploadAsset.url;
  }
  const transporter = nodemailer.createTransport({
    service: "gmail", // or 'SendinBlue', 'Mailgun', etc.
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  const emailText = renderTemplate(template.body, {
    company,
    name,
    email,
    phone,
    department,
    position,
    message,
    inquiryType,
    fileUrl,
  });
  const mailOptions: any = {
    from: `"${name}" <${email}>`,
    to: "munkhjin@nextstairs.co.jp",
    subject: template.subject,
    text: emailText,
    attachments: attachment ? [attachment] : [],
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
      _type: "bi_contact",
      company,
      name,
      email,
      phone,
      department,
      position,
      inquiryType,
      message,
      fileUrl,
    });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
