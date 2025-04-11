"use client";

import { useState } from "react";
import Alert from "../Global/Alert";
type formData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  inquiryType: string;
};
type props = {
  onSuccess?: () => void;
};
export const DownloadForm = ({ onSuccess }: props) => {
  const [formData, setFormData] = useState<formData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    inquiryType: "",
  });
  const [alert, setAlert] = useState<{
    message: string;
    type?: "success" | "error";
  } | null>(null);
  const showError = (msg: string) => setAlert({ message: msg, type: "error" });
  const showSuccess = (msg: string) =>
    setAlert({ message: msg, type: "success" });
  const [loading, setLoading] = useState(false);
  const [agree, setAgree] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const preFormData = new FormData();
      preFormData.append("company", formData.company);
      preFormData.append("name", formData.name);
      preFormData.append("email", formData.email);
      preFormData.append("phone", formData.phone);
      preFormData.append("inquiryType", formData.inquiryType);
      const res = await fetch("/api/download", {
        method: "POST",
        body: preFormData,
      });
      const result = await res.json();
      if (result.success) {
        showSuccess("送信されました。ありがとうございました！");
        setFormData({
          company: "",
          name: "",
          email: "",
          phone: "",
          inquiryType: "",
        });
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
          value={formData.company}
          onChange={(e) =>
            setFormData({ ...formData, company: e.target.value })
          }
          required
          type="text"
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
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
          type="tel"
          placeholder="000-1234-5678"
          className="w-full p-[10px] border rounded-sm bg-white border-[#EEEEEE] text-custom text-[#333] leading-[1.4] placeholder:text-[#cccccc] h-[50px]"
        />
      </div>

      {/* Phase */}
      <div className="w-[500px]">
        <label className="font-semibold text-custom block mb-[10px]">
          検討フェーズ <span className="text-red-500">*</span>
        </label>
        <div>
          {[
            "まずは相談したい",
            "比較検討したい",
            "導入を前向きに考えている",
            "情報収集レベル",
          ].map((item) => (
            <label
              key={item}
              className="flex items-center p-[10px] text-custom hover:bg-white cursor-pointer"
            >
              <input
                type="radio"
                name="inquiryType"
                value={item}
                checked={formData.inquiryType === item}
                onChange={(e) =>
                  setFormData({ ...formData, inquiryType: e.target.value })
                }
                required
                className="mr-[10px]"
              />
              {item}
            </label>
          ))}
        </div>
      </div>

      {/* Agreement */}
      <div className="flex items-center gap-2 my-10">
        <input
          type="checkbox"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
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
