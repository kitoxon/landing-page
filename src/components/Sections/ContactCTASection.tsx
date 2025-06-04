"use client";
import Image from "next/image";
import Link from "next/link";
import { PrimaryButton } from "../Global/PrimaryButton";
import { Download, Mail } from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";
export const ContactCTASection = () => {
  const colorDiv = {
    hidden: { width: 0, left: 0 },
    visible: {
      width: "100%",
      left: 0,
      transition: {
        duration: 1,
        ease: [0.4, 0.4, 0, 1],
      },
    },
  };
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    amount: 0.8,
  });
  return (
    <div className="md:px-20 px-[15px] relative">
      <div className="flex flex-col md:flex-row relative rounded-[10px] w-full overflow-hidden bg-white z-0">
        <AnimatePresence>
          <motion.div
            ref={ref}
            initial="hidden" // Start with no width
            animate={inView ? "visible" : "hidden"} // Fill from left to right
            variants={colorDiv}
            aria-hidden="true"
            className="bg-[#ffce00ff] absolute top-0 left-0 w-full h-full z-[-1]"
          ></motion.div>
        </AnimatePresence>
        <div className="md:w-1/2 flex flex-col justify-center md:px-12 md:py-16 pt-10 pb-5 px-5">
          <h2 className="text-[#001849] md:text-3xl text-2xl font-semibold leading-[1.4]">
            些細なことでも構いません。
            <br /> まずはお話を聞かせてください。
          </h2>
        </div>

        <div className="md:w-1/2 flex flex-col md:flex-row gap-6 md:px-6 md:py-10 py-5 px-5">
          {/* First Card */}

          <div className="flex flex-col gap-5 rounded-[10px] bg-white shadow-custom overflow-hidden">
            <Image
              src="/assets/cta-1.webp"
              alt="Brand Insight"
              width={400}
              height={300}
              className="object-cover w-full h-full"
            />
            <div className="flex flex-col gap-3 px-6 pb-6">
              <h3 className="text-[#001849] font-semibold text-[17px]">
                Brand Insightについてさらに詳しく
              </h3>
              <p className="text-custom text-[#000000ff]">
                詳細な料金プランや豊富な実績を記載した資料をご用意しています。
              </p>
              <div className="flex justify-center">
                <PrimaryButton
                  text="資料ダウンロード"
                  href="/download"
                  iconComponent={Download}
                  className="w-[180px]"
                />
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div className="flex flex-col gap-5 rounded-[10px] bg-white shadow-custom overflow-hidden">
            <Image
              src="/assets/cta-2.webp"
              alt="Free Consultation"
              width={400}
              height={300}
              className="object-cover w-full h-full"
            />
            <div className="flex flex-col gap-3 px-6 pb-6">
              <h3 className="text-[#001849] font-semibold text-[17px]">
                まずは気軽に無料相談
              </h3>
              <p className="text-custom text-[#000000ff]">
                スポーツビジネスに精通したコンサルタントとお話できます。
              </p>
              <div className="flex justify-center">
                <PrimaryButton
                  text="お問い合わせ"
                  href="/contact"
                  iconComponent={Mail}
                  className="w-[180px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-1/2 bottom-0 w-full bg-[#001849] left-0 z-[-2]"></div>
    </div>
  );
};
