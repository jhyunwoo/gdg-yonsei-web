import SignInButton from "@/app/(admin)/auth/sign-in/sign-in-button";
import Image from "next/image";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import PasskeyButton from "@/app/(admin)/auth/sign-in/passkey-button";

export default async function SignInPage() {
  const session = await auth();
  if (session) redirect("/admin");

  return (
    <div
      className={
        "w-full h-screen flex flex-col gap-4 lg:gap-8 items-center justify-center bg-neutral-50"
      }
    >
      <div className={"flex flex-col items-center gap-4"}>
        <div className={"flex gap-4 items-center p-4"}>
          <Image
            src={"/logo/gdg.svg"}
            alt={"GDG Logo"}
            width={196}
            height={92}
          />
          <div
            className={"text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold"}
          >
            <div>GDG on Campus on Yonsei</div>
            <div>Management System</div>
          </div>
        </div>
        <div
          className={
            "flex flex-col items-center justify-center gap-2 w-full max-w-sm px-4"
          }
        >
          <SignInButton />
          <PasskeyButton />
          <p className={"text-sm text-center text-neutral-900"}>
            To Sign in with a passkey, you must first sign in with GitHub and
            then register a passkey.
          </p>
        </div>
      </div>
    </div>
  );
}
