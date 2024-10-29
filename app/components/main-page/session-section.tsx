import ArrowWrightBlue from "@/public/icon/arrow-wright-blue.svg";
import Link from "next/link";
import Image from "next/image";

/**
 * 세션 정보를 보여주는 섹션
 * @constructor
 */
export default function SessionSection() {
  return (
    <div className={"flex gap-44"}>
      <div>
        <Link
          href={"/sessions"}
          className={"flex items-end gap-[10px] mb-[50px]"}
        >
          <div className={"text-6xl font-bold"}>Sessions</div>
          <div className={"flex items-center text-blue"}>
            <div className={"text-sm"}>See all</div>
            <ArrowWrightBlue />
          </div>
        </Link>
        <div className={"flex flex-col gap-12"}>
          <div>
            <div className={"text-4xl font-bold mb-3"}>T19</div>
            <div className={"w-full max-w-xl"}>
              T19, short for &#34;Tech at 19:00,&#34; is an internal
              tech-sharing conference held every Tuesday at 7 PM, with
              participation from all GDG Yonsei members. Each week, 3 presenters
              share their technical knowledge or experiences.
            </div>
          </div>
          <div>
            <div className={"text-4xl font-bold mb-3"}>GDG fopen()</div>
            <div className={"w-full max-w-xl"}>
              fopen() is a public tech seminar hosted by GDG Yonsei for student
              developers. It features in-depth tech topics from T19 sessions or
              presentations by industry professionals currently working in the
              field. These seminars are open to students outside the community
              to encourage deeper technical discussions. By engaging with
              student developers beyond GDG on Campus, GDG Yonsei actively
              expands its community and fosters a leading developer culture at
              Yonsei University.
            </div>
          </div>
          <div>
            <div className={"text-4xl font-bold mb-3"}>Part Study Jam</div>
            <div className={"w-full max-w-xl"}>
              GDG Yonsei is divided into six specialized departments—Front-End,
              Back-End, Mobile, ML/AI, Design, and Developer Relations—each
              consisting of a small, select group. These departments conduct
              studies and workshops to develop advanced technical skills.
            </div>
          </div>
        </div>
      </div>
      <Image src={"/book.svg"} alt={"Book Icon"} width={346} height={242} />
    </div>
  );
}
