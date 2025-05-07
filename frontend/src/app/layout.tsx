import type { Metadata } from "next";
import "./globals.css";
import '@fontsource/firago';
import Navigation from '@/components/header/Navigation'
import Footer from "@/components/footer/Footer";
import UseProvider from "./context/UseProvider";
export const metadata: Metadata = {
  title: "Ganivi Plan",
  description: "Ganivi building indoor plan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="xl:px-[8rem] lg:px-[6rem] md:px-[4rem] sm:px-[2rem] px-[1rem]">
        <UseProvider>
          <Navigation />
            {children}
          <Footer />
      </UseProvider>
      </body>
    </html>
  );
}
