import { auth } from "@/auth";
import SignOut from "@/app/components/auth/sign-out-button";
import SignIn from "@/app/components/auth/sign-in-button";

export default async function HomePage() {
  const session = await auth();
  return (
    <div
      className={
        "w-full flex-col gap-10 min-h-screen flex items-center justify-center"
      }
    >
      <div className={`text-7xl font-extrabold text-red-light`}>
        Google Developer Group on Campus Yonsei University Sinchon
      </div>
      {session ? <SignOut /> : <SignIn />}
    </div>
  );
}
