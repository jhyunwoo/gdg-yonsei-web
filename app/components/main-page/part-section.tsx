import ArrowWrightBlue from "@/public/icon/arrow-wright-blue.svg";
import DollChainTree from "@/public/doll-chain-tree.svg";
import Link from "next/link";

/**
 * 파트 정보를 보여주는 섹션
 * @constructor
 */
export default function PartSection() {
  return (
    <div
      className={
        "flex items-center justify-center w-full mb-96 overflow-x-hidden gap-11"
      }
    >
      <div className={"w-full max-w-screen-sm gap-[50px] flex flex-col pl-40"}>
        <div>
          <Link href={"/members"} className={"flex items-end gap-12"}>
            <div className={"text-6xl font-bold"}>Part</div>
            <div className={"flex text-blue items-center"}>
              <div>See all</div>
              <ArrowWrightBlue />
            </div>
          </Link>
          <div>GDG Yonsei University is divided into six parts:</div>
          <div>
            Front-End, Back-End, Mobile, ML/AI, Design, and DevRel (Developer
            Relations).
          </div>
        </div>

        <div>
          <div className={"text-4xl font-bold mb-2.5"}>Organizer</div>
          <div>
            The Lead oversees all operations of GDG Yonsei. They are responsible
            for recruitment, event management, and overall planning.
          </div>
        </div>
        <div>
          <div className={"text-4xl font-bold mb-2.5"}>FrontEnd</div>
          <div>
            Aims to design user-friendly pages by leveraging various web
            technologies and developing web applications that align with the
            latest tech trends. The focus is on building efficient web
            structures to optimize the user experience while adhering to
            sustainable development practices.
          </div>
        </div>
        <div>
          <div className={"text-4xl font-bold mb-2.5"}>BackEnd</div>
          <div>
            Responsible for server and infrastructure development. Members give
            presentations and engage in open discussions on topics of interest,
            ranging from server domain design (such as DDD, MSA, JPA) to
            infrastructure during team sessions.
          </div>
        </div>
        <div>
          <div className={"text-4xl font-bold mb-2.5"}>Mobile</div>
          <div>
            Develop scalable mobile applications to ensure the product can be
            used in various environments. The mobile team discusses and explores
            sustainable application development.
          </div>
        </div>
        <div>
          <div className={"text-4xl font-bold mb-2.5"}>ML/AI</div>
          <div>
            Focus on understanding and applying machine learning and artificial
            intelligence models. In weekly team sessions, members explore and
            present AI topics of interest, followed by open discussions.
          </div>
        </div>
        <div>
          <div className={"text-4xl font-bold mb-2.5"}>Design</div>
          <div>
            Responsible for all design aspects in GDG&#39;s events and projects.
            Members meet weekly to work on projects. We work on projects
            following a Google design/brand guide, with a focus on user
            experience, supported by user interviews. When no project is active,
            they learn together and discuss about design methodologies.
          </div>
        </div>
        <div>
          <div className={"text-4xl font-bold mb-2.5"}>
            DevRel (Developer Relations)
          </div>
          <div>
            Responsible for planning and managing overall community activities,
            including publishing weekly insights that summarize industry
            analysis and internal events. DevRel connects the internal and
            external community, supports the organization of inter-school joint
            events and exchange sessions, expert consultations, and plans
            industry-academia collaboration projects, while working to build a
            sustainable community culture.
          </div>
        </div>
      </div>
      <DollChainTree />
    </div>
  );
}
