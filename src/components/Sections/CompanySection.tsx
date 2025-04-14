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
    <div className="md:p-20 py-20 px-[15px] flex md:flex-row flex-col gap-[60px] md:gap-0">
      <div className="flex md:items-start gap-[10px] md:w-1/4 flex-col md:flex-row items-center">
        <h2 className="md:text-7xl text-5xl font-semibold text-[#001849] font-barlow leading-none tracking-tight writing-switch">
          COMPANY
        </h2>
        <p className="text-[#001849] text-lg tracking-widest writing-switch">
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
          <p className="md:min-w-[200px] min-w-[120px]">会社名</p>
          <p className="text-[15px] leading-[1.6] text-[#000000ff]">
            {company.name}
          </p>
        </div>
        <div className="py-[30px] flex border-dotted border-t-1 w-full">
          <p className="md:min-w-[200px] min-w-[120px]">代表者</p>
          <p className="text-[15px] leading-[1.6] text-[#000000ff]">
            {company.ceo}
          </p>
        </div>
        <div className="py-[30px] flex border-dotted border-t-1 w-full">
          <p className="md:min-w-[200px] min-w-[120px]">設立</p>
          <p className="text-[15px] leading-[1.6] text-[#000000ff]">
            {company.founded}
          </p>
        </div>
        <div className="py-[30px] flex border-dotted border-t-1 w-full">
          <p className="md:min-w-[200px] min-w-[120px]">資本金</p>
          <p className="text-[15px] leading-[1.6] text-[#000000ff]">
            {company.capital}
          </p>
        </div>

        <div className="py-[30px] border-dotted border-t-1 border-b-1 flex w-full">
          <p className="md:min-w-[200px] min-w-[120px]">所在地</p>
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
