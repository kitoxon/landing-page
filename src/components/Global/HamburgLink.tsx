import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
type props = {
  text?: string;
  href: string;
  to?: string;
  isHomePage?: boolean;
  onClick?: () => void;
};

export const HamburgLink = ({ href, text, onClick, to, isHomePage }: props) => {
  if (isHomePage && to) {
    return (
      <ScrollLink
        onClick={onClick}
        to={to}
        spy={true}
        smooth={true}
        duration={500}
        className="flex h-[50px] items-center justify-between text-[15px] cursor-pointer"
      >
        {text}
        <div className="transform transition-all duration-200 group-hover:translate-x-1">
          <ChevronRight size={20} />
        </div>
      </ScrollLink>
    );
  }

  return (
    <Link
      className="flex h-[50px] items-center justify-between text-[15px] cursor-pointer"
      href={href}
      onClick={onClick}
    >
      {text}
      <div className="transform transition-all duration-200 group-hover:translate-x-1">
        <ChevronRight size={20} />
      </div>
    </Link>
  );
};
