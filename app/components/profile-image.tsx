import Image from "next/image";

export default function ProfileImage({
  imagePath,
}: {
  imagePath: string | null | undefined;
}) {
  return (
    <>
      {imagePath ? (
        <div className={"aspect-1 w-56 h-56"}>
          <Image
            src={imagePath}
            alt={"Profile Image"}
            width={224}
            height={224}
            className={"object-cover w-full h-full rounded-xl"}
          />
        </div>
      ) : (
        <div className={"w-56 h-56 bg-neutral-500 rounded-xl"} />
      )}
    </>
  );
}
