import { Menu, X, Download, Mail } from "lucide-react";
import { links } from "@/app/utils";
import { HamburgLink } from "./HamburgLink";
import { PrimaryButton } from "./PrimaryButton";
import Link from "next/link";
type Props = {
  isHomePage: boolean;
  onClose: () => void;
};

export const HamburgMenu = ({ isHomePage, onClose }: Props) => {
  return (
    <div>
      {/* Close button inside the menu */}
      <div className="flex justify-end mb-6">
        <button className="cursor-pointer" onClick={onClose}>
          <X />
        </button>
      </div>

      <ul className="flex flex-col divide-y divide-gray-200 mb-[30px]">
        {links.map((link) => (
          <li key={link.href} className="group">
            <HamburgLink
              text={link.menuTitle}
              isHomePage={isHomePage}
              to={link.to}
              href={link.href}
              onClick={onClose} // ✅ Close menu when clicked
            />
          </li>
        ))}
      </ul>
      <div className="flex gap-[10px] mb-10">
        <PrimaryButton
          text="資料ダウンロード"
          href="/download"
          className="w-full"
          iconComponent={Download}
        />
        <PrimaryButton
          text="お問い合わせ"
          href="/contact"
          className="w-full"
          iconComponent={Mail}
        />
      </div>
      <div className="flex justify-end text-[15px] leading-[1.4]">
        <Link target="_blank" href="https://nextstairs.co.jp/privacypolicy">
          プライバシーポリシー
        </Link>
      </div>
    </div>
  );
};
