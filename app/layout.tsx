import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import LeftMenu from "@/app/_component/ui/LeftMenu/LeftMenu";
import RightMenu from "@/app/_component/ui/RightMenu/RightMenu";
import MobileMenu from "@/app/_component/ui/MobileMenu/MobileNav";
import { Arimo } from 'next/font/google';


const arimo = Arimo({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: "Kamus Jawa",
    description: "Kamus Jawa",
    openGraph: {
        title: "Kamus Jawa",
        description: "Learn and explore Javanese words.",
        images: "/default-og-image.png",
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
          className={`${arimo.className} antialiased bg-background text-orange-500`}
      >
          <div className={"flex flex-row w-full h-screen"}>
              <LeftMenu />
              <div className={"flex flex-col w-full xl:w-6/12 h-full border-white border-x-[1px]"}>
                  <MobileMenu/>
                  {children}
              </div>
              <RightMenu/>
          </div>
      </body>
    </html>
  );
}