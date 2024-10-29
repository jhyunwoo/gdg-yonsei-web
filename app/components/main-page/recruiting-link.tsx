import ColoredText from "@/app/components/main-page/colored-text";
import Link from "next/link";

/**
 * GDG 지원 페이지로 이동할 수 있는 링크
 * @constructor
 */
export default function RecruitingLink() {
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
