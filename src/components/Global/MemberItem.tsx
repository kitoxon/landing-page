"use client";

import { divVariants } from "@/app/utils";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ZoomIn } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Overlay } from "./Overlay";
import { PortableText } from "next-sanity";
import { X } from "lucide-react";
type props = {
  member: {
    name: string;
    nameEn: string;
    role: string;
    photo: string;
    bio: string | any[];
  };
  onClose?: () => void;
};
const MemberDetail = ({ member, onClose }: props) => {
  return (
    <div className="h-[50vh] bg-white rounded-tl-[10px] rounded-tr-[10px] [box-shadow:0px_6px_15px_0px_rgba(0,0,0,0.2)] p-10 w-full max-w-full">
      <button
        className="absolute -top-10 right-5 cursor-pointer"
        onClick={onClose}
      >
        <X color="#fff" />
      </button>
      <div className="flex gap-10 p-5 w-full">
        <div className="flex flex-col w-1/2">
          <Image
            src={member.photo}
            alt={member.name}
            width={600}
            height={600}
            className="rounded-full h-[120px] w-[120px] object-cover"
          />
          <div className="mt-5 flex flex-col">
            <p className="font-semibold text-lg text-[#001849]">
              {member.name}{" "}
              <span className="text-[#001849]">| {member.nameEn}</span>
            </p>
            <p className="text-custom text-[#000000ff] mt-1">{member.role}</p>
          </div>
        </div>
        <div className="w-1/2">
          <div className="text-custom text-[#000000ff] leading-[2]">
            {Array.isArray(member.bio) && <PortableText value={member.bio} />}
          </div>
        </div>
      </div>
    </div>
  );
};
export const MemberItem = ({ member }: props) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const open = () => {
    setIsMounted(true);
    setTimeout(() => setIsOpen(true), 10);
  };
  const close = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => setIsMounted(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={divVariants}
        onClick={open}
        className="rounded-[10px] shadow-custom overflow-hidden bg-white relative group cursor-pointer h-full"
      >
        <div className="w-full relative overflow-hidden">
          <Image
            src={member.photo}
            alt={member.name}
            width={600}
            height={600}
            className="w-full group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="px-6 py-4 flex flex-col">
          <p className="font-semibold text-lg text-[#001849]">
            {member.name}{" "}
            <span className="text-[#001849]">| {member.nameEn}</span>
          </p>
          <p className="text-custom text-[#000000ff] mt-1">{member.role}</p>
        </div>
        <div className="absolute bottom-4 right-4">
          <ZoomIn
            size={20}
            className="text-[#001849] group-hover:scale-120 transition-transform duration-300"
          />
        </div>
      </motion.div>
      {isMounted && (
        <Overlay
          onClose={close}
          content={
            <AnimatePresence mode="wait">
              {isOpen && (
                <motion.div
                  key="member-modal"
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "100%", opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.4, 0.4, 0, 1] }}
                  onMouseDown={(e) => e.stopPropagation()}
                  className="flex items-end w-full relative z-50"
                >
                  <MemberDetail member={member} onClose={close} />
                </motion.div>
              )}
            </AnimatePresence>
          }
        />
      )}
    </div>
  );
};
