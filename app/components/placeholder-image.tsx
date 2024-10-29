import Image from "next/image";

/**
 * 이미지 없음 placeholder 컴포넌트
 * @constructor
 */
export default function PlaceholderImg() {
  return (
    <Image className={'object-cover w-full h-full'} src={"/project/project-placeholder.jpg"} alt={"No image"} width={1024} height={576}/>
  );
}
