export const links = [
  {
    menuTitle: "ホーム",
    href: "/",
    to: "hero",
    nav: false,
  },
  {
    menuTitle: "Brand Insightについて",
    title: "Brand Insightについて",
    href: "/#about",
    to: "about",
    nav: true,
  },
  {
    title: "サービス",
    href: "/#services",
    to: "services",
    menuTitle: "ご提供サービス",
    nav: true,
  },
  {
    title: "特徴",
    href: "/#features",
    to: "features",
    menuTitle: "私たちの特長",
    nav: true,
  },
  {
    title: "お知らせ",
    href: "/#news",
    to: "news",
    menuTitle: "お知らせ",
    nav: true,
  },
  {
    title: "ご利用の流れ",
    href: "/#process",
    to: "process",
    menuTitle: "ご利用の流れ",
    nav: true,
  },
  {
    title: "チーム",
    menuTitle: "チーム",
    href: "/#team",
    to: "team",
    nav: false,
  },

  {
    title: "会社概要",
    menuTitle: "会社概要",
    href: "/#company",
    to: "company",
    nav: false,
  },
  {
    title: "よくあるご質問",
    menuTitle: "よくあるご質問",
    href: "/#faq",
    to: "faq",
    nav: false,
  },
];

export const divVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.4, 0.4, 0, 1],
    },
  },
};

import { useState, useEffect } from "react";
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, [query]);

  return matches;
}
