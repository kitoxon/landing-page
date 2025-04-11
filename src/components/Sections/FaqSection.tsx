"use client";

import { useRef, useState } from "react";
import { ChevronUp } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { divVariants } from "@/app/utils";

interface FAQItem {
  question: string;
  answer: string;
  isFirst: boolean;
}

const FAQItem = ({ question, answer, isFirst }: FAQItem) => {
  const [open, setOpen] = useState(isFirst ? true : false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={divVariants}
      className="mb-4 bg-white shadow-md rounded-xl overflow-hidden"
    >
      <button
        className="w-full flex justify-between items-center py-4 px-6 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-4">
          <span className="w-10 h-10 rounded-full text-2xl flex items-center leading-none justify-center bg-[#001849] text-white font-semibold font-barlow">
            Q
          </span>
          <p className="font-semibold text-[#001849] leading-[1.4] text-lg">
            {question}
          </p>
        </div>
        <ChevronUp
          className={`transform transition-transform duration-300 text-[#001849] ${
            open ? "rotate-0" : "rotate-180"
          }`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
          open ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden px-6 flex items-center gap-4">
          <span className="w-10 h-10 rounded-full text-2xl flex items-center leading-none justify-center bg-yellow-400 text-black font-semibold font-barlow shrink-0">
            A
          </span>
          <p className="leading-relaxed text-custom">{answer}</p>
        </div>
      </div>
    </motion.div>
  );
};

export const FAQSection = () => {
  const faqItems = [
    {
      question: "初期費用はかかりますか？",
      answer: "サービスご利用での初期費用はかかりません。",
    },
    {
      question: "導入にどのくらい時間がかかりますか？",
      answer:
        "ご契約締結翌日からサービス提供可能ですが、調査範囲等事前にヒアリングを行うため通常初回お打ち合わせから1〜2か月後に開始するケースが多いです。",
    },
    {
      question: "サポートはどのように受けられますか？",
      answer:
        "入念な事前ヒアリングから調査進捗のご報告、最終調査報告会まで丁寧にサポートさせていただきます。初めてデータを取得される方へは数字の見方や活用方法などもお伝えいたします。",
    },
    {
      question: "どのようなプランがありますか？",
      answer:
        "単日イベントから年間契約まで幅広くご提案可能です。お打ち合わせにてご要望をお聞きした後、具体的なプランをご提案いたします。",
    },
    {
      question: "どんな業種で利用されていますか？",
      answer:
        "プロスポーツチーム様、スポンサー企業様に広くご利用いただいており業種を限定しておりません。",
    },
  ];

  return (
    <div className="p-20 flex">
      <div className="flex-1">
        {faqItems.map((item, index) => (
          <FAQItem
            key={index}
            isFirst={index === 0}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>

      <div className="flex justify-end gap-[10px] w-1/4">
        <p
          className="text-[#001849] text-lg tracking-widest"
          style={{ writingMode: "vertical-lr" }}
        >
          よくあるご質問
        </p>
        <h2
          className="text-7xl font-semibold text-[#001849] leading-none font-barlow tracking-tight"
          style={{ writingMode: "vertical-lr" }}
        >
          FAQ
        </h2>
      </div>
    </div>
  );
};
