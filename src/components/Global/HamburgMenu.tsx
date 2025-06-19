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
  const hamburgerLinks = [...links];

  const newsIdx = hamburgerLinks.findIndex((l) => l.menuTitle === "お知らせ");
  const companyIdx = hamburgerLinks.findIndex(
    (l) => l.menuTitle === "会社概要",
  );

  if (newsIdx !== -1 && companyIdx !== -1 && newsIdx !== companyIdx) {
    const [newsItem] = hamburgerLinks.splice(newsIdx, 1);
    const newCompanyIdx = hamburgerLinks.findIndex(
      (l) => l.menuTitle === "会社概要",
    );
    hamburgerLinks.splice(newCompanyIdx, 0, newsItem); // insert right before
  }

  return (
    <div>
      {/* Close button inside the menu */}
      <div className="flex justify-end mb-6">
        <button className="cursor-pointer" onClick={onClose}>
          <X />
        </button>
      </div>

      <ul className="flex flex-col divide-y divide-black-200 mb-[30px]">
        {hamburgerLinks.map((link, idx) => {
          const isFirst = idx === 0;
          const isLast = idx === hamburgerLinks.length - 1;
          const borderClasses = `${isFirst ? "border-t" : ""} ${isLast ? "border-b" : ""}`;

          return (
            <li key={link.href} className={`group ${borderClasses}`}>
              <HamburgLink
                index={idx}
                text={link.menuTitle}
                isHomePage={isHomePage}
                to={link.to}
                href={link.href}
                onClick={onClose}
              />
            </li>
          );
        })}
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
