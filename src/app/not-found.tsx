import { ChevronRight } from "lucide-react";
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center gap-5 p-[100px]">
      <div className="flex flex-col gap-10">
        <h1 className="text-5xl font-bold text-[#242528]">404</h1>
        <p className="text-5xl font-bold text-[#242528]">
          お探しのページは 見つかりませんでした。
        </p>
      </div>

      <span className="text-[rgba(36,_37,_40,_0.7)]">
        URLをご確認頂くか、ホームからページをお探しください。
      </span>

      <a
        href="/"
        className="w-fit pl-[15px] pr-[10px] text-[#242528] font-bold rounded-[128px] border border-[rgba(36,37,40,0.1)] hover:border-[rgba(36,37,40,0.7)] transition-all flex items-center gap-[5px] h-10 group"
      >
        <span className=" text-custom ">ホームに戻る</span>
        <ChevronRight
          size={22}
          className="transform transition-all duration-200 group-hover:translate-x-1"
        />
      </a>
    </div>
  );
}
