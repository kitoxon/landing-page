import { ServiceItem } from "../Global/ServiceItem";

export const ServiceSection = () => {
  const serviceItems = [
    {
      title: "メディア露出価値換算",
      description:
        "日々のメディア露出を可視化し、1試合やシーズン全体を通して広告価値を正確に算出。データに基づいたスポンサーROIの分析を提供します。",
      img_url: "/assets/service-1.webp",
      list: [
        "5大メディアを網羅",
        "即時性のあるデータ提供",
        "科学的根拠に基づくデータ分析",
      ],
    },
    {
      title: "会場内外価値換算",
      description:
        "試合会場やイベント現場でのスポンサー広告効果だけでなく、会場外でのメディア露出やデジタル領域での効果も数値化。",
      img_url: "/assets/service-2.webp",
      list: ["ブランド認知、顧客ロイヤリティ", "スポンサーフィット"],
    },
    {
      title: "社会的価値換算",
      description:
        "スポーツチームの活動が地域社会やファンに与えるポジティブな影響を定量化。CSR（企業の社会的責任）やSDGs達成への貢献を示し、スポンサー企業に新たな価値提案を可能にします。",
      img_url: "/assets/service-3.webp",
      list: ["SROI分析", "ソーシャルインパクト分析"],
    },
  ];
  return (
    <div className="p-20 w-full">
      <div className="text-center">
        <div className="mb-[60px]">
          <h2 className="text-7xl font-semibold leading-none mb-4 text-[#001849] font-barlow">
            SERVICE
          </h2>
          <p className="text-lg leading-[1.4]">ご提供サービス</p>
        </div>
        <div className="flex flex-col gap-10">
          {serviceItems.map((item, index) => (
            <ServiceItem
              key={item.title}
              title={item.title}
              description={item.description}
              img_url={item.img_url}
              list={item.list}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
