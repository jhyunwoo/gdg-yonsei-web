import type { Metadata } from "next";
import "../globals.css";
import { ReactNode } from "react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import localFont from "next/font/local";

const googleSans = localFont({
  src: "../fonts/GoogleSansDisplay-Regular-v1.27.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GDG on Campus Yonsei",
  description:
    "Google Developer Group on Campus Yonsei University Sinchon Campus",
  metadataBase: new URL(process.env.SITE_URL!),
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: ReactNode;
  modal: ReactNode;
}>) {
  return (
    <html lang="en" className={`${googleSans.className} bg-background`}>
      <body>
        <Header />
        {children}
        {modal}
        <Footer />
      </body>
    </html>
  );
}
