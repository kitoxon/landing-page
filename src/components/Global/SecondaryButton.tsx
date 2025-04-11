"use client";

import Link from "next/link";
import { ComponentType } from "react";

type SecondaryButtonProps = {
  text: string;
  href: string;
  iconComponent?: ComponentType<{ size?: number; color?: string }>;
};

export const SecondaryButton = ({
  text,
  href,
  iconComponent: Icon,
}: SecondaryButtonProps) => {
  return (
    <Link
      href={href}
      className="rounded-full px-8 py-3 border border-[#001849] text-[#001849] text-sm font-semibold transform hover:scale-[1.05] transition-all duration-300 flex items-center gap-2"
    >
      <span>{text}</span>
      {Icon && <Icon size={20} />}
    </Link>
  );
};
