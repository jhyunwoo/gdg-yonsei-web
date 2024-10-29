import { ReactNode } from "react";

/**
 * 텍스트에 구글 지정 색상을 입히는 컴포넌트
 *
 * 텍스트 밑 밑줄이 같은 색으로 추가됨
 * @param children - 텍스트
 * @param color - 색상 (blue, red, yellow, green)
 * @constructor
 */
export default function ColoredText({
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
