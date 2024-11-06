import { users } from "@/db/schema";

export default function getMemberName(
  memberData: typeof users.$inferSelect | undefined,
) {
  if (memberData) {
    if (memberData.firstName && memberData.lastName) {
      return `${memberData.firstName} ${memberData.lastName}`;
    } else {
      return memberData.name;
    }
  } else {
    return "Loading...";
  }
}
