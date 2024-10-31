import { users } from "@/db/schema";

type MembersDataType = typeof users.$inferSelect;

export default function MemberList({
  membersData,
}: {
  membersData: MembersDataType[];
}) {
  return (
    <div className={"flex flex-col gap-1 mt-6"}>
      <div className={"grid grid-cols-7 place-items-start content-center"}>
        <div className={"col-span-2"}>Email</div>
        <div>First Name</div>
        <div>Last Name</div>
        <div>Generation</div>
        <div>Role</div>
        <div>Active / Alumni</div>
      </div>
      {membersData?.map((data) => (
        <div
          key={data.id}
          className={
            "p-2 rounded-xl bg-white grid content-center grid-cols-7 place-items-start hover:bg-sky-100 hover:ring-2 ring-sky-500 transition-all"
          }
        >
          <div className={"col-span-2"}>{data.email}</div>
          <div>{data?.firstName}</div>
          <div>{data?.lastName}</div>
          <div>{data.generation}</div>
          <div>{data.role?.toUpperCase()}</div>
          <div>{data.active ? "Active" : "Alumni"}</div>
        </div>
      ))}
    </div>
  );
}
