import { PortableText } from "next-sanity";

export const NewsDetail = async ({ article }: { article: any }) => {
  return (
    <div className="flex flex-col md:flex-row gap-20 w-full h-auto">
      <img
        className="md:w-1/2 h-full rounded-[10px]"
        src={article.mainImage}
        alt={article.title}
      />
      <div className="flex flex-col md:w-1/2">
        <h1 className="text-2xl text-[#001849ff] leading-[1.4] font-semibold">
          {article.title}
        </h1>
        <p className="my-5 text-custom text-[#000000ff] leading-8">
          {article.summary}
        </p>
        <p className="text-custom text-[#000000ff] leading-[1.4] p-[10px]">
          {article.company} | {article.industry}{" "}
        </p>
        <div className="mt-10 border-t border-[#001849ff]">
          <PortableText
            value={article.body}
            components={{
              block: {
                h2: ({ children }) => (
                  <h2 className="text-[#001849ff] text-lg mt-10 mb-5 leading-[1.8]">
                    {children}
                  </h2>
                ),
                normal: ({ children }) => (
                  <p className="py-[10px] text-custom text-[#000000ff] leading-8">
                    {children}
                  </p>
                ),
              },
              marks: {
                link: ({ value, children }: any) => {
                  const href = value?.href;
                  return (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#007cff] underline hover:text-blue-800 transition"
                    >
                      {children}
                    </a>
                  );
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};
