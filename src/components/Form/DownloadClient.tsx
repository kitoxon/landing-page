"use client";
import { DownloadForm } from "@/components/Form/DownloadForm";
import { useState } from "react";
import { SecondaryButton } from "../Global/SecondaryButton";
import { House, Download } from "lucide-react";
import { PrimaryButton } from "../Global/PrimaryButton";
export const DownloadClient = () => {
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
            資料のダウンロードありがとうございます 。
          </h2>
          <p className="text-custom flex-1 text-[#000000ff] leading-8">
            下記資料ダウンロードボタンを押すと、サービスの詳細資料(PDF)をダウンロードいただけます
          </p>
          <div className="w-fit mt-5 flex flex-col gap-5">
            <PrimaryButton
              text="資料ダウンロード"
              className="w-[180px]"
              href="https://drive.google.com/uc?export=download&id=1gJRlKzsWbogsgRaF3aRW_h05wZpb1sAh"
              iconComponent={Download}
            />
            <SecondaryButton
              iconComponent={House}
              text="ホームに戻る"
              href="/"
            />
          </div>
        </div>
      )}
      {!isSubmitted && (
        <div className="flex flex-col md:flex-row gap-[60px] md:gap-0">
          <p className="text-custom flex-1 text-[#000000ff] leading-8">
            こちらの資料ダウンロードフォームに必要事項をご記入の上、送信ボタンを押してください。
            <br />
            送信後、サービスの詳細資料をダウンロードいただけます。
          </p>
          <div className="flex-2 w-auto h-auto max-w-full flex justify-center">
            <DownloadForm onSuccess={onSuccess} />
          </div>
        </div>
      )}
    </div>
  );
};
