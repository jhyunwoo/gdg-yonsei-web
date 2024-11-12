"use client";

import SessionForm from "@/app/(admin)/admin/sessions/session-form";
import useSession from "@/lib/hooks/useSession";

export default function EditSessionForm({ sessionId }: { sessionId: string }) {
  const { sessionData } = useSession(sessionId);
  return <SessionForm type={"PUT"} sessionData={sessionData} />;
}
