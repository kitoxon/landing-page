"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Menu, Download, Mail } from "lucide-react";
import { links } from "@/app/utils";
import EnhancedNavLink from "./Global/NavLink";
import { PrimaryButton } from "./Global/PrimaryButton";
import { HamburgMenu } from "./Global/HamburgMenu";
import { useEffect, useState } from "react";
import { Overlay } from "./Global/Overlay";
import { motion, AnimatePresence } from "framer-motion";
export default function Navbar() {
  const navLinks = links.filter((link) => link.nav === true);
  const pathname = usePathname();
  const router = useRouter();
  const isHomepage = pathname === "/";
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
  const navigateTop = () => {
    if (isHomepage) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.replaceState(null, "", "/");
    } else {
      router.push("/");
    }
  };
  return (
    <nav className="fixed top-0 w-full z-10">
      <div className="w-full mx-auto pl-10 h-20">
        <div className="flex justify-between items-center h-full">
          <div onClick={navigateTop} className="cursor-pointer">
            <Image src="/assets/logo.webp" alt="Logo" width={222} height={70} />
          </div>

          <div
            className="h-full bg-white flex items-center px-10 rounded-bl-[10px] [box-shadow:10px_10px_15px_rgba(0,0,0,0.1)] text-[15px] leading-[1.4] gap-[30px]"
            id="navbarNav"
          >
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.title}>
                  <EnhancedNavLink
                    text={link.title}
                    to={link.to}
                    href={link.href}
                    isHomePage={isHomepage}
                  />
                </li>
              ))}
            </ul>
            <div className="flex gap-[10px]">
              <PrimaryButton
                text="資料ダウンロード"
                className="w-[180px]"
                href="/download"
                iconComponent={Download}
              />
              <PrimaryButton
                text="お問い合わせ"
                className="w-[180px]"
                href="/contact"
                iconComponent={Mail}
              />
            </div>
            <div className="relative">
              <button className="cursor-pointer" onClick={open}>
                <Menu />
              </button>
              {isMounted && (
                <Overlay
                  onClose={close}
                  content={
                    <AnimatePresence mode="wait">
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, x: "100%" }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: "100%" }}
                          transition={{ duration: 0.3, ease: [0.4, 0.4, 0, 1] }}
                          onMouseDown={(e) => e.stopPropagation()}
                          className="fixed top-0 right-0 w-full max-w-1/2 h-full bg-white shadow-lg pt-8 px-10 z-[50px] rounded-tl-[10px] rounded-bl-[10px]"
                        >
                          <HamburgMenu
                            isHomePage={isHomepage}
                            onClose={close}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  }
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
