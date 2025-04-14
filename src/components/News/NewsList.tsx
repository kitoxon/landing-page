"use client";
import PageItem from "./PageItem";
import { useState } from "react";
import PageItemSkeleton from "./PageItemSkeleton";

export default function NewsAll({
  initialNews,
  type,
}: {
  initialNews: any[];
  type: string;
}) {
  const batchSize = 6;
  const [visibleCount, setVisibleCount] = useState(batchSize);
  const [loading, setLoading] = useState(false);
  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCount((prevCount) => prevCount + batchSize);
      setLoading(false);
    }, 1000);
  };

  const visibleNews = initialNews.slice(0, visibleCount);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-6 items-stretch">
        {visibleNews.map((article) => (
          <PageItem key={article.slug.current} type={type} article={article} />
        ))}

        {loading &&
          Array.from({ length: batchSize }).map((_, idx) => (
            <PageItemSkeleton key={`skeleton-${idx}`} />
          ))}
      </div>

      {!loading && visibleCount < initialNews.length && (
        <div className="flex justify-center ">
          <button
            onClick={handleLoadMore}
            className="cursor-pointer border border-[#001849] px-10 py-3 text-sm rounded-3xl text-[#001849] font-bold hover:bg-[#001849] hover:text-white transition-all"
          >
            もっと見る
          </button>
        </div>
      )}
    </>
  );
}
