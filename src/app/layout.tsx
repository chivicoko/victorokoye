'use client';

// import type { Metadata } from "next";
import "./globals.css";
import { useState } from "react";
import ThemeToggler from "@/components/ThemeToggler";
import ScrollToTopButton from "@/components/ScrollToTopButton";

// export const metadata: Metadata = {
//   title: {
//     default: "Dynamics 365 CRM | Sales Hub",
//     template: "%s | Dynamics 365 CRM"
//   },
//   description: "Sales Hub services at its possible best",
//   keywords: "CRM, Sales, Hub, Sales hub, services, leads, sales leads, customers, clients",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const [darkTheme, setDarkTheme] = useState<boolean>(false);


  return (
    <html lang="en">
      <body className={`relative flex flex-col bg-white dark:bg-neutral-600 ${darkTheme ? 'dark' : ''}`}>
        {children}
        <ThemeToggler darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <ScrollToTopButton />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400..900&family=Signika+Negative:wght@300..700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet"></link>
      </body>
    </html>
  );
}
