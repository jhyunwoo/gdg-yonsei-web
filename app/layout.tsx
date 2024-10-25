import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { en } from "@/app/fonts";

export const metadata: Metadata = {
  title: "GDG on Campus Yonsei",
  description:
    "Google Developer Group on Campus Yonsei University Sinchon Campus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={en.className}>
      <body>{children}</body>
    </html>
  );
}
