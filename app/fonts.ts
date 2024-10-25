import { Noto_Sans_KR } from "next/font/google";
import { Open_Sans } from "next/font/google";

const kor = Noto_Sans_KR({
  subsets: ["latin"],
  display: "swap",
});

const en = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

export { kor, en };
