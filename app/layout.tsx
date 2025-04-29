import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import LeftMenu from "@/app/_component/LeftMenu/LeftMenu";
import RightMenu from "@/app/_component/RightMenu/RightMenu";

export const metadata: Metadata = {
  title: "Kamus Jawa",
  description: "Kamus Jawa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-slate-900 text-white`}
      >
          <div className={"flex flex-col xl:flex-row w-full h-screen"}>
              <LeftMenu />
              <div className={"flex xl:hidden w-full border-[1px] "}>navbar</div>
              <div className={"flex w-full xl:w-6/12 h-full border-x-[1px]"}>
                  {children}
              </div>
              <RightMenu/>
          </div>
      </body>
    </html>
  );
}
