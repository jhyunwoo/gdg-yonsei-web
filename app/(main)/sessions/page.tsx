import getSessions from "@/lib/server/get-sessions";
import Image from "next/image";
import Link from "next/link";
import MainLayout from "@/app/components/main-layout";

function formatDate(date: Date) {
  const year = date.getFullYear().toString().slice(2); // 마지막 두 자리를 가져옵니다.
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // 월을 2자리로 만듭니다.
  const day = date.getDate().toString().padStart(2, "0"); // 일을 2자리로 만듭니다.
  return `${year}.${month}.${day}`;
}

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
              {formatDate(session.date)}
            </div>
          </Link>
        ))}
      </div>
    </MainLayout>
  );
}
