// components/Sections/ProcessSection.tsx
"use client";
import { useRef } from "react";
import { ProcessItem } from "../Global/ProcessItem";
import { motion, useInView } from "framer-motion";
import { divVariants } from "@/app/utils";
const steps = [
  {
    number: "01",
    title: "お問い合わせ",
    description:
      "まずは、お問い合わせフォームに必要事項をご記入の上ご連絡ください。\n担当者より無料相談日程調整のご連絡を差し上げます。",
  },
  {
    number: "02",
    title: "無料相談",
    description:
      "お問い合わせ後、担当者よりご連絡いたします。\n貴社の課題やニーズを詳しくヒアリングし、最適な解決策をご提案します。",
  },
  {
    number: "03",
    title: "ご提案・お見積もり",
    description:
      "ヒアリング内容をもとに、具体的なご提案書とお見積もりを作成いたします。\n貴社の状況に応じた柔軟なプランをご提示しますので、ぜひご検討ください。",
  },
  {
    number: "04",
    title: "ご契約",
    description:
      "ご提案内容にご納得いただいた上で、正式にご契約手続きを進めます。\n契約手続きに関するサポートも万全ですのでご安心ください。",
  },
  {
    number: "05",
    title: "サービス提供開始",
    description:
      "契約完了後、速やかにサービスの提供を開始いたします。\n担当者が導入初期から運用まで、丁寧にサポートいたします。",
  },
];

export const ProcessSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <div className="md:p-20 py-20 px-[15px]">
      <div className="flex flex-col-reverse md:flex-row gap-[60px] md:gap-0">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={divVariants}
          className="bg-white rounded-[10px] [box-shadow:10px_10px_15px_rgba(0,0,0,0.1)] md:max-w-3/4 w-full"
        >
          {steps.map((step, idx) => (
            <ProcessItem
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              isLast={idx === steps.length - 1}
              hasButton={idx === 0}
            />
          ))}
        </motion.div>
        <div className="flex justify-end md:items-start gap-[10px] md:w-1/4 flex-col-reverse md:flex-row items-center">
          <p className="text-[#001849] text-lg tracking-widest writing-switch">
            ご利用の流れ
          </p>
          <h2 className="md:text-7xl text-5xl font-semibold text-[#001849] leading-none tracking-tight font-barlow writing-switch">
            PROCESS
          </h2>
        </div>
      </div>
    </div>
  );
};
