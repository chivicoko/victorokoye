import { VoiceChat } from '@mui/icons-material'
import React from 'react'

const CTA = () => {
  const handleScrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById('contactInfo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='mb-28 py-12 px-6 flex flex-col gap-6 border-b border-neutral-600 shadow-xl bg-white dark:bg-neutral-800 dark:text-neutral-300 rounded-b-[4rem] text-center'>
        <p className="w-fit self-center text-xl font-bold text-gray-800 dark:text-gray-100 bg-gradient-to-r from-[#5971fc9c] via-[#60a5facd] to-[#c084fc95] px-2 rounded-sm">
            🎗️ A wise man once said 🎗️
        </p>
        <p className='text-3xl'>
            <span className='text-7xl leading-2 bg-gradient-to-r from-[#5870fa] via-[#0272fb] to-[#7f03fb] bg-clip-text text-transparent'>&quot;</span>
                <span className='bg-gradient-to-r from-[#5870fa] via-[#0272fb] to-[#7f03fb] bg-clip-text text-transparent font-bold text-5xl'>Time</span> is more valuable than <span className='bg-gradient-to-r from-[#5870fa] via-[#0272fb] to-[#7f03fb] bg-clip-text text-transparent font-bold'>money</span>. You can get more <span className='bg-gradient-to-r from-[#5870fa] via-[#0272fb] to-[#7f03fb] bg-clip-text text-transparent font-bold'>money</span>, but you cannot get more <span className='bg-gradient-to-r from-[#5870fa] via-[#0272fb] to-[#7f03fb] bg-clip-text text-transparent font-bold text-5xl'>time</span>
            <span className='text-7xl leading-2 bg-gradient-to-r from-[#5870fa] via-[#0272fb] to-[#7f03fb] bg-clip-text text-transparent'>&quot;</span>
        </p>

        <p className='text-2xl'>Don&apos;t wait any more.</p>
        <button onClick={handleScrollToContact} className='self-center w-fit flex items-center justify-center gap-4 shadow-md whitespace-nowrap py-2 px-6 rounded-full border border-transparent hover:border-blue-700 bg-blue-700 hover:bg-transparent hover:dark:bg-blue-800 text-white hover:dark:text-white hover:text-blue-700  group font-semibold'>
            <VoiceChat /> Chat me up
        </button>
    </div>
  )
}

export default CTA