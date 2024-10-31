import { users } from "@/db/schema";
import { Dispatch, SetStateAction } from "react";
import Link from "next/link";

type MembersDataType = typeof users.$inferSelect;

export default function MemberList({
  membersData,
  state,
  setState,
}: {
  membersData: MembersDataType[];
  state: string[];
  setState: Dispatch<SetStateAction<string[]>>;
}) {
  function handleSelect(id: string) {
    if (state.includes(id)) {
      let copied = state;
      copied = copied.filter((item) => item !== id);
      setState(copied);
    } else {
      setState([...state, id]);
    }
  }

  return (
    <div className={"flex flex-col gap-1 mt-6"}>
      <div className={"grid grid-cols-9 place-items-start content-center"}>
        <div></div>
        <div className={"col-span-2"}>Email</div>
        <div>First Name</div>
        <div>Last Name</div>
        <div>Generation</div>
        <div>Role</div>
        <div>Part</div>
        <div>Active / Alumni</div>
      </div>
      {membersData?.map((data) => (
        <div key={data.id} className={"grid grid-cols-9 items-center"}>
          <Link href={`/admin/members/${data.id}`} className={"col-span-1"}>
            Edit
          </Link>
          <button
            type={"button"}
            onClick={() => handleSelect(data.id)}
            className={`col-span-8 w-full p-2 rounded-xl grid content-center grid-cols-8 place-items-start hover:ring-2 ring-sky-500 transition-all ${state.includes(data.id) ? "bg-sky-200" : "bg-white"}`}
          >
            <div className={"col-span-2 break-words"}>{data.email}</div>
            <div>{data?.firstName}</div>
            <div>{data?.lastName}</div>
            <div>{data.generation}</div>
            <div>{data.role?.toUpperCase()}</div>
            <div>{data.part}</div>
            <div>{data.active ? "Active" : "Alumni"}</div>
          </button>
        </div>
      ))}
    </div>
  );
}
