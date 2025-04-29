import type { Metadata } from "next";
import "./globals.css";
import React from "react";

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
        className={`antialiased`}
      >
          <div className={"flex flex-col xl:flex-row w-full h-screen border-[1px]"}>
              <div className={"hidden xl:flex w-3/12 h-full border-[1px] "}>a</div>
              <div className={"flex xl:hidden w-full border-[1px] "}>navbar</div>
              <div className={"flex w-full xl:w-6/12 h-full border-[1px]"}>
                  {children}
              </div>
              <div className={"hidden xl:flex w-3/12 h-full border-[1px]"}>c</div>
          </div>
      </body>
    </html>
  );
}
