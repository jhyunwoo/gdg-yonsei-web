"use client";

import { Dispatch, SetStateAction } from "react";
import Image from "next/image";

export default function MultipleImageUploader({
  title,
  setImages,
  images,
  prevImages,
  projectId,
}: {
  title: string;
  setImages: Dispatch<SetStateAction<File[]>>;
  images: File[] | undefined;
  prevImages: string[] | null | undefined;
  projectId: string | null | undefined;
}) {
  console.log(images);
  return (
    <div className={"flex flex-col gap-2"}>
      <div>{title}</div>
      <label
        className="p-2 px-4 rounded-full bg-neutral-950 text-white text-center hover:bg-neutral-800 transition-colors cursor-pointer"
        htmlFor="imagesInput"
      >
        Select {title}
      </label>
      <input
        className={"hidden"}
        id="imagesInput"
        type={"file"}
        multiple={true}
        accept={"image/*"}
        onChange={(event) => setImages(Array.from(event.target.files!))}
      />
      {images && images.length > 0
        ? images?.map((image) => (
            <Image
              key={image.name}
              src={URL.createObjectURL(image)}
              alt={"Image"}
              width={300}
              height={300}
              className={"w-full"}
            />
          ))
        : prevImages?.map((image) => (
            <Image
              key={image}
              src={`https://image.gdgyonsei.moveto.kr/projects/${projectId}/${image}`}
              alt={"Image"}
              width={300}
              height={300}
              className={"w-full"}
            />
          ))}
    </div>
  );
}
