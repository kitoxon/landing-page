"use client";

import Image from "next/image";
import { HeroForm } from "../Form/HeroForm";
import { HeroClient } from "../Form/HeroClient";
import { motion } from "framer-motion";
import { useState } from "react";
export const HeroSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  return (
    <section className="px-6 md:px-20 pt-20 bg-[url(/assets/hero-bg.svg)] bg-cover bg-center relative">
      <div className="w-full mx-auto flex flex-row items-center justify-between gap-20 md:py-[50px] py-32">
        {/* Left Text Block */}
        <div className="w-[500px] flex flex-col gap-8">
          <h1 className="text-[#001849] text-4xl md:text-5xl font-bold leading-[1.4]">
            スポンサーシップの
            <br />
            価値を多角的に把握
            <br />
            することができる
          </h1>

          <div className="hidden md:flex gap-5">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: [0, 1.1, 1] }}
              transition={{ duration: 1, ease: [0.4, 0.4, 0, 1] }}
              className="bg-white rounded-xl [box-shadow:10px_10px_15px_rgba(0,0,0,0.1)] min-h-[100px] min-w-[150px] flex flex-col justify-center items-center"
            >
              <p className="text-[15px] font-semibold leading-[1.4] text-[#001849] text-center">
                対応メディア
              </p>
              <div className="flex items-end">
                <p className="text-5xl font-semibold leading-none text-[#001849]">
                  5
                </p>
                <p className="text-xl leading-[1.4] font-semibold text-[#001849]">
                  大メディア
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: [0, 1.1, 1] }}
              transition={{ duration: 1, ease: [0.4, 0.4, 0, 1], delay: 0.1 }}
              className="bg-white rounded-xl [box-shadow:10px_10px_15px_rgba(0,0,0,0.1)] min-h-[100px] min-w-[150px] flex flex-col justify-center items-center"
            >
              <p className="text-[15px] font-semibold leading-[1.4] text-[#001849] text-center">
                対象スポーツ
              </p>
              <div className="flex items-end">
                <p className="text-5xl font-semibold leading-none text-[#001849]">
                  100
                </p>
                <p className="text-xl leading-[1.4] font-semibold text-[#001849]">
                  以上
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Visual Block (image or animation) */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: [0, 1.1, 1] }}
          transition={{ duration: 1, ease: [0.4, 0.4, 0, 1], delay: 0.2 }}
          className="w-[450px] hidden md:block"
        >
          {isSubmitted && <HeroClient />}
          {!isSubmitted && <HeroForm onSuccess={() => setIsSubmitted(true)} />}
        </motion.div>
      </div>

      <Image
        className="absolute md:left-[450px] left-[100px] bottom-[-150px] z-[-1] animate-spin-slow"
        src="assets/hero-blue-circle.svg"
        alt="Blue Circle"
        width={350}
        height={350}
      />
      <Image
        className="absolute left-[-80px] top-[-180px] z-[-1] animate-reverse-spin-slow"
        src="assets/hero-pink-circle.svg"
        alt="Pink Circle"
        width={350}
        height={350}
      />
    </section>
  );
};
