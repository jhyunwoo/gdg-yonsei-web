import Image from "next/image";

/**
 * 화면을 스크롤하여 더 자세한 정보가 있음을 알리는 컴포넌트
 * @constructor
 */
export default function ScrollDown() {
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
