import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";
import CommonLayout from "@/components/common-layout";
import { ClerkProvider } from "@clerk/nextjs";
import LocomotiveScroll from "@/components/Aceternity-Components/locomotive-scroll/locomotive-scroll";
import AosAnimation from "@/components/Aceternity-Components/aos-animation/aos-helper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Skill Connect",
  description:
    "Skill Connect is a job board application on which you can hire and get jobs with ease and share knowledge via post sharing.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Suspense fallback={<Loading />}>
            <CommonLayout>{children}</CommonLayout>
          </Suspense>
          <LocomotiveScroll />
          <AosAnimation />
        </body>
      </html>
    </ClerkProvider>
  );
}
