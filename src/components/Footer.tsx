import Link from "next/link";
import Image from "next/image";
import { FooterIcons } from "./Icons/FooterIcons";
import { links } from "@/app/utils";
import { usePathname, useRouter } from "next/navigation";
import { HamburgLink } from "./Global/HamburgLink";
import { Link as ScrollLink } from "react-scroll";
export default function Footer() {
  const isHomePage = usePathname() === "/";
  const footerlinks = links;
  const router = useRouter();
  const navigateTop = () => {
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.replaceState(null, "", "/");
    } else {
      router.push("/");
    }
  };
  return (
    <footer className="bg-[#001849] md:px-20 px-[15px] pt-20 pb-10 text-white">
      <div className="flex md:flex-row flex-col md:gap-20 gap-10">
        {/* Left-side content */}
        <div className="md:w-1/2">
          <div onClick={navigateTop} className="cursor-pointer w-fit">
            <Image
              src="/assets/white-logo.webp"
              alt="Brand Insight Logo"
              width={216}
              height={40}
            />
          </div>
          <div className="mt-6 text-custom leading-relaxed">
            <p className="mb-[10px]">株式会社NextStairs</p>
            <p>〒810-0041 福岡県福岡市中央区大名二丁目6-11</p>
            <p>info@nextstairs.co.jp</p>
            <p>050-1724-3502</p>
          </div>
        </div>

        {/* Right-side links */}
        <div className="md:w-1/2">
          <ul className="flex flex-col divide-y divide-gray-200 cursor-pointer mb-8">
            {footerlinks.map((link) => (
              <li key={link.href} className="group">
                <HamburgLink
                  text={link.menuTitle}
                  isHomePage={isHomePage}
                  to={link.to}
                  href={link.href}
                />
              </li>
            ))}
          </ul>
          <Link
            className="text-right"
            target="_blank"
            href="https://nextstairs.co.jp/privacypolicy"
          >
            <p>プライバシーポリシー</p>
          </Link>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-10 text-sm flex justify-between">
        <FooterIcons />
        <p>© {new Date().getFullYear()} NextStairs Inc.</p>
      </div>
    </footer>
  );
}
