import type { Metadata } from "next";
import "../globals.css";
import { ReactNode } from "react";
import LoadingAlert from "@/app/components/loading-alert";

export const metadata: Metadata = {
  title: "GDG Yonsei Management System",
  description:
    "Google Developer Group on Campus Yonsei University Sinchon Campus Management System Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`bg-neutral-50`}>
      <body>
        {children}
        <LoadingAlert />
      </body>
    </html>
  );
}
