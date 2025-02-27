"use client";

import React from 'react'
import Navbar from './Navbar'
import useScrollVisibility from '@/hooks/useScrollVisibility'
import { ArrowBack, VoiceChat } from '@mui/icons-material'
import { usePathname, useRouter } from 'next/navigation'

const Header = () => {
    const isVisible = useScrollVisibility(85);
    const pathName = usePathname();
    const router = useRouter();
    
  const handleScrollToSeemore = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById('moreAboutMe');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
    
  const handleScrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById('contactInfo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
    
  const handleScrollToProjects = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
        <Navbar
          firstDivClasses={`${isVisible ? 'sticky top-0 left-0 right-0 z-50 bg-transparent' : 'bg-neutral-200 dark:bg-neutral-600'} w-full py-3 px-3 sm:px-4 flex flex-col gap-2 transition-all duration-300 linear`}
          secondDivClasses={`${isVisible ? 'sticky top-2 left-0 right-0 z-50' : ''} w-fit z-30 px-6 self-center flex items-center justify-between gap-4 lg:gap-4 py-2 border bg-white shadow-2xl rounded-full dark:bg-neutral-700 dark:text-neutral-300 transition-all duration-300 linear`}
        />

        <header className='w-full relative bg-cover bg-center mb-4 py-6 px-3 sm:px-4 flex flex-col gap-2 shadow-sm transition-all duration-300 linear rounded-b-[4rem] bg-neutral-200 dark:bg-neutral-600' style={{ backgroundImage: `url('/images/headerBg.jpg')` }}>
          <div className="bg-neutral-300 dark:bg-neutral-700 absolute inset-0 bg-opacity-80 dark:bg-opacity-80 rounded-b-[4rem]"></div>

          {pathName === '/' && 
            <div className="z-10 flex items-center justify-center flex-col gap-6 lg:w-3/4 xl:w-2/3 m-auto text-center py-16">
              <p className="transform -rotate-[20deg] shadow-2xl text-xl font-bold text-gray-800 dark:text-gray-100 bg-gradient-to-r from-[#5971fc9c] via-[#60a5facd] to-[#c084fc95] py-1 px-2 rounded-sm">👋 Hello,</p>
              <h1 className="flex flex-col items-center pb-2 text-5xl md:text-8xl font-bold bg-gradient-to-r from-[#475ac7] via-[#3a71b5] to-[#7848a9] bg-clip-text text-transparent dark:from-[#647af3] dark:via-[#0272fb] dark:to-[#962efd]">
                <span>Welcome to</span> <span>my digital space.</span>
              </h1>

              <div className={`flex w-full md:w-96 items-center justify-center gap-3 m-auto mt-4`}>
                <button onClick={handleScrollToSeemore} className='w-full md:w-1/2 flex items-center justify-center gap-4 shadow-md whitespace-nowrap py-2 px-3 rounded-full border border-blue-700 dark:border-transparent bg-white hover:bg-transparent text-blue-700 group dark:bg-white hover:dark:border-transparent hover:dark:bg-neutral-200 dark:text-blue-700 font-semibold'>
                  <span>📂</span> See more
                </button>
                <button onClick={handleScrollToContact} className='w-full md:w-1/2 flex items-center justify-center gap-4 shadow-md whitespace-nowrap py-2 px-3 rounded-full border border-transparent hover:border-blue-700 bg-blue-700 hover:bg-transparent hover:dark:bg-blue-800 text-white hover:dark:text-white hover:text-blue-700 group font-semibold'>
                  <VoiceChat /> Let&apos;s chat
                </button>
              </div>
            </div>
          }

          {pathName === '/projects' && 
            <div className="z-10 flex items-center justify-center flex-col gap-6 lg:w-3/4 xl:w-2/3 m-auto text-center py-16">
              <h1 className="flex flex-col items-center pb-2 text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#475ac7] via-[#3a71b5] to-[#7848a9] bg-clip-text text-transparent dark:from-[#647af3] dark:via-[#0272fb] dark:to-[#962efd]">
                <span>Here are </span> <span>some of the projects</span> <span>I have worked on.</span>
              </h1>

              <div className={`flex w-full md:w-96 items-center justify-center flex-wrap md:flex-nowrap gap-3 m-auto mt-4`}>
                <button onClick={() => router.back()} className='flex items-center justify-center gap-4 shadow-md whitespace-nowrap py-2 px-6 rounded-full bg-blue-700 hover:bg-blue-600 text-white group font-semibold transition-all duration-300 linear group'>
                  <ArrowBack style={{fontSize: '15px'}} className="transform group-hover:-translate-x-1" />
                  Back
                </button>
                <button onClick={handleScrollToProjects} className='flex items-center justify-center gap-4 shadow-md whitespace-nowrap py-2 px-6 rounded-full border border-blue-700 dark:border-transparent bg-white hover:bg-transparent text-blue-700 group dark:bg-white hover:dark:border-transparent hover:dark:bg-neutral-200 dark:text-blue-700 font-semibold'>
                  <span>📂</span> Check them out
                </button>
                <button onClick={handleScrollToContact} className='flex items-center justify-center gap-4 shadow-md whitespace-nowrap py-2 px-6 rounded-full border border-transparent hover:border-blue-700 bg-blue-700 hover:bg-transparent hover:dark:bg-blue-600 text-white hover:dark:text-white hover:text-blue-700 group font-semibold'>
                  <VoiceChat /> Let&apos;s chat
                </button>
              </div>
            </div>
          }
        </header>

    </>
  )
}

export default Header;