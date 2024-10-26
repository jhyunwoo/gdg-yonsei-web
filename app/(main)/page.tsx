import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import ArrowWrightBlue from "@/public/icon/arrow-wright-blue.svg";
import ActivitiesIcon from "@/public/activities.svg";
import DollChainTree from "@/public/doll-chain-tree.svg";

/**
 * 텍스트에 구글 지정 색상을 입히는 컴포넌트
 *
 * 텍스트 밑 밑줄이 같은 색으로 추가됨
 * @param children - 텍스트
 * @param color - 색상 (blue, red, yellow, green)
 * @constructor
 */
function ColoredText({
  children,
  color,
}: {
  children: ReactNode;
  color: "blue" | "red" | "yellow" | "green";
}) {
  // Tailwind CSS 최적화를 위해 변수를 className 에 직접 넣지 않고 switch 문을 사용하여 각각의 컴포넌트를 따로 생성함
  // 텍스트에 색상을 추가하는 것은 span 태그를 사용함
  switch (color) {
    case "blue":
      return (
        <span className={"text-blue accent-blue underline"}>{children}</span>
      );
    case "yellow":
      return (
        <span className={"text-yellow accent-yellow underline"}>
          {children}
        </span>
      );
    case "green":
      return (
        <span className={"text-green accent-green underline"}>{children}</span>
      );
    case "red":
      return (
        <span className={"text-red accent-red underline"}>{children}</span>
      );
  }
}

/**
 * GDG 지원 페이지로 이동할 수 있는 링크
 * @constructor
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function RecruitingLink() {
  return (
    <Link href={"/admission"} className={"text-3xl mb-[10px]"}>
      <ColoredText color={"blue"}>We </ColoredText>
      <ColoredText color={"yellow"}>are</ColoredText>
      <ColoredText color={"red"}>Recruiting</ColoredText>
      <ColoredText color={"yellow"}>! </ColoredText>
      <ColoredText color={"blue"}>Click </ColoredText>
      <ColoredText color={"green"}>to </ColoredText>
      <ColoredText color={"red"}>apply</ColoredText>
      <ColoredText color={"blue"}>.</ColoredText>
    </Link>
  );
}

/**
 * 구글의 검색 바를 모방한 GDG 소개 검색 바 모양 컴포넌트
 * 검색 기능은 지원하지 않음
 * @constructor
 */
function SearchBar() {
  return (
    <div
      className={
        "flex justify-start mt-[10px] items-center p-1 rounded-full border-2 border-grey-light w-full max-w-3xl"
      }
    >
      <Image
        src={"/icon/search.svg"}
        alt={"Search icon"}
        width={48}
        height={48}
        className={"mx-4"}
      />
      <div className={"text-3xl py-1"}>Curious about who we are?</div>
    </div>
  );
}

/**
 * 화면을 스크롤하여 더 자세한 정보가 있음을 알리는 컴포넌트
 * @constructor
 */
function ScrollDown() {
  return (
    <div className={"flex flex-col items-center pt-[50px]"}>
      <div className={"text-3xl"}>Scroll Down</div>
      <Image
        src={"/icon/Arrow_down.svg"}
        alt={"Arrow Down icon"}
        width={48}
        height={48}
      />
    </div>
  );
}

/**
 * GDG 소개 섹션
 * @constructor
 */
function AboutSection() {
  return (
    <div className={"flex items-center gap-24"}>
      <Image src={"/logo/gdg.svg"} alt={"GDG Logo"} width={377} height={197} />
      <div className={"flex flex-col *:w-full *:max-w-2xl"}>
        <div className={"text-6xl font-bold mb-[50px]"}>About GDG</div>
        <div className={"mb-[10px]"}>
          <span className={"font-bold"}>GDG (Google Developer Groups)</span> on
          Campus is a community group of university student developers
          interested in Google technologies, part of a program provided by
          Google for Developers. Students in GDG engage in the process of
          &#34;Connect - Learn - Grow,&#34; where they develop various skills
          such as development and leadership in a peer-to-peer learning
          environment, with the goal of building solutions for their communities
          and society.
        </div>
        <div>
          <span className={"font-bold"}>GDG Yonsei University</span> is a
          student developer community based at Yonsei University that shares the
          development ecosystem. It is a group of developers who not only share
          development knowledge but also aim to achieve social innovation
          through technology. GDG Yonsei University seeks to build solutions
          that address real community issues using development knowledge, with
          the goal of growing into professionals who contribute to a sustainable
          society through IT-driven social innovation.
        </div>
      </div>
    </div>
  );
}

/**
 * 전체 화면을 사용하는 섹션의 레이아웃
 *
 * 화면 전체 가로 크기, 화면 전체 세로 크기를 사용함
 *
 * flex flex-col items-center justify-center 를 사용하여 children 컴포넌트 배치함
 * @param children
 * @constructor
 */
function SectionLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className={
        "w-full min-h-screen flex flex-col items-center justify-center pt-10 p-4"
      }
    >
      {children}
    </div>
  );
}

function SessionSection() {
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

function ActivitiesSection() {
  return (
    <div className={"flex gap-28 items-center"}>
      <ActivitiesIcon />
      <div className={"flex flex-col gap-12"}>
        <div className={"text-6xl font-bold"}>Activities</div>
        <div className={"flex flex-col gap-2.5 w-full max-w-2xl"}>
          <div className={"text-4xl font-bold"}>Solution Challenge</div>
          <div>
            We participated in the 2023 Solution Challenge, an annual
            international student development competition organized by Google
            for Developers. We designed and built a product aimed at
            contributing to the achievement of the{" "}
            <span className={"font-bold"}>
              UN&#39;s Sustainable Development Goals (SDGs).
            </span>
          </div>
          <div>
            GDG Yonsei achieved the highest award rate among university chapters
            in South Korea. <br />- 2,100 teams participated from university
            GDGs worldwide
            <br /> - Six teams from GDG Yonsei participated
            <br />
            <span className={"font-bold"}>
              - Three teams making it to the Top 100
            </span>
            <br />
            <span className={"font-bold"}>
              - One team being selected as a Top 10 Finalist
            </span>
            <br /> This achievement highlights the group&#39;s strong technical
            capabilities and social impact.
          </div>
        </div>
        <div className={"flex flex-col gap-2.5 w-full max-w-2xl"}>
          <div className={"text-4xl font-bold"}>
            GDG x Elice Programming Contest
          </div>
          <div>
            We organized a programming competition on the coding education
            platform Elice in collaboration with six other GDGs. Our team was
            responsible for creating and reviewing the problems following the
            coding test format, as well as planning and managing the event.
          </div>
        </div>
        <div className={"flex flex-col gap-2.5 w-full max-w-2xl"}>
          <div className={"text-4xl font-bold"}>
            Google I/O Extended Seoul 2023
          </div>
          <div>
            A joint conference was hosted by GDG Seoul, GDG Cloud Korea, and
            four GDG on Campus chapters. The conference featured three tracks
            and 15 sessions, covering not only key highlights from Google I/O
            2023 but also the latest trends and practical experiences with
            Google technologies like Google Cloud, TensorFlow, Android, Flutter,
            and Go.
          </div>
        </div>
        <div className={"flex flex-col gap-2.5 w-full max-w-2xl"}>
          <div className={"text-4xl font-bold"}>GDG Cloud Devfest</div>
          <div>
            A joint conference organized by three communities: GDG Cloud Korea,
            GDSC Yonsei University, and GDSC Ewha. The event featured industry
            professionals as speakers and focused on development topics related
            to Google Cloud.
          </div>
        </div>
        <div className={"flex flex-col gap-2.5 w-full max-w-2xl"}>
          <div className={"text-4xl font-bold"}>Namu-thon</div>
          <div>
            Hackathon co-hosted by the GDG communities of Yonsei, Hanyang,
            Sungkyunkwan, and Seoul Women’s University, with support from GDG
            Korea. A total of 150 participants from 36 GDG Korea chapters took
            part in the event.
            <br /> Under the slogan{" "}
            <span className={"font-bold"}>
              &#34;From Forest to Trees,&#34;
            </span>{" "}
            the hackathon emphasized the importance of focusing on both the big
            picture (the &#34;forest&#34;) and the finer details (the
            &#34;trees”: ‘Namu’ in Korean) in the developer&#39;s world. It
            provided participants with an opportunity to apply broad concepts
            learned in university to real-world scenarios.
          </div>
        </div>
      </div>
    </div>
  );
}

function PartSection() {
  return (
    <div className={"flex items-center w-full px-40"}>
      <div className={"w-full max-w-screen-sm gap-[50px] flex flex-col"}>
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
      <DollChainTree className={"overflow-hidden absolute -right-80"} />
    </div>
  );
}

export default function HomePage() {
  return (
    <div
      className={
        "w-full flex-col min-h-screen flex items-center justify-center gap-96"
      }
    >
      <SectionLayout>
        {/*<RecruitingLink />*/}
        <Image
          src={"/logo/gdg.svg"}
          alt={"GDG Logo"}
          width={413}
          height={200}
        />
        <SearchBar />
        <ScrollDown />
      </SectionLayout>
      <SectionLayout>
        <AboutSection />
      </SectionLayout>
      <SectionLayout>
        <SessionSection />
      </SectionLayout>
      <SectionLayout>
        <ActivitiesSection />
      </SectionLayout>
      <SectionLayout>
        <PartSection />
      </SectionLayout>
    </div>
  );
}
