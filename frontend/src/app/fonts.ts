import { Roboto, Rubik } from "next/font/google";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});

const roboto = Roboto({
  subsets: ["latin-ext"],
  variable: "--font-roboto",
  weight: ["400", "700"],
});

export const fonts = {
  rubik,
  roboto,
};
