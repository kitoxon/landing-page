"use client";

import { ChangeEvent, useRef, useState } from "react";
import Alert from "../Global/Alert";
type formData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  department: string;
  position: string;
  message: string;
  inquiryType: string;
  file: File | null;
};
type props = {
  onSuccess?: () => void;
};
export const ContactForm = ({ onSuccess }: props) => {
  const [form, setForm] = useState<formData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    department: "",
    position: "",
    message: "",
    inquiryType: "",
    file: null,
  });
  const [alert, setAlert] = useState<{
    message: string;
    type?: "success" | "error";
  } | null>(null);
  const showError = (msg: string) => setAlert({ message: msg, type: "error" });
  const showSuccess = (msg: string) =>
    setAlert({ message: msg, type: "success" });
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const agreeRef = useRef<HTMLInputElement>(null);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setFileName(file.name);
      onFileChange(file);
    } else {
      setFileName("");
      onFileChange(null);
    }
  };
  const onFileChange = (file: File | null) => {
    setForm((prev) => ({ ...prev, file }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("company", form.company);
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("phone", form.phone);
      formData.append("message", form.message);
      formData.append("department", form.department);
      formData.append("position", form.position);
      formData.append("inquiryType", form.inquiryType);
      if (form.file) {
        formData.append("file", form.file);
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();
      if (result.success) {
        showSuccess("送信されました。ありがとうございました！");
        setForm({
          company: "",
          name: "",
          email: "",
          phone: "",
          message: "",
          department: "",
          position: "",
          inquiryType: "",
          file: null,
        });
        if (agreeRef.current) {
          agreeRef.current.checked = false;
        }
        if (onSuccess) {
          onSuccess();
        }
      } else {
        showError("送信に失敗しました。");
      }
    } catch (error) {
      showError("送信に失敗しました。");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[600px] mx-5 max-w-[calc(100%-40px)] space-y-5"
    >
      {/* Company Name */}
      <div>
        <label className="font-semibold text-custom block mb-[10px]">
          貴社名 <span className="text-red-500">*</span>
        </label>
        <input
          name="company"
          required
          type="text"
          value={form.company}
          onChange={handleChange}
          placeholder="貴社名をご記入ください"
          className="w-full p-[10px] border rounded-sm bg-white border-[#EEEEEE] text-custom text-[#333] leading-[1.4] placeholder:text-[#cccccc] h-[50px]"
        />
      </div>

      {/* Name */}
      <div>
        <label className="font-semibold text-custom block mb-[10px]">
          お名前 <span className="text-red-500">*</span>
        </label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          type="text"
          placeholder="お名前をご記入ください"
          className="w-full p-[10px] border rounded-sm bg-white border-[#EEEEEE] text-custom text-[#333] leading-[1.4] placeholder:text-[#cccccc] h-[50px]"
        />
      </div>

      {/* Email */}
      <div>
        <label className="font-semibold text-custom block mb-[10px]">
          メールアドレス <span className="text-red-500">*</span>
        </label>
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          type="email"
          placeholder="xxx@example.com"
          className="w-full p-[10px] border rounded-sm bg-white border-[#EEEEEE] text-custom text-[#333] leading-[1.4] placeholder:text-[#cccccc] h-[50px]"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="font-semibold text-custom block mb-[10px]">
          電話番号 <span className="text-red-500">*</span>
        </label>
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          required
          type="tel"
          placeholder="000-1234-5678"
          className="w-full p-[10px] border rounded-sm bg-white border-[#EEEEEE] text-custom text-[#333] leading-[1.4] placeholder:text-[#cccccc] h-[50px]"
        />
      </div>
      {/* Deparment */}
      <div>
        <label className="font-semibold text-custom block mb-[10px]">
          部署 <span className="text-red-500">*</span>
        </label>
        <input
          name="department"
          value={form.department}
          onChange={handleChange}
          required
          type="text"
          placeholder="〇〇部"
          className="w-full p-[10px] border rounded-sm bg-white border-[#EEEEEE] text-custom text-[#333] leading-[1.4] placeholder:text-[#cccccc] h-[50px]"
        />
      </div>
      {/* Position */}
      <div>
        <label className="font-semibold text-custom block mb-[10px]">
          役職 <span className="text-red-500">*</span>
        </label>
        <input
          name="position"
          value={form.position}
          onChange={handleChange}
          required
          type="text"
          placeholder="部長"
          className="w-full p-[10px] border rounded-sm bg-white border-[#EEEEEE] text-custom text-[#333] leading-[1.4] placeholder:text-[#cccccc] h-[50px]"
        />
      </div>
      {/* Phase */}
      <div className="w-[500px]">
        <label className="font-semibold text-custom block mb-[10px]">
          お問い合わせ内容 <span className="text-red-500">*</span>
        </label>
        <div>
          {[
            "詳しいサービスの内容について",
            "価格感やお見積もりのご依頼",
            "営業によるご説明希望",
            "代理店の方はこちら",
          ].map((item) => (
            <label
              key={item}
              className="flex items-center p-[10px] text-custom hover:bg-white cursor-pointer"
            >
              <input
                type="radio"
                name="inquiryType"
                value={item}
                checked={form.inquiryType === item}
                onChange={handleChange}
                required
                className="mr-[10px]"
              />
              {item}
            </label>
          ))}
        </div>
      </div>
      <div>
        <label className="font-semibold text-custom block mb-[10px]">
          お問い合わせ詳細
        </label>
        <textarea
          value={form.message}
          onChange={handleChange}
          name="message"
          required
          className="w-full border border-[#EEEEEE] bg-white rounded p-[10px] h-40 resize-none"
        />
      </div>
      <div className="w-1/2">
        <p className="block font-medium mb-2">ファイル</p>
        <label
          htmlFor="dropzone-file"
          className={`flex flex-col justify-center w-full border-1 border-gray-300 border-dashed rounded-l-xs cursor-pointer bg-white ${fileName ? "border-solid" : ""}`}
        >
          <div className="p-[15px]">
            <p className="text-sm text-gray-500 break-all">
              {fileName || "ファイルを選択する"}
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
      </div>
      {/* Agreement */}
      <div className="flex items-center gap-2 my-10">
        <input
          ref={agreeRef}
          type="checkbox"
          onChange={handleChange}
          required
        />
        <label className="text-sm">
          ご提供いただく
          <a
            href="https://nextstairs.co.jp/privacypolicy"
            target="_blank"
            className="underline"
          >
            個人情報の取り扱い方針
          </a>
          に同意する <span className="text-red-500">*</span>
        </label>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#001849] text-white font-semibold py-3 rounded-md hover:translate-y-1 transform transition-transform duration-300 cursor-pointer"
      >
        {loading ? (
          <div className="flex items-center justify-center gap-2">
            <svg
              className="w-5 h-5 animate-spin text-white"
              viewBox="0 0 24 24"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="transparent"
                strokeWidth="4"
                fill="none"
              />
              <path
                d="M4 12a8 8 0 018-8"
                stroke="#fff"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
            <span>送信中...</span>
          </div>
        ) : (
          "送信する"
        )}
      </button>
      {alert && (
        <Alert
          message={alert.message}
          type={alert.type}
          onClose={() => setAlert(null)}
        />
      )}
    </form>
  );
};
