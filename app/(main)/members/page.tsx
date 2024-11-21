import MemberListing from "@/app/components/member-page/memberListing";
import PageTitleComponent from "@/app/components/title/pageTitle";

export default async function MembersPage() {
  return (
    <>
      <PageTitleComponent title="Members" />
      <MemberListing />
    </>
  );
}
