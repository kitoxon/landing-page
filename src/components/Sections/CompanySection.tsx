"use client";
import { motion, useInView } from "framer-motion";
import { companyInfo } from "@/app/company";
import MapEmbed from "../Global/MapEmbed";
import { useRef } from "react";
import { divVariants } from "@/app/utils";

export const CompanySection = () => {
  const company = companyInfo;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <div className="p-20 flex">
      <div className="flex items-start gap-[10px] w-1/4">
        <h2
          className="text-7xl font-semibold text-[#001849] font-barlow leading-none tracking-tight"
          style={{ writingMode: "vertical-lr" }}
        >
          COMPANY
        </h2>
        <p
          className="text-[#001849] text-lg tracking-widest"
          style={{ writingMode: "vertical-lr" }}
        >
          会社概要
        </p>
      </div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={divVariants}
        className="flex-1 p-[10px]"
      >
        <div className="py-[30px] flex border-dotted border-t-1 w-full">
          <p className="min-w-[200px]">会社名</p>
          <p className="text-[15px] leading-[1.6] text-[#000000ff]">
            {company.name}
          </p>
        </div>
        <div className="py-[30px] flex border-dotted border-t-1 w-full">
          <p className="min-w-[200px]">代表者</p>
          <p className="text-[15px] leading-[1.6] text-[#000000ff]">
            {company.ceo}
          </p>
        </div>
        <div className="py-[30px] flex border-dotted border-t-1 w-full">
          <p className="min-w-[200px]">設立</p>
          <p className="text-[15px] leading-[1.6] text-[#000000ff]">
            {company.founded}
          </p>
        </div>
        <div className="py-[30px] flex border-dotted border-t-1 w-full">
          <p className="min-w-[200px]">資本金</p>
          <p className="text-[15px] leading-[1.6] text-[#000000ff]">
            {company.capital}
          </p>
        </div>

        <div className="py-[30px] border-dotted border-t-1 border-b-1 flex w-full">
          <p className="min-w-[200px]">所在地</p>
          <div className="w-full flex flex-col gap-5">
            <p className="text-[15px] leading-[1.6] text-[#000000ff]">
              {company.address.zip}
              <br />
              {company.address.building}
              <br />
              {company.address.street}
            </p>
            <div className="shadow-custom w-full h-[300px] p-[10px] relative bg-white">
              <MapEmbed />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
