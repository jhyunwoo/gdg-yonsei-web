import NoImg from "@/app/components/placeholder-image";
import { getProjectImageLink, getProjectLink } from "@/lib/links/projectLinks";
import Image from "next/image";
import Link from "next/link";

// components/ProjectCard.tsx

import React, { FC } from "react";

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

  return (
    <div className="flex flex-row justify-between">
        <div className="w-96 h-44 rounded-md bg-gray-500">
            <h2 className="m-auto">{part}</h2>
        </div>
        <div className="text-center">
            <h2>{memberName}</h2>
        </div>
    </div>
  );
};

export default MemberCard;
