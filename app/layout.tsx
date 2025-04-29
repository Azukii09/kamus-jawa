import type { Metadata } from "next";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
