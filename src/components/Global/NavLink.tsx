"use client";

import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
// Enhanced NavLink that uses ScrollLink for same-page navigation and regular Link for cross-page navigation
// Usage: <NavLink text="About" to="about-section" href="/#about-section" isHomePage={isHomePage} />
type EnhancedNavLinkProps = {
  text?: string;
  to?: string;
  href: string;
  isHomePage?: boolean;
};

export default function EnhancedNavLink({
  text,
  to,
  href,
  isHomePage,
}: EnhancedNavLinkProps) {
  const handleSetActive = () => {
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  };
  // If we're on the home page, use ScrollLink for smooth scrolling
  if (isHomePage && to) {
    return (
      <ScrollLink
        to={to}
        spy={true}
        smooth={true}
        duration={200}
        onSetActive={handleSetActive}
        className="inline-block text-[#333333] cursor-pointer transition-all duration-200 text-[15px]  transform hover:scale-[1.1]"
      >
        {text}
      </ScrollLink>
    );
  }
  // If we're on a different page, use regular Link to navigate to home page with hash
  return (
    <Link
      href={href}
      className="inline-block cursor-pointer transition-all duration-200 text-[15px] text-[#333333] transform hover:scale-[1.1]"
    >
      {text}
    </Link>
  );
}
