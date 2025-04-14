import { fetchNews } from "@/sanity/lib/fetchNews";
import NewsList from "@/components/News/NewsList";
export default async function NewsPage() {
  const news = await fetchNews();

  return (
    <div className="md:pt-40 pb-20 pt-[100px] md:px-20 px-[15px]">
      <div className="mb-[60px]">
        <h2 className="text-[#001849ff] md:text-[64px] text-5xl font-semibold leading-none font-barlow mb-[10px]">
          NEWS
        </h2>
        <p className="text-[#000000ff] text-lg leading-[1.4]">お知らせ</p>
      </div>
      <NewsList initialNews={news} type="news" />
    </div>
  );
}
