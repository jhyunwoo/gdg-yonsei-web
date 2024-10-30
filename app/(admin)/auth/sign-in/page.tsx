import SignInButton from "@/app/(admin)/auth/sign-in/sign-in-button";

export default async function SignInPage() {
  return (
    <div
      className={
        "w-full h-screen flex flex-col gap-4 lg:gap-8 items-center justify-center bg-neutral-50"
      }
    >
      <div className={"text-4xl font-bold invisible lg:visible"}>
        GDG on Campus on Yonsei Management System
      </div>
      <div className={"text-2xl font-bold lg:hidden"}>GYMS</div>
      <SignInButton />
    </div>
  );
}
