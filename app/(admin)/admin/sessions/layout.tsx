import { ReactNode } from "react";
import ModalLoading from "@/app/components/modal-loading";

export default function AdminSessionsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <ModalLoading />
      {children}
    </>
  );
}
