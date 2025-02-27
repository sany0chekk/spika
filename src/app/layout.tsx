import { ReactNode } from "react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import { ThemeProvider } from "@/components/common/theme-provider";
import Header from "@/components/layouts/header";
import { ThemeToggle } from "@/components/common/theme-toggle";

import { useAuth } from "@/hooks/useAuth";

import "./globals.css";
import { AuthProvider } from "@/providers/auth-provider";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spika AI",
  description: "Spika — Your Speaking Buddy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              {children}
              <div className="max-md:fixed max-md:bottom-4 max-md:right-4 md:hidden">
                <ThemeToggle />
              </div>
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
