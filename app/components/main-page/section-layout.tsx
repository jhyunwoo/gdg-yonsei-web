import { ReactNode } from "react";

/**
 * 전체 화면을 사용하는 섹션의 레이아웃
 *
 * 화면 전체 가로 크기, 화면 전체 세로 크기를 사용함
 *
 * flex flex-col items-center justify-center 를 사용하여 children 컴포넌트 배치함
 * @param children
 * @constructor
 */
export default function SectionLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className={
        "w-full min-h-screen flex flex-col items-center justify-center pt-10"
      }
    >
      {children}
    </div>
  );
}
