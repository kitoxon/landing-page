"use client";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState, useRef } from "react";
import { ChevronRight, ChevronLeft, Play, Pause } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { NewsCard } from "./NewsCard";
import { SecondaryButton } from "../Global/SecondaryButton";

type Article = {
  title: string;
  summary: string;
  mainImage: string;
  company?: string;
  industry?: string;
};

type Props = {
  slides: Article[];
  header: string;
  headerjp: string;
  buttonHref: string;
  buttonLabel: string;
  autoplay?: boolean;
  autoplayDelay?: number;
};

export const EmblaCarousel = ({
  slides,
  autoplay = true,
  autoplayDelay = 5000,
  header,
  headerjp,
  buttonHref,
  buttonLabel,
}: Props) => {
  const [autoplayIsPlaying, setAutoplayIsPlaying] = useState(autoplay);
  const autoplayOptions = {
    delay: autoplayDelay,
    autoStart: false,
  };
  const preparedSlides =
    slides.length === 1 ? Array(3).fill(slides[0]) : slides;

  const autoplayRef = useRef(Autoplay(autoplayOptions));

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
      dragFree: false,
    },
    autoplay ? [autoplayRef.current] : [],
  );

  const toggleAutoplay = useCallback(() => {
    if (autoplayIsPlaying) {
      autoplayRef.current.stop();
    } else {
      autoplayRef.current.play();
    }
    setAutoplayIsPlaying(!autoplayIsPlaying);
  }, [autoplayIsPlaying]);

  useEffect(() => {
    if (!emblaApi) return;

    if (!autoplay) {
      autoplayRef.current.stop();
      setAutoplayIsPlaying(false);
    }

    return () => {
      if (autoplayRef.current) {
        autoplayRef.current.stop();
      }
    };
  }, [emblaApi, autoplay]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );

  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  return (
    <div className="relative mx-auto py-20">
      <div className="mb-[60px] text-center">
        <h2 className="md:text-7xl text-5xl font-semibold leading-none text-[#001849] font-barlow uppercase mb-[10px]">
          {header}
        </h2>
        <p className="text-lg leading-[1.4]">{headerjp}</p>
      </div>
      {/* Main carousel container */}
      <div
        className="overflow-hidden pb-10"
        style={{
          transitionTimingFunction: "cubic-bezier(0, 0, 0.99, 0.98)",
        }}
        role="region"
        ref={emblaRef}
      >
        <div className="flex">
          {preparedSlides.map((article, idx) => (
            <div
              className="relative flex-grow-0 flex-shrink-0 md:basis-[55%] basis-[90%] mx-5 h-auto"
              key={idx}
            >
              {/* Content card with shadow */}
              <NewsCard article={article} href={buttonHref} />
            </div>
          ))}
        </div>
      </div>
      {/* Controls */}
      <div className="flex justify-center items-center gap-10 mb-10">
        <button
          className="cursor-pointer text-[#001849] hover:text-[#001849]/80 transition-colors"
          onClick={scrollPrev}
          aria-label="Previous slide"
        >
          <ChevronLeft />
        </button>
        <button
          className="cursor-pointer text-[#001849] hover:text-[#001849]/80 transition-colors"
          onClick={toggleAutoplay}
          aria-label={autoplayIsPlaying ? "Pause autoplay" : "Start autoplay"}
        >
          {autoplayIsPlaying ? (
            <Pause size={18} fill="#001849" strokeWidth={1} />
          ) : (
            <Play size={18} fill="#001849" />
          )}
        </button>
        <button
          className="cursor-pointer text-[#001849] hover:text-[#001849]/80 transition-colors"
          onClick={scrollNext}
          aria-label="Next slide"
        >
          <ChevronRight />
        </button>
      </div>
      <div className="flex justify-center">
        <SecondaryButton href={buttonHref} text={buttonLabel} />
      </div>
    </div>
  );
};
