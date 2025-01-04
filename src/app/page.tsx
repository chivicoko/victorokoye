'use client';

import About from '@/components/About';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Header from '@/components/Header';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import ThemeToggler from '@/components/ThemeToggler';
import React, { useState } from 'react'

const Home = () => {
  const [darkTheme, setDarkTheme] = useState<boolean>(false);

  return (
    <section className={`relative flex bg-white dark:bg-neutral-800 ${darkTheme ? 'dark' : ''}`}>
      <main className="w-full min-h-screen">
        <Header />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <CTA />
        <Contact />
      </main>
      
      <ThemeToggler darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
    </section>
  );
}

export default Home;