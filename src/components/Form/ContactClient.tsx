"use client";
import { ContactForm } from "./ContactForm";
import { useState } from "react";
import { House } from "lucide-react";
import { SecondaryButton } from "@/components/Global/SecondaryButton";
export const ContactClient = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const onSuccess = () => {
    setIsSubmitted(true);
    scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      {isSubmitted && (
        <div className="flex flex-col gap-5">
          <h2
            role="status"
            aria-live="polite"
            className="text-[#001849ff] text-lg font-semibold"
          >
            お問い合わせいただきましてありがとうございました。
          </h2>
          <p className="text-custom flex-1 text-[#000000ff] leading-8">
            3営業日以内に担当者よりご連絡差し上げますので今しばらくお待ちください。
            <br />
            お問い合わせ内容によってはご返信できない場合もございます。あらかじめご了承ください。
          </p>
          <div className="w-fit mt-5">
            <SecondaryButton
              iconComponent={House}
              text="ホームに戻る"
              href="/"
            />
          </div>
        </div>
      )}
      {!isSubmitted && (
        <div className="flex">
          <p className="text-custom flex-1 text-[#000000ff] leading-8">
            こちらのお問い合わせフォームに必要事項をご記入の上、送信ボタンを押してください。
            <br />
            お問い合わせ内容によってはご返信できない場合もございます。あらかじめご了承ください。
          </p>
          <div className="flex-2 w-auto h-auto max-w-full flex justify-center">
            <ContactForm onSuccess={onSuccess} />
          </div>
        </div>
      )}
    </div>
  );
};
