import Image from "next/image";

/**
 * GDG 소개 섹션
 * @constructor
 */
export default function AboutSection() {
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
