import Session from "@/app/(main)/sessions/[sessionId]/session";
import MainLayout from "@/app/components/main-layout";

export default async function SessionPage({
  params,
}: {
  params: Promise<{ sessionId: string }>;
}) {
  const { sessionId } = await params;
  return (
    <MainLayout>
      <Session id={sessionId} />
    </MainLayout>
  );
}
