import { notFound } from "next/navigation";
import { fetchSingleNews } from "@/sanity/lib/fetchSingleNews";
import { NewsDetail } from "@/components/News/NewsDetail";
type Params = Promise<{ slug: string }>;

export async function generateMetadata(props: { params: Params }) {
  const { slug } = await props.params;
  const article = await fetchSingleNews(slug);

  if (!article) return { title: "記事が見つかりません" };

  return {
    title: `${article.title} | お知らせ | BrandInsight`,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      images: [
        {
          url: article.mainImage ? article.mainImage : "/og-image.jpg",
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function newsDetailPage(props: { params: Params }) {
  const { slug } = await props.params;

  const article = await fetchSingleNews(slug);
  if (!article) return notFound();
  return (
    <div className="md:pt-40 pb-20 pt-[100px] md:px-20 px-[15px]">
      <div className="mb-[60px]">
        <h2 className="text-[#001849ff] md:text-[64px] text-5xl font-semibold leading-none font-barlow mb-[10px]">
          NEWS
        </h2>
        <p className="text-[#000000ff] text-lg leading-[1.4]">お知らせ</p>
      </div>
      <NewsDetail article={article} />
    </div>
  );
}
