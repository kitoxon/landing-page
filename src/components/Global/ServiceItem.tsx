"use client";
import { divVariants } from "@/app/utils";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type props = {
  title: string;
  description: string;
  img_url: string;
  list: string[];
  reverse?: boolean;
};

export const ServiceItem = ({
  title,
  description,
  img_url,
  list,
  reverse = false,
}: props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={divVariants}
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } justify-center items-stretch shadow-[10px_10px_15px_rgba(0,0,0,0.1)] rounded-[10px] w-full overflow-hidden`}
    >
      <div className="relative flex-1">
        <img
          src={img_url}
          alt="Service Icon"
          className="h-full w-full absolute rounded-[10px] object-cover object-center"
        />
      </div>
      <div className="py-20 px-10 rounded-xl bg-white text-left max-w-[45%] flex flex-col gap-5 w-full h-auto">
        <h3 className="text-[#001849] text-2xl font-semibold leading-[1.4]">
          {title}
        </h3>
        <p className="text-[15px] leading-[2]">{description}</p>
        <div className="flex flex-col gap-2">
          {list.map((item, index) => (
            <div key={index} className="flex items-center gap-[5px]">
              <div className="bg-[#001849] h-2 w-2 rounded-[50px] max-w-full"></div>
              <span className="text-[15px] leading-[1.4]">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
