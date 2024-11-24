import getSessions from "@/lib/server/get-sessions";
import Image from "next/image";
import Link from "next/link";
import MainLayout from "@/app/components/main-layout";
import formatDateYYMMDD from "@/lib/format-date-yymmdd";

export default async function SessionsPage() {
  const sessions = await getSessions();

  return (
    <MainLayout>
      <div className={"w-full h-40 border-b-2 border-black flex items-end p-4"}>
        <h1 className={"text-5xl font-bold"}>Sessions</h1>
      </div>
      <div className={"w-full grid grid-cols-4 gap-4 p-4 justify-items-center"}>
        {sessions.map((session) => (
          <Link
            href={`/sessions/${session.id}`}
            key={session.id}
            className={
              "flex flex-col items-center justify-center ring-2 gap-1 ring-blue rounded-xl p-4"
            }
            passHref={true}
          >
            <div className={"text-3xl font-semibold"}>{session.title}</div>
            {session.id && session.image ? (
              <div className={"aspect-1 w-56 h-56"}>
                <Image
                  src={`https://image.gdgyonsei.moveto.kr/sessions/${session.id}/${session?.image}`}
                  alt={session.title}
                  width={100}
                  height={100}
                  className={"object-cover w-full h-full rounded-xl"}
                />
              </div>
            ) : (
              <div />
            )}
            <div className={"text-3xl font-semibold"}>
              {formatDateYYMMDD(session.date)}
            </div>
          </Link>
        ))}
      </div>
    </MainLayout>
  );
}
