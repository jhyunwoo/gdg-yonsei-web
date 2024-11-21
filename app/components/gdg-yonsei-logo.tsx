import Image from "next/image";

/**
 * GDG Yonsei 전체 로고 컴포넌트
 * @constructor
 */
export default function GDGYonseiLogo({ className }: { className?: string }) {
  return (
    <div className={`flex md:gap-[20px] items-center ${className}`}>
      <Image src={"/logo/gdg.svg"} alt={"GDG Logo"} width={98} height={46} />
      <div className={"flex flex-col text-sm"}>
        <div className="hidden md:block">Google Developer Groups</div>
        <div className="hidden md:block">on campus Yonsei</div>
      </div>
    </div>
  );
}
