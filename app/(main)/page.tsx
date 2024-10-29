import Image from "next/image";
import SectionLayout from "@/app/components/main-page/section-layout";
import SearchBar from "@/app/components/main-page/search-bar";
import ScrollDown from "@/app/components/main-page/scroll-down";
import AboutSection from "@/app/components/main-page/about-section";
import SessionSection from "@/app/components/main-page/session-section";
import ActivitiesSection from "@/app/components/main-page/activities-section";
import PartSection from "@/app/components/main-page/part-section";

export default function HomePage() {
  return (
    <div
      className={
        "w-full flex-col min-h-screen flex items-center justify-center gap-96"
      }
    >
      <SectionLayout>
        {/*<RecruitingLink />*/}
        <Image
          src={"/logo/gdg.svg"}
          alt={"GDG Logo"}
          width={413}
          height={200}
        />
        <SearchBar />
        <ScrollDown />
      </SectionLayout>
      <SectionLayout>
        <AboutSection />
      </SectionLayout>
      <SectionLayout>
        <SessionSection />
      </SectionLayout>
      <SectionLayout>
        <ActivitiesSection />
      </SectionLayout>
      <SectionLayout>
        <PartSection />
      </SectionLayout>
    </div>
  );
}
