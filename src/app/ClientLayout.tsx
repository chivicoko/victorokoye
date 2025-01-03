'use client'; // Client Component

import { useState } from "react";
import ThemeToggler from "@/components/ThemeToggler";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [darkTheme, setDarkTheme] = useState<boolean>(false);

  return (
    <>
      <div className={`${darkTheme ? 'dark' : ''}`}>
        {children}
        <ThemeToggler darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <ScrollToTopButton />
      </div>
    </>
  );
}
