import { fetchNews } from "@/sanity/lib/fetchNews"; // your fetch logic
import { EmblaCarousel } from "../News/EmblaCarousel";
export const NewsSection = async () => {
  const news = await fetchNews(4);

  return (
    <div>
      <EmblaCarousel
        slides={news}
        header="NEWS"
        headerjp="お知らせ"
        buttonHref="/news"
        buttonLabel="すべてのお知らせを見る"
      />
    </div>
  );
};
