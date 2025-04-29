import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import LeftMenu from "@/app/_component/ui/LeftMenu/LeftMenu";
import RightMenu from "@/app/_component/ui/RightMenu/RightMenu";
import MobileMenu from "@/app/_component/ui/MobileMenu/MobileNav";

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
        className={`antialiased bg-slate-900 text-slate-400`}
      >
          <div className={"flex flex-row w-full h-screen"}>
              <LeftMenu />
              <div className={"flex flex-col w-full xl:w-6/12 h-full border-x-[1px]"}>
                  <MobileMenu/>
                  {children}
              </div>
              <RightMenu/>
          </div>
      </body>
    </html>
  );
}
