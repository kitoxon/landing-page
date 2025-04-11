"use client";
import { useEffect } from "react";

type AlertProps = {
  message: string;
  type?: "success" | "error";
  onClose?: () => void;
};

export default function Alert({
  message,
  type = "success",
  onClose,
}: AlertProps) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onClose?.();
    }, 3000);

    return () => clearTimeout(timeout);
  }, [onClose]);

  return (
    <div
      className={`fixed top-5 right-1/2 transform translate-x-1/2  text-sm p-3 rounded-lg shadow-lg text-white transition-all duration-300 z-50
        ${type === "success" ? "bg-green-500" : "bg-[tomato]"}`}
    >
      {message}
    </div>
  );
}
