import { fetchMembers } from "@/sanity/lib/fetchMembers";
import { MemberItem } from "../Global/MemberItem";

export const TeamSection = async () => {
  const members = await fetchMembers();
  return (
    <div className="md:p-20 py-20 px-[15px] flex flex-col md:flex-row gap-[60px] md:gap-0">
      <div className="flex md:items-start gap-[10px] md:w-1/4 flex-col items-center">
        <h2 className="md:text-7xl text-5xl font-semibold text-[#001849] font-barlow leading-none tracking-tight writing-switch">
          TEAM
        </h2>
        <p className="text-[#001849] text-lg tracking-widest writing-switch">
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
