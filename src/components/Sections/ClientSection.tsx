import { EmblaCarousel } from "../News/EmblaCarousel";
import { fetchClientVoice } from "@/sanity/lib/fetchClientVoice";
export const ClientSection = async () => {
  const voices = await fetchClientVoice(4);
  return (
    <div>
      <EmblaCarousel
        slides={voices}
        header="CLIENT`S VOICE"
        headerjp="お客様の声"
        buttonHref="/voices"
        buttonLabel="すべてのお客様の声を見る"
      />
    </div>
  );
};
