import Chip from "@/app/components/project-page/chip";

export default function ChipList() {
  return (
    <div className={"flex gap-2 px-4 my-4"}>
      <span>Stage</span>
      <Chip text={"22-23"}></Chip>
      <Chip text={"23-24"}></Chip>
      <Chip text={"24-25"}></Chip>
    </div>
  );
}
