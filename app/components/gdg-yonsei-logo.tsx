import Image from "next/image";

/**
 * GDG Yonsei 전체 로고 컴포넌트
 * @constructor
 */
export default function GDGYonseiLogo({ className }: { className?: string }) {
  return (
    <div className={`flex gap-[20px] items-center ${className}`}>
      <Image src={"/logo/gdg.svg"} alt={"GDG Logo"} width={98} height={46} />
      <div className={"flex flex-col text-sm"}>
        <div>Google Developer Groups</div>
        <div>on campus Yonsei</div>
      </div>
    </div>
  );
}
