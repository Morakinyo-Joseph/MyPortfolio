"use client";
import "@/scss/index.scss";
import { Raleway, Fira_Code } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"], variable: "--raleway" });
const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--fira-code",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <style jsx global>
        {`
          :root {
            --raleway: ${raleway.style.fontFamily};
            --fira-code: ${firaCode.style.fontFamily};
          }
        `}
      </style>
      <body>{children}</body>
    </html>
  );
}
