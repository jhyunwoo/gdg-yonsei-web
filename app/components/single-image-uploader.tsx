"use client";

import { SetStateAction } from "react";
import Image from "next/image";

export default function SingleImageUploader({
  title,
  setImage,
  image,
  prevImage,
  projectId,
  type,
  imageUrl,
  isSquare,
}: {
  title: string;
  setImage: (value: SetStateAction<File | undefined>) => void;
  image: File | undefined;
  prevImage?: string | null | undefined;
  projectId?: string;
  type: string;
  imageUrl?: string;
  isSquare?: boolean;
}) {
  return (
    <div className={"flex flex-col gap-2"}>
      <div>{title}</div>
      <label
        className="p-2 px-4 rounded-full bg-neutral-950 text-white text-center hover:bg-neutral-800 transition-colors cursor-pointer"
        htmlFor="defaultImageInput"
      >
        Select {title}
      </label>
      <input
        className={"hidden"}
        id="defaultImageInput"
        type={"file"}
        accept={"image/*"}
        onChange={(event) => {
          setImage(event.target.files?.[0]);
          event.currentTarget.value = "";
        }}
      />
      {image ? (
        <Image
          src={URL.createObjectURL(image)}
          alt={"Default Image"}
          width={300}
          height={300}
          className={`w-full ${isSquare ? "aspect-1 rounded-xl" : ""}`}
        />
      ) : prevImage && projectId ? (
        <Image
          src={
            imageUrl
              ? imageUrl
              : `https://image.gdgyonsei.moveto.kr/${type}/${projectId}/${prevImage}`
          }
          alt={"Default Image"}
          width={300}
          height={300}
          className={`w-full ${isSquare ? "aspect-1 rounded-xl" : ""}`}
        />
      ) : null}
    </div>
  );
}
