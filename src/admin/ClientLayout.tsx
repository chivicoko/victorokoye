'use client';

import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";
import useScrollVisibility from "@/hooks/useScrollVisibility";

export default function ClientLayout({ children }: { children: React.ReactNode }) {

  const isVisible = useScrollVisibility(85);
  
  const router = useRouter();

  return (
    <>
      <div className="w-full min-h-screen pb-16">
        <Navbar
          firstDivClasses={`${isVisible ? 'sticky top-0 left-0 right-0 z-50 bg-transparent' : 'bg-neutral-200 dark:bg-neutral-600'} w-full py-3 px-3 sm:px-4 flex flex-col gap-2 transition-all duration-300 ease-in-out`}
          secondDivClasses={`${isVisible ? 'sticky top-2 left-0 right-0 z-50' : ''} w-fit z-30 px-6 self-center flex items-center justify-between gap-4 lg:gap-4 py-2 border bg-white shadow-md rounded-full dark:bg-neutral-700 dark:text-neutral-300 transition-all duration-300 ease-in-out`}
        />

        <section className="w-full px-3 md:px-4 rounded-md">
          {children}
          <button onClick={() => router.back()} className='mt-3 py-1 px-4 rounded-sm text-sm text-white bg-blue-500 md:hover:bg-blue-600'>Back</button>
        </section>
      </div>
    </>
  );
}
