import MemberCard from "@/app/components/member-page/memberCard";
import Chip from "@/app/components/project-page/chip";
import {
  getCoreMembers,
  getLeadMembers,
  getActiveMembers,
} from "@/lib/server/get-members";

export default async function MembersPage() {
  const leadMembers = await getLeadMembers();
  const coreMembers = await getCoreMembers();
  const activeMembers = await getActiveMembers();

  return (
    <section className={"min-h-[400px] mt-[90px]"}>
      {/* Page header */}
      <div
        className={
          "w-full lg:w-[70%] max-w-[1300px] ml-2 lg:mx-auto my-2 flex-col"
        }
      >
        <h1 className={"text-4xl font-bold"}>Members</h1>
      </div>
      <hr></hr>
      <div className={"w-full lg:w-[70%] max-w-[1300px] mx-auto"}>
        <div className={"flex gap-2 m-4"}>
          <div>Stage</div>
          <Chip text={"22-23"}></Chip>
          <Chip text={"23-24"}></Chip>
          <Chip text={"24-25"}></Chip>
        </div>
        {/* Member listing*/}
        <p className="mt-2 text-lg">Come back soon!</p>

        <div className="my-2">
          <div className="flex flex-col gap-2 mx-2">
            {leadMembers.map((member, index) => (
              <MemberCard
                memberId={member.id}
                memberName={member.name}
                generation={member.generation}
                part={member.part}
                role={member.part}
              ></MemberCard>
            ))}
            {coreMembers.map((member, index) => (
              <MemberCard
                memberId={member.id}
                memberName={member.name}
                generation={member.generation}
                part={member.part}
                role={member.part}
              ></MemberCard>
            ))}
            {activeMembers.map((member, index) => (
              <MemberCard
                memberId={member.id}
                memberName={member.name}
                generation={member.generation}
                part={member.part}
                role={member.part}
              ></MemberCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
