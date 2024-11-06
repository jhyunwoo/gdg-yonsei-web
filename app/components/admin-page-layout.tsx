import { ReactNode } from "react";

/**
 * 관리자 페이지 기본 레이아웃
 *
 * CSS: w-full min-h-screen p-4 flex flex-col
 * @param children
 * @param className - 추가 CSS 설정
 * @constructor
 */
export default function AdminPageLayout({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`w-full min-h-screen p-4 lg:pl-64 flex flex-col ${className} pt-20 lg:pt-4`}
    >
      {children}
    </div>
  );
}
