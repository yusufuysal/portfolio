import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Yusuf Uysal",
  description:
    "Personal portfolio of Yusuf Uysal, a Frontend-focused Full-Stack Developer specializing in React, Next.js, TypeScript, and modern web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className={"min-h-full flex flex-col bg-zinc-950 text-zinc-50"}>
        {children}
      </body>
    </html>
  );
}
