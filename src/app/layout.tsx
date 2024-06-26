import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import StickyNavbar from "./_layouts/navbar/stickyNavbar";
import Navbar from "./_layouts/navbar/navbar";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

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
        <Navbar />
        <StickyNavbar />
        {children}
      </body>
    </html>
  );
}
