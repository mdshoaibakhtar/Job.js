import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Loader from '../components/Generic/Loader';
import { MyProvider } from './context/MyContext'; // Import your provider
import {ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jobdotjs",
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
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <Loader />
          {/* <Webchat /> */}
          {children}
        </MyProvider>
      </body>
    </html>
  );
}
