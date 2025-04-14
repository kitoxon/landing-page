// components/Sections/FeatureSection.tsx
import { FeatureItem } from "../Global/FeatureItem";
import { Feature1 } from "../Icons/Feature1";
import { Feature2 } from "../Icons/Feature2";
import { Feature3 } from "../Icons/Feature3";
import { Feature4 } from "../Icons/Feature4";
export const FeatureSection = () => {
  return (
    <div className="md:p-20 py-20 px-[15px] relative overflow-hidden">
      <div className="flex flex-col md:flex-row gap-[60px] md:gap-0">
        <div className="flex md:items-start items-center gap-[10px] md:w-1/4 flex-col md:flex-row">
          <h2 className="md:text-7xl text-5xl font-semibold text-[#001849] leading-none font-barlow tracking-tight writing-switch">
            FEATURE
          </h2>
          <p className="text-[#001849] text-lg tracking-widest writing-switch">
            私たちの特長
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <FeatureItem
            icon={<Feature1 />}
            title="専門家が監修した信頼性のあるロジック"
            description="スポーツ科学・スポーツマネジメント専門の九州産業大学 萩原准教授監修。"
          />
          <FeatureItem
            icon={<Feature2 />}
            title="即時性のある広告価値データを提供"
            description="露出があった最短数日後にはデータが反映。即時性のあるデータを提供。"
          />
          <FeatureItem
            icon={<Feature3 />}
            title="生成AIを活用した価値換算技術"
            description="OpenAI社が提供するGPT-4o APIをベースにして、画像認識AIモデルを開発。"
          />
          <FeatureItem
            icon={<Feature4 />}
            title="柔軟なプラン・料金体系"
            description="スポーツチーム様・スポンサー企業様の課題に沿ってカスタマイズしたご提案。"
          />
        </div>
      </div>
    </div>
  );
};
