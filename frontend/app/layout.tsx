import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Sidebar from "@/components/shared/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FundVerse",
  description: "Web3 crowdfunding app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="h-screen w-screen grid grid-cols-12 bg-slate-900">
          <div className=" col-span-12 ">
            <Header/>
          </div>
          <div className=" col-span-1 flex items-center justify-center">
            <Sidebar/>
          </div>
          <div className=" col-span-11 overflow-y-scroll">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
