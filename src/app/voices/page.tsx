import NewsList from "@/components/News/NewsList";
import { fetchClientVoice } from "@/sanity/lib/fetchClientVoice";
export default async function NewsPage() {
  const voices = await fetchClientVoice();

  return (
    <div className="md:pt-40 pb-20 pt-[100px] md:px-20 px-[15px]">
      <div className="mb-[60px]">
        <h2 className="text-[#001849ff] md:text-[64px] text-5xl font-semibold leading-none font-barlow mb-[10px]">
          CLIENT`S VOICE
        </h2>
        <p className="text-[#000000ff] text-lg leading-[1.4]">お客様の声</p>
      </div>
      <NewsList initialNews={voices} type="voices" />
    </div>
  );
}
