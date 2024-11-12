import { ReactNode } from "react";
import ModalLoading from "@/app/components/modal-loading";

export default function ProfileLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <ModalLoading />
      {children}
    </>
  );
}
