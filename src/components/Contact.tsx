import { GitHub, LinkedIn, Twitter, WhatsApp } from '@mui/icons-material';
import Link from 'next/link';
import React from 'react'

const Contact = () => {
  return (
    <div id="contactInfo" className='w-full mt-4 py-12 px-12 sm:px-4 flex items-center gap-6 md:gap-16 flex-wrap shadow-sm transition-all duration-300 ease-in-out bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 rounded-t-[4rem]'>
        <h2 className='text-2xl sm:ml-6 md:ml-16'>Victor Okoye C.</h2>
        <div className="md:w-[65%] flex flex-col md:flex-row items-center justify-between gap-6 flex-wrap">
          <div className="flex items-center gap-4 sm:gap-10 flex-wrap">
            <p className='text-xl underline'>+234 802884 5693</p>
            <p className='text-xl underline'>victor.c.okoye@gmail.com</p>
          </div>
          <div className="flex items-center justify-start w-full md:w-auto gap-2 flex-wrap">
            <Link href='/https://github.com/chivicoko' target='_blank' className='w-fit flex items-center justify-center gap-4 shadow-md whitespace-nowrap p-2 rounded-full border border-transparent bg-blue-700 text-white group font-semibold transform hover:translate-y-1'>
                <GitHub />
            </Link>
            <Link href='/https://www.linkedin.com/in/chivicoko/' target='_blank' className='w-fit flex items-center justify-center gap-4 shadow-md whitespace-nowrap p-2 rounded-full border border-transparent bg-blue-700 text-white group font-semibold transform hover:translate-y-1'>
                <LinkedIn />
            </Link>
            <Link href='/https://twitter.com/chivicoko/' target='_blank' className='w-fit flex items-center justify-center gap-4 shadow-md whitespace-nowrap p-2 rounded-full border border-transparent bg-blue-700 text-white group font-semibold transform hover:translate-y-1'>
                <Twitter />
            </Link>
            <Link href='/https://wa.me/+2348028845693' target='_blank' className='w-fit flex items-center justify-center gap-4 shadow-md whitespace-nowrap p-2 rounded-full border border-transparent bg-blue-700 text-white group font-semibold transform hover:translate-y-1'>
                <WhatsApp />
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Contact;