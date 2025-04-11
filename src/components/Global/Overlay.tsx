// Overlay.tsx
"use client";
import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

type OverlayProps = {
  content: ReactNode;
  onClose?: () => void;
};

export const Overlay = ({ content, onClose }: OverlayProps) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/25 z-40 flex justify-center items-end"
        onMouseDown={onClose}
      >
        {content}
      </motion.div>
    </AnimatePresence>
  );
};
