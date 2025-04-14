"use client";

import { divVariants } from "@/app/utils";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export const AboutSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <section>
      <div className="w-full md:pb-20 md:px-20 p-[15px] md:pt-0">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={divVariants}
          className="rounded-[10px] shadow-custom px-[15px] md:px-10 py-20 bg-white text-center"
        >
          <h2 className="text-[20px] md:text-[28px] font-bold md:font-semibold leading-[2] md:leading-[1.4] mb-10 p-5 text-[#001849]">
            インサイトを通じて、 あらゆる スポーツの価値を高める。
          </h2>
          <p className="text-[12px] md:text-lg md:leading-[2.4] leading-[3.4] break-keep text-[#111111]">
            スポーツの価値を 高める旅路には、 多くの挑戦が伴います。
            <br />
            私たちは、 スポーツチームが 自信を持って 前に突き進むことが
            できるよう、
            <br />
            スポンサー企業が 費用対効果を把握し、 実施根拠を明確にできるよう、
            <br />
            スポンサー広告価値換算を 提供しています。
            <br />
            メディア露出の可視化から 広告価値の定量化、
            スポンサー広告ROIデータの提供、
            <br />
            提案資料の作成まで、 スポンサー広告の価値換算に
            必要なすべてをカバーします。
            <br />
            スポーツ科学・スポーツマネジメントの 専門家による監修のもと
            開発され、 正確で迅速な
            <br />
            データ提供を 可能にします。
            <br />
            スポーツの価値を 切り開き、 未来への第一歩を 踏み出しましょう。
          </p>
        </motion.div>
      </div>
    </section>
  );
};
