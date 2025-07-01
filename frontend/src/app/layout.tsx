import type { Metadata } from "next";
import "./globals.css";
import '@fontsource/firago';
import Navigation from '../components/header/Navigation'
import Footer from "../components/footer/Footer";
import UseProvider from "./context/UseProvider";
import LanguageWrapper from "components/language/LanguageWrapper";
import ThemeWrapper from "components/theme/ThemeWrapper";
/* import LoaderWrapper from "components/loaders/LoaderWrapper"; */

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
          <LanguageWrapper>
            <ThemeWrapper>
              <Navigation />
                {children}
              <Footer />
            </ThemeWrapper>
          </LanguageWrapper>
      </UseProvider>
      </body>
    </html>
  );
}
