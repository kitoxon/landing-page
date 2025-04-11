import Link from "next/link";
import Image from "next/image";
interface NewsCardProps {
  article: {
    title: string;
    summary: string;
    mainImage: string;
    company: string;
    industry: string;
    slug: any;
  };
}

export const NewsCard = ({ article }: NewsCardProps) => {
  const { title, summary, mainImage, company, industry, slug } = article;

  return (
    <Link
      href={`/news/${slug.current}`}
      className="flex gap-6 bg-white rounded-lg overflow-hidden"
      style={{
        boxShadow: "10px 10px 15px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      <div className="w-[calc(50%-20px)]">
        <div className="relative h-full">
          <Image
            src={mainImage}
            alt={title}
            width={500}
            height={300}
            className="object-cover w-full h-[320px] rounded-[10px]"
          />
        </div>
      </div>
      <div className="w-[calc(50%-20px)] py-6 pr-6 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold text-[#001849] mb-4 leading-[1.4]">
            {title}
          </h3>
          <p className="text-[15px] line-clamp-4 leading-[2]">{summary}</p>
        </div>
        <div className="flex items-center text-[15px] leading-[1.4]">
          <span>{company}</span>
          <span className="mx-2">|</span>
          <span>{industry}</span>
        </div>
      </div>
    </Link>
  );
};
