'use client';

import { experiences } from '@/utils/data';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
  
const Experience = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  
    
  return (
    <div id='experience' className='mb-12 py-16 px-3 sm:px-8 md:px-16 lg:px-3 xl:px-16 border-b border-neutral-600 bg-white dark:bg-neutral-800 dark:text-neutral-300 rounded-b-[4rem] text-center'>
        <div className="w-full flex items-center justify-center md:mb-12">
            <p className="mb-4 w-fit self-center text-xl font-bold text-gray-800 dark:text-gray-100 bg-gradient-to-r from-[#5971fc9c] via-[#60a5facd] to-[#c084fc95] py-1 px-2 rounded-sm">Experience</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            <div className="self-center flex items-center justify-center w-full lg:w-2/5 rounded-lg p-1 transition-all duration-300 ease-in-out">
                <div className="self-center relative size-64 sm:size-96 flex justify-center rounded-lg">
                    <Image
                        src="/images/techBro.jpg"
                        alt="My Profile Image Preview"
                        fill
                        className="object-cover rounded-lg hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
            </div>

            <div className="space-y-4 mx-auto w-full lg:w-3/5 mb-2 lg:px-6">
                {experiences.map((experience, index) => (
                    <div key={index} className="border-b">
                        <button
                            onClick={() => handleToggle(index)}
                            className="flex justify-between items-center w-full py-4 text-left"
                        >
                            <h2 className="flex flex-col sm:flex-row gap-2 text-lg sm:text-xl font-bold text-gray-800 dark:text-white">
                                <span className='pb-1 bg-gradient-to-r from-[#475ac7] via-[#3a71b5] to-[#7848a9] bg-clip-text text-transparent'>{experience.company}</span>
                            </h2>
                            <span>
                                {activeIndex === index ? (
                                    <span className='text-lg font-medium text-gray-600 dark:text-gray-200'><KeyboardArrowUp /></span>
                                ) : (
                                    <span className='text-lg font-medium text-gray-600 dark:text-gray-200'><KeyboardArrowDown /></span>
                                )}
                            </span>
                        </button>

                        {activeIndex === index && (
                            <div className="text-gray-600 transition-all duration-300">
                                <div className="flex items-center justify-between sm:gap-4 flex-wrap pb-2">
                                    <div className="flex flex-col sm:flex-row items-center justify-between sm:gap-4">
                                        <p className="self-start text-lg font-medium text-neutral-600 dark:text-gray-200 sm:py-2">
                                            {experience.position}
                                        </p>
                                        <span className='h-6 w-[2px] hidden sm:block bg-gradient-to-r from-[#5971fc9c] via-[#60a5facd] to-[#c084fc95]'></span>
                                        <p className="self-start text-lg font-medium text-neutral-600 dark:text-gray-200 sm:py-2">
                                            {experience.duration}
                                        </p>
                                    </div>
                                    
                                    <p className="self-end text-lg font-medium text-neutral-600 dark:text-gray-200 sm:py-2 underline">
                                        {experience.verifyLink && <Link href={experience.verifyLink} target="_blank">Verify</Link>}
                                    </p>
                                </div>
                                <ul className='list-disc pl-5'>
                                    {experience.points.map((point, index) => 
                                        <li 
                                            key={index}
                                            className='text-start text-lg font-medium text-gray-950 dark:text-gray-200 py-2'
                                        >
                                            {point}
                                        </li>
                                    )}
                                </ul>
                                {/* <p className="text-start text-lg font-medium text-gray-950 dark:text-gray-200 py-2">{experience.points}</p> */}
                            </div>
                        )}
                    </div>
                ))}
            </div>

        </div>
    </div>
  )
}

export default Experience;