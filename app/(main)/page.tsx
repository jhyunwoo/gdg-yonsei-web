import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

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
      className={"w-full h-screen flex flex-col items-center justify-center"}
    >
      {children}
    </div>
  );
}

export default function HomePage() {
  return (
    <div
      className={
        "w-full flex-col min-h-screen flex items-center justify-center"
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
    </div>
  );
}
