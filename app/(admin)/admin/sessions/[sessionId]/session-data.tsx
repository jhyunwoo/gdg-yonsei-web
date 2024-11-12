"use client";

import useSession from "@/lib/hooks/useSession";
import AdminPageTitle from "@/app/components/admin-page-title";
import Image from "next/image";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function SessionData({ sessionId }: { sessionId: string }) {
  const { sessionData } = useSession(sessionId);
  return (
    <div className={"bg-white p-2 rounded-xl gap-4 flex flex-col"}>
      <Link
        href={"/admin/sessions"}
        className={"flex items-center gap-2 hover:underline"}
      >
        <ChevronLeftIcon className={"size-6"} />
        <p>Projects</p>
      </Link>
      <div className={"flex gap-2 items-center"}>
        <AdminPageTitle>{sessionData?.title}</AdminPageTitle>
        <Link
          href={`/admin/sessions/${sessionId}/edit`}
          className={
            "flex items-center gap-2 p-1 px-3 rounded-lg bg-blue text-white text-sm"
          }
        >
          <p>Edit</p>
        </Link>
      </div>

      <div className={"w-full grid-cols-1 grid lg:grid-cols-2 gap-2"}>
        <div>
          <div className={"text-sm text-neutral-700"}>Default Image</div>
          <Image
            src={`https://image.gdgyonsei.moveto.kr/sessions/${sessionId}/${sessionData?.defaultImage}`}
            alt={"Default Image"}
            width={300}
            height={300}
            className={"w-full"}
          />
        </div>
        <div>
          <div className={"text-sm text-neutral-700"}>Images</div>
          <div>
            {sessionData?.images?.map((url) => (
              <Image
                key={url}
                src={`https://image.gdgyonsei.moveto.kr/sessions/${sessionId}/${url}`}
                alt={"Default Image"}
                width={300}
                height={300}
                className={"w-full"}
              />
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className={"text-sm text-neutral-700"}>Description</div>
        <div>
          {sessionData?.description?.map((data, index) => (
            <div key={index}>{data}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
