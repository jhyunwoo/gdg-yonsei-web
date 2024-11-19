import getSession from "@/lib/server/get-session";
import Image from "next/image";
import formatDateYYMMDD from "@/lib/format-date-yymmdd";

export default async function Session({ id }: { id: string }) {
  const session = await getSession(id);
  return (
    <div className={"w-full p-4 flex flex-col items-start"}>
      <div className={"flex flex-col items-end"}>
        <div className={"text-2xl font-bold"}>{session.title}</div>
        <div>{formatDateYYMMDD(session.date)}</div>
      </div>
      <Image
        src={`https://image.gdgyonsei.moveto.kr/sessions/${session.id}/${session.defaultImage}`}
        alt={"default image"}
        width={300}
        height={300}
        className={"w-full"}
      />
      <div>
        {session.description?.map((data, index) => (
          <div key={index}>{data}</div>
        ))}
      </div>
    </div>
  );
}
