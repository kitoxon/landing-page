import Image from "next/image";
import Link from "next/link";

export default function NewsCard({
  article,
  type,
}: {
  article: any;
  type: string;
}) {
  return (
    <Link href={`/${type}/${article.slug.current}`}>
      <div className="rounded-[10px] pb-[30px] shadow-custom h-full cursor-pointer bg-white flex flex-col">
        <Image
          src={article.mainImage}
          alt={article.title}
          width={800}
          height={400}
          className="rounded-[10px] w-full object-cover h-auto"
        />
        <div className="pt-10 px-5 flex flex-col gap-10 justify-between flex-1">
          <div className="flex flex-col gap-5 flex-grows">
            <h2 className="text-lg font-semibold text-[#001849ff] leading-[1.4]">
              {article.title}
            </h2>
            <p className="text-[#000000ff] text-custom leading-[2]">
              {article.summary}
            </p>
          </div>
          <div>
            <p className="text-custom text-[#000000ff] leading-[1.4]">
              {article.company} | {article.industry}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
