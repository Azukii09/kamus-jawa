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
          <div className={"flex w-full h-screen border-[1px]"}>
              <div className={"flex w-3/12 h-full border-[1px] "}>a</div>
              <div className={"flex w-6/12 h-full border-[1px]"}>
                  {children}
              </div>
              <div className={"flex w-3/12 h-full border-[1px]"}>c</div>
          </div>
      </body>
    </html>
  );
}
