import getUserRole from "@/lib/get-user-role";
import { auth } from "@/auth";

type UserRoleType = "member" | "core" | "lead" | null;

/**
 * 사용자 접근 권한을 확인하는 함수
 *
 * auth 함수로 사용자 로그인 상태를 가져온 후 로그인 되어 있다면 사용자의 role을 조회한 뒤 접근 권한을 확인함
 * @param acceptedRoles - 접근 가능한 사용자 레벨
 */
export default async function validateUserAccess(
  acceptedRoles: UserRoleType[],
) {
  // 사용자 session
  const session = await auth();
  // 로그인 되어 있지 않다면 사용자 데이터 조회 거부
  if (!session?.user?.id) return false;

  const userRole = await getUserRole(session.user.id);
  return acceptedRoles.includes(userRole);
}
