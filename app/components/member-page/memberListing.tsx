import MemberCard from "@/app/components/member-page/memberCard";
import ChipList from "@/app/components/list/chipList";
import {
  getCoreMembers,
  getLeadMembers,
  getActiveMembers,
} from "@/lib/server/get-members";

/**
 * 프로젝트 리스트 섹션 컴포넌트
 * @constructor
 */
export default async function MemberListing() {
  const leadMembers = await getLeadMembers();
  const coreMembers = await getCoreMembers();
  const activeMembers = await getActiveMembers();

  return (
    <section className={"wrapper"}>
      <ChipList />
      {leadMembers.map((member, index) => (
        <MemberCard
          key={index}
          memberId={member.id}
          memberName={member.name}
          generation={member.generation}
          part={member.part}
          role={member.part}
        ></MemberCard>
      ))}
      {coreMembers.map((member, index) => (
        <MemberCard
          key={index}
          memberId={member.id}
          memberName={member.name}
          generation={member.generation}
          part={member.part}
          role={member.part}
        ></MemberCard>
      ))}
      {activeMembers.map((member, index) => (
        <MemberCard
          key={index}
          memberId={member.id}
          memberName={member.name}
          generation={member.generation}
          part={member.part}
          role={member.part}
        ></MemberCard>
      ))}
    </section>
  );
}
