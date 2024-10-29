import GDGYonseiLogo from "@/app/components/gdg-yonsei-logo";
import MailIcon from "@/public/icon/Mail.svg";
import LinkedInIcon from "@/public/icon/LinkedIn.svg";
import InstaIcon from "@/public/icon/instagram.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <div
      className={"w-full p-16 bg-grey-light flex items-center justify-center"}
    >
      <div className={"w-full grid grid-cols-2 justify-items-start max-w-4xl"}>
        <div>
          <div className={"text-3xl text-white font-bold mb-2.5"}>
            Contact Us
          </div>
          <GDGYonseiLogo />
        </div>
        <div className={"flex flex-col gap-2.5"}>
          <Link
            href={"mailto:gdsc.yonsei.univ@gmail.com"}
            className={"flex items-center gap-5 hover:underline"}
          >
            <MailIcon className={""} />
            <div>gdsc.yonsei.univ@gmail.com</div>
          </Link>
          <Link
            href={"https://www.linkedin.com/in/gdg-yonsei-81a02b2a5/"}
            className={"flex items-center gap-5 hover:underline"}
          >
            <LinkedInIcon />
            <div>go to LinkedIn</div>
          </Link>
          <Link
            href={"https://www.instagram.com/gdg.yonseiuniv/"}
            className={"flex items-center gap-5 hover:underline"}
          >
            <InstaIcon />
            <div>@gdg.yonseiuniv</div>
          </Link>
          <div className={"text-sm text-grey"}>
            Copyright ⓒ 2024. GDG on campus Yonsei All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
