import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Loader from '../components/Loader';
import { MyProvider } from './context/MyContext'; // Import your provider
import Webchat from "@/components/Webchat";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Semicolon",
  description: "Find your dream job.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MyProvider>
          <Loader />
          <Webchat />
          {children}
        </MyProvider>
      </body>
    </html>
  );
}
