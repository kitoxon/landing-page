"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronUp, Mail } from "lucide-react";
import { PrimaryButton } from "./PrimaryButton";

type Props = {
  number: string;
  title: string;
  description?: string;
  isLast?: boolean;
  hasButton?: boolean;
};

export const ProcessItem = ({
  number,
  title,
  description,
  isLast,
  hasButton,
}: Props) => {
  const [open, setOpen] = useState(number === "01" ? true : false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | null>(null);

  useEffect(() => {
    if (open && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(null);
    }
  }, [open]);

  return (
    <div
      className={`transition-all duration-300 ease-in-out overflow-hidden cursor-pointer ${
        !isLast ? "border-b" : ""
      }`}
      style={{
        height: open && contentRef.current ? `${height! + 85}px` : "85px", // 85px is the collapsed height
      }}
      onClick={() => setOpen((prev) => !prev)}
    >
      <div className="flex items-start gap-4 px-5">
        {/* Number */}
        <div className="text-[#001849] font-barlow font-medium [font-variant-numeric:tabular-nums] md:text-[126px] pt-[14px] md:pt-0 text-[90px] leading-none min-w-[65px]">
          {number}
        </div>

        {/* Content */}
        <div className="flex-1">
          {/* Title */}
          <div className="flex justify-between items-center py-[30px]">
            <h3 className="text-[#001849] font-semibold leading-[1.4] text-lg">
              {title}
            </h3>
            <div className="text-[#001849]">
              <ChevronUp
                size={24}
                className={`transition-transform duration-300 ${open ? "rotate-0" : "rotate-180"}`}
              />
            </div>
          </div>

          {/* Description (hidden by height when collapsed) */}
          <div ref={contentRef}>
            <div className="pb-[30px] flex flex-col gap-5">
              <p className="text-[14px] leading-[2] font-normal whitespace-pre-line ">
                {description}
              </p>
              {hasButton && (
                <div onClick={(e) => e.stopPropagation()}>
                  <PrimaryButton
                    text="お問い合わせ"
                    className="w-[180px]"
                    href="/contact"
                    iconComponent={Mail}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
