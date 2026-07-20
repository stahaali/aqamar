import type { Metadata } from "next";
import { Exo, Public_Sans } from "next/font/google";
import SocialSidebar from "@/components/SocialSidebar/SocialSidebar";
import "./globals.css";

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  display: "swap",
});

const exo = Exo({
  subsets: ["latin"],
  variable: "--font-exo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Home One || Builza || Construction Template",
  description:
    "Builza is a modern construction and building company template for residential and commercial projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${publicSans.variable} ${exo.variable}`}>
      <head>
        <link rel="stylesheet" href="/assets/css/flaticon.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body
        suppressHydrationWarning
        style={
          {
            "--builza-font": "var(--font-public-sans), sans-serif",
            "--builza-font-two": "var(--font-exo), sans-serif",
          } as React.CSSProperties
        }
      >
        <SocialSidebar />
        {children}
      </body>
    </html>
  );
}
