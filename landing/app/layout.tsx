import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="h-screen w-screen grid grid-cols-1 bg-slate-900 p-2">
          <div className=" col-span-12">
            <Header/>
          </div>
          <div className=" col-span-12 overflow-y-scroll">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}