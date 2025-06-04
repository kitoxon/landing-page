"use client";
import Image from "next/image";

const logos = [
  "/media_coverage/logo1.webp",
  "/media_coverage/logo2.webp",
  "/media_coverage/logo3.webp",
  "/media_coverage/logo4.webp",
  "/media_coverage/logo5.webp",
];

export const LogoSlider = () => {
  // Create multiple sets for seamless loop
  const duplicatedLogos = Array(3).fill(logos).flat();

  return (
    <div className="py-6 overflow-hidden w-7xl m-auto max-w-full">
      <div className="flex animate-scroll">
        {duplicatedLogos.map((logo, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 mx-10"
            style={{ minWidth: "140px" }}
          >
            <div className="md:w-[140px] md:h-[70px] w-[120px] h-[60px] flex items-center justify-center cursor-pointer">
              <Image
                src={logo}
                alt={`Logo ${(idx % logos.length) + 1}`}
                width={140}
                height={70}
                className="object-contain max-w-full max-h-full"
              />
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${(140 + 80) * logos.length}px);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
          width: fit-content;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};
