import type { Metadata } from "next";
import { Inter, Oswald, Playfair_Display } from "next/font/google";

import "./globals.css";
import Navbar from "../components/navbar";
import Home from "./page";
import AboutPage from "./about/page";
import PortfolioPage from "./portfolio/page";
import ContactPage from "./contact/page";

const inter = Inter({ subsets: ["latin"] });
const oswald = Oswald({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nathan Mayne | Portfolio Site",
  description: "My Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.className} page-wrapper`}>
        <div className="w-full min-h-screen bg-primary p-[20px]">
          <header className="h-16">
            <Navbar />
          </header>
          <div className="max-w-screen-xl xl:max-w-screen-2xl m-auto">
            <Home className="" />
            <AboutPage />
            <PortfolioPage />
            <ContactPage />
          </div>
        </div>
      </body>
    </html>
  );
}
