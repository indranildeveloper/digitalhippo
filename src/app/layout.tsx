import { FC } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { RootLayoutProps } from "@/interfaces/layout/RootLayoutProps";
import { cn } from "@/lib/utils";
import Navbar from "@/components/shared/Navbar";
import Providers from "@/components/providers/Providers";

import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DigitalHippo",
  description: "A digital marketplace for high quality digital assets.",
};

const RootLayout: FC<Readonly<RootLayoutProps>> = ({ children }) => {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn("relative h-full font-sans antialiased", inter.className)}
      >
        <main className="relative flex min-h-screen flex-col">
          <Providers>
            <Navbar />
            <div className="flex-1 flex-grow">{children}</div>
          </Providers>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
