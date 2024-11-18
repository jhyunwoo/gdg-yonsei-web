import Session from "@/app/(main)/sessions/[sessionId]/session";
import Modal from "@/app/(main)/@modal/(.)sessions/[sessionId]/modal";

export default async function SessionPage({
  params,
}: {
  params: Promise<{ sessionId: string }>;
}) {
  const id = (await params).sessionId;
  return (
    <Modal>
      <Session id={id} />
    </Modal>
  );
}
