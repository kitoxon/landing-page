import { fetchMembers } from "@/sanity/lib/fetchMembers";
import { MemberItem } from "../Global/MemberItem";

export const TeamSection = async () => {
  const members = await fetchMembers();
  return (
    <div className="p-20 flex">
      <div className="flex items-start gap-[10px] w-1/4">
        <h2
          className="text-7xl font-semibold text-[#001849] font-barlow leading-none tracking-tight"
          style={{ writingMode: "vertical-lr" }}
        >
          TEAM
        </h2>
        <p
          className="text-[#001849] text-lg tracking-widest"
          style={{ writingMode: "vertical-lr" }}
        >
          チーム
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
        {members.map((member: any, index: number) => (
          <MemberItem key={index} member={member} />
        ))}
      </div>
    </div>
  );
};
