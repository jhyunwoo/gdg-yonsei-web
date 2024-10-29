import Image from "next/image";

/**
 * 구글의 검색 바를 모방한 GDG 소개 검색 바 모양 컴포넌트
 * 검색 기능은 지원하지 않음
 * @constructor
 */
export default function SearchBar() {
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
