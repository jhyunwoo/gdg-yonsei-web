import getSession from "@/lib/server/get-session";
import Image from "next/image";

export default async function Session({ id }: { id: string }) {
  const session = await getSession(id);
  return (
    <div className={"w-full p-4"}>
      <div>
        <div className={"text-lg font-bold"}>{session.title}</div>
        <div></div>
      </div>
      <Image
        src={`https://image.gdgyonsei.moveto.kr/sessions/${session.id}/${session.defaultImage}`}
        alt={"default image"}
        width={300}
        height={300}
        className={"w-full"}
      />
    </div>
  );
}
