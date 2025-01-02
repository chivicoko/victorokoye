import { PhoneEnabledOutlined } from '@mui/icons-material';
import Image from 'next/image'
import React from 'react'

const About = () => {
    
    const handleScrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const element = document.getElementById('contactInfo');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
  return (
    <div id='moreAboutMe' className='py-16 px-6 border-b border-neutral-600 shadow-xl bg-white dark:bg-neutral-800 dark:text-neutral-300 rounded-b-[4rem] text-center'>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <div className="self-center rounded-xl p-1 bg-gradient-to-r from-[#5971fc9c] via-[#60a5facd] to-[#c084fc95] transition-all duration-300 ease-in-out">
                <div className="relative w-72 h-80 flex justify-center rounded-lg">
                    <Image
                        src="/images/victorImage.jpeg"
                        alt="My Profile Image Preview"
                        fill
                        className="object-cover rounded-lg hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
            </div>
            <div className="max-w-96 flex flex-col gap-4">
                <p className="mb-4 w-fit self-center text-xl font-bold text-gray-800 dark:text-gray-100 bg-gradient-to-r from-[#5971fc9c] via-[#60a5facd] to-[#c084fc95] px-2 rounded-sm">A bit about me</p>
                <h2 className="text-5xl font-bold text-gray-800 dark:text-white">
                    I&apos;m <span className='bg-gradient-to-r from-[#475ac7] via-[#3a71b5] to-[#7848a9] bg-clip-text text-transparent'>Victor Okoye</span>
                </h2>
                <p className="text-lg font-medium text-gray-600 dark:text-gray-200">A Software Engineer with over 4 years of experience in web development. I spend most of my time on the UI part of the web to ensure seamless and relaxed experience for all users.</p>
                
                <button onClick={handleScrollToContact} className='self-center w-1/2 flex items-center justify-center gap-4 shadow-md whitespace-nowrap py-2 px-3 rounded-full border border-transparent hover:border-blue-700 bg-blue-700 hover:bg-transparent hover:dark:bg-blue-800 text-white hover:dark:text-white hover:text-blue-700  group font-semibold'>
                    <PhoneEnabledOutlined /> Get in touch
                </button>
            </div>
        </div>
    </div>
  )
}

export default About;