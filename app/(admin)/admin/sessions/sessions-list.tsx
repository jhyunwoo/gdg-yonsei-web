"use client";

import useSessions from "@/lib/hooks/useSessions";
import Link from "next/link";
import getKoDate from "@/lib/get-ko-date";

export default function SessionsList() {
  const { sessionsData } = useSessions();
  return (
    <div
      className={
        "w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 py-4"
      }
    >
      {sessionsData?.map((session) => (
        <Link
          href={`/admin/sessions/${session.id}`}
          key={session.id}
          className={
            "bg-white p-4 rounded-xl flex flex-col ring-2 ring-neutral-800"
          }
        >
          <div className={"text-xl font-bold"}>{session.title}</div>
          <div className={"text-sm text-neutral-500"}>
            {getKoDate(session.date)}
          </div>
        </Link>
      ))}
    </div>
  );
}
