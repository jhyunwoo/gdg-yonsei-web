"use client";
import Image from "next/image";
// components/memberCard.tsx

import React, { FC, useState } from "react";

interface MemberCardProps {
  memberId: string;
  memberName: string | null;
  generation: number | null;
  part: string | null;
  role: string | null;
}

// Create the functional component using props
const MemberCard: FC<MemberCardProps> = ({
  memberId,
  memberName,
  generation,
  part,
  role,
}) => {
  //   const validDescription = description
  //     ? description
  //     : ["Description not provided"];
  const [isEnlarge, setIsEnlarge] = useState(false);

  return (
    <div className="flex flex-row justify-between mx-12 group">
      <div className="w-32 h-44 rounded-md bg-gray-500 flex flex-row align-middle overflow-clip">
        <div className="m-auto text-2xl text-white group-hover:hidden">
          {part}
        </div>
        <Image
          src={"https://picsum.photos/500"}
          alt="Project image"
          width={500}
          height={500}
          className="hidden group-hover:block"
        />
      </div>
      <div className="flex flex-row items-center">
        <h2 className="text-4xl font-bold underline underline-offset- group-hover:text-6xl">
          {memberName}
        </h2>
      </div>
    </div>
  );
};

export default MemberCard;
