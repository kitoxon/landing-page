// components/FeatureItem.tsx
"use client";
import { ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { divVariants } from "@/app/utils";
type Props = {
  icon: ReactNode;
  title: string;
  description: string;
};

export const FeatureItem = ({ icon, title, description }: Props) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={divVariants}
      className="bg-white rounded-[10px] [box-shadow:10px_10px_15px_rgba(0,0,0,0.1)] py-10 px-5 flex flex-col gap-[30px] w-full h-full"
    >
      <div className="w-20 h-20 mx-auto">{icon}</div>
      <h3 className="text-[#001849] text-center font-semibold text-xl">
        {title}
      </h3>
      <p className="text-[15px] leading-relaxed">{description}</p>
    </motion.div>
  );
};
