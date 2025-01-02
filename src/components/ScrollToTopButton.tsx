"use client";

import useScrollVisibility from '@/hooks/useScrollVisibility';

export default function ScrollToTopButton() {
  const isVisible = useScrollVisibility(100);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 border border-transparent hover:border-blue-700 dark:hover:border-white bg-blue-700 hover:bg-transparent rounded-full text-white hover:text-blue-800 dark:hover:text-white text-2xl p-3 hover:cursor-pointer shadow-lg transition group"
      >
        <p className='transition-all duration-200 ease-in-out transform group-hover:-translate-y-2'>↑</p>
      </button>
    )
  );
}
