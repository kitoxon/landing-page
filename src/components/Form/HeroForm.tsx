"use client";
import { PrimaryButton } from "../Global/PrimaryButton";
import { Download } from "lucide-react";
import { useState } from "react";
import Alert from "../Global/Alert";
type formData = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
};
type props = {
  onSuccess?: () => void;
};
export const HeroForm = ({ onSuccess }: props) => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<formData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
  });
  const [alert, setAlert] = useState<{
    message: string;
    type?: "success" | "error";
  } | null>(null);
  const showError = (msg: string) => setAlert({ message: msg, type: "error" });
  const showSuccess = (msg: string) =>
    setAlert({ message: msg, type: "success" });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("company", form.company);
      formData.append("firstName", form.firstName);
      formData.append("lastName", form.lastName);
      formData.append("email", form.email);

      const res = await fetch("/api/hero", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();
      if (result.success) {
        showSuccess("送信されました。ありがとうございました！");
        setForm({
          company: "",
          firstName: "",
          email: "",
          lastName: "",
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
    <div className="rounded-xl shadow-custom bg-white p-8">
      <p className="text-[15px] font-semibold leading-[1.4] tracking-normal mb-[10px]">
        お名前<span className="text-[#f23a3c] ml-1">*</span>
      </p>
      <form onSubmit={handleSubmit}>
        <div className="flex gap-5 mb-5">
          <div className="flex flex-col gap-[3px]">
            <label className="text-[13px] font-semibold leading-[1.4]">
              姓
            </label>
            <input
              value={form.lastName}
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              className="border border-[#eeeeee] h-[45px] text-[15px] p-[10px] leading-[1.4] w-full rounded-sm"
              placeholder="山田"
              type="text"
              required
            />
          </div>
          <div className="flex flex-col gap-[3px]">
            <label className="text-[13px] font-semibold leading-[1.4]">
              名
            </label>
            <input
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              className="border border-[#eeeeee] h-[45px] text-[15px] p-[10px] leading-[1.4] w-full rounded-sm"
              placeholder="太郎"
              type="text"
              required
            />
          </div>
        </div>
        <div className="mb-5">
          <div className="flex flex-col gap-[10px]">
            <label className="text-[15px] font-semibold leading-[1.4]">
              ご連絡先メールアドレス
              <span className="text-[#f23a3c] ml-1">*</span>
            </label>
            <input
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="border border-[#eeeeee] h-[45px] text-[15px] p-[10px] leading-[1.4] w-full rounded-sm"
              placeholder="taro.yamada@nextstairs.co.jp"
              type="email"
              required
            />
          </div>
        </div>
        <div className="mb-5">
          <div className="flex flex-col gap-[10px]">
            <label className="text-[15px] font-semibold leading-[1.4]">
              貴社名
              <span className="text-[#f23a3c] ml-1">*</span>
            </label>
            <input
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              className="border border-[#eeeeee] h-[45px] text-[15px] p-[10px] leading-[1.4] w-full rounded-sm"
              placeholder="⚪︎⚪︎株式会社"
              type="text"
              required
            />
          </div>
        </div>
        <div className="mb-10">
          <label className="text-[15px] font-semibold leading-[1.4]">
            <input
              type="checkbox"
              name="プライバシーポリシーへの同意"
              required
              className="mr-[10px]"
            />
            プライバシー・ポリシーに同意する
          </label>
        </div>
        <div>
          <PrimaryButton
            text="資料ダウンロード"
            className="w-full"
            type="submit"
            iconComponent={Download}
            loading={loading}
          />
        </div>
        {alert && (
          <Alert
            message={alert.message}
            type={alert.type}
            onClose={() => setAlert(null)}
          />
        )}
      </form>
    </div>
  );
};
