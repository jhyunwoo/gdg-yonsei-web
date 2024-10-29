import Link from "next/link";

export default function SideBar() {
  return (
    <div className={"h-screen bg-sky-600 w-40 p-4"}>
      <div>GYMS</div>d<Link href={"/admin/members"}>Members</Link>
    </div>
  );
}
