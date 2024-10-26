import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

function ColoredText({
  children,
  color,
}: {
  children: ReactNode;
  color: "blue" | "red" | "yellow" | "green";
}) {
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

export default function HomePage() {
  return (
    <div
      className={
        "w-full flex-col min-h-screen flex items-center justify-center"
      }
    >
      <div className={"gap-[10px] flex flex-col items-center justify-center"}>
        <Link href={"/admission"} className={"text-3xl"}>
          <ColoredText color={"blue"}>We </ColoredText>
          <ColoredText color={"yellow"}>are</ColoredText>
          <ColoredText color={"red"}>Recruiting</ColoredText>
          <ColoredText color={"yellow"}>! </ColoredText>
          <ColoredText color={"blue"}>Click </ColoredText>
          <ColoredText color={"green"}>to </ColoredText>
          <ColoredText color={"red"}>apply</ColoredText>
          <ColoredText color={"blue"}>.</ColoredText>
        </Link>
        <Image
          src={"/logo/gdg.svg"}
          alt={"GDG Logo"}
          width={413}
          height={200}
        />
      </div>
      <div
        className={
          "flex justify-start mt-[10px] items-center p-1 rounded-full border-2 border-grey-light w-full max-w-3xl"
        }
      >
        <Image
          src={"/icon/search.svg"}
          alt={"Search Icon"}
          width={48}
          height={48}
          className={"mx-4"}
        />
        <div className={"text-3xl py-1"}>Curious about who we are?</div>
      </div>
      <div className={"flex flex-col items-center pt-[50px]"}>
        <div className={"text-3xl"}>Scroll Down</div>
        <Image
          src={"/icon/Arrow_down.svg"}
          alt={"Arrow Down Icon"}
          width={48}
          height={48}
        />
      </div>
    </div>
  );
}
