import GDGYonseiLogo from "@/app/components/gdg-yonsei-logo";
import MailIcon from "@/public/icon/Mail.svg";
import LinkedInIcon from "@/public/icon/LinkedIn.svg";
import GithubIcon from "@/public/icon/Github.svg";

export default function Footer() {
  return (
    <div
      className={"w-full p-16 bg-grey-light flex items-center justify-center"}
    >
      <div className={"w-full grid grid-cols-2 justify-items-start max-w-6xl"}>
        <div>
          <div className={"text-3xl text-white font-bold mb-2.5"}>
            Contact Us
          </div>
          <GDGYonseiLogo />
        </div>
        <div className={"flex flex-col gap-2.5"}>
          <div className={"flex items-center gap-5"}>
            <MailIcon className={""} />
            <div>gdsc.yonsei.univ@gmail.com</div>
          </div>
          <div className={"flex items-center gap-5"}>
            <LinkedInIcon />
            <div>go to LinkedIn</div>
          </div>
          <div className={"flex items-center gap-5"}>
            <GithubIcon />
            <div>@gdg.yonseiuniv</div>
          </div>
          <div className={"text-sm text-grey"}>
            Copyright ⓒ 2024. GDG on campus Yonsei All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
