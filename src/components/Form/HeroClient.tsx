"use client";
import { PrimaryButton } from "../Global/PrimaryButton";
import { Download } from "lucide-react";
export const HeroClient = () => {
  return (
    <div className="rounded-xl shadow-custom bg-white p-8">
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
        </div>
      </div>
    </div>
  );
};
