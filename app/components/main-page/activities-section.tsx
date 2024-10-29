import ActivitiesIcon from "@/public/activities.svg";

/**
 * 활동 소개 섹션 컴포넌트
 * @constructor
 */
export default function ActivitiesSection() {
  return (
    <div className={"flex gap-28 items-center"}>
      <ActivitiesIcon />
      <div className={"flex flex-col gap-12"}>
        <div className={"text-6xl font-bold"}>Activities</div>
        <div className={"flex flex-col gap-2.5 w-full max-w-2xl"}>
          <div className={"text-4xl font-bold"}>Solution Challenge</div>
          <div>
            We participated in the 2023 Solution Challenge, an annual
            international student development competition organized by Google
            for Developers. We designed and built a product aimed at
            contributing to the achievement of the{" "}
            <span className={"font-bold"}>
              UN&#39;s Sustainable Development Goals (SDGs).
            </span>
          </div>
          <div>
            GDG Yonsei achieved the highest award rate among university chapters
            in South Korea. <br />- 2,100 teams participated from university
            GDGs worldwide
            <br /> - Six teams from GDG Yonsei participated
            <br />
            <span className={"font-bold"}>
              - Three teams making it to the Top 100
            </span>
            <br />
            <span className={"font-bold"}>
              - One team being selected as a Top 10 Finalist
            </span>
            <br /> This achievement highlights the group&#39;s strong technical
            capabilities and social impact.
          </div>
        </div>
        <div className={"flex flex-col gap-2.5 w-full max-w-2xl"}>
          <div className={"text-4xl font-bold"}>
            GDG x Elice Programming Contest
          </div>
          <div>
            We organized a programming competition on the coding education
            platform Elice in collaboration with six other GDGs. Our team was
            responsible for creating and reviewing the problems following the
            coding test format, as well as planning and managing the event.
          </div>
        </div>
        <div className={"flex flex-col gap-2.5 w-full max-w-2xl"}>
          <div className={"text-4xl font-bold"}>
            Google I/O Extended Seoul 2023
          </div>
          <div>
            A joint conference was hosted by GDG Seoul, GDG Cloud Korea, and
            four GDG on Campus chapters. The conference featured three tracks
            and 15 sessions, covering not only key highlights from Google I/O
            2023 but also the latest trends and practical experiences with
            Google technologies like Google Cloud, TensorFlow, Android, Flutter,
            and Go.
          </div>
        </div>
        <div className={"flex flex-col gap-2.5 w-full max-w-2xl"}>
          <div className={"text-4xl font-bold"}>GDG Cloud Devfest</div>
          <div>
            A joint conference organized by three communities: GDG Cloud Korea,
            GDSC Yonsei University, and GDSC Ewha. The event featured industry
            professionals as speakers and focused on development topics related
            to Google Cloud.
          </div>
        </div>
        <div className={"flex flex-col gap-2.5 w-full max-w-2xl"}>
          <div className={"text-4xl font-bold"}>Namu-thon</div>
          <div>
            Hackathon co-hosted by the GDG communities of Yonsei, Hanyang,
            Sungkyunkwan, and Seoul Women’s University, with support from GDG
            Korea. A total of 150 participants from 36 GDG Korea chapters took
            part in the event.
            <br /> Under the slogan{" "}
            <span className={"font-bold"}>
              &#34;From Forest to Trees,&#34;
            </span>{" "}
            the hackathon emphasized the importance of focusing on both the big
            picture (the &#34;forest&#34;) and the finer details (the
            &#34;trees”: ‘Namu’ in Korean) in the developer&#39;s world. It
            provided participants with an opportunity to apply broad concepts
            learned in university to real-world scenarios.
          </div>
        </div>
      </div>
    </div>
  );
}
