import { skills } from '@/utils/data';
import Image from 'next/image';
import React from 'react'

const Skills = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center gap-12 mb-4 py-12 px-4 sm:px-12 my-12'>
        <p className="w-fit text-xl font-bold text-gray-800 dark:text-gray-100 bg-gradient-to-r from-[#5971fc9c] via-[#60a5facd] to-[#c084fc95] py-1 px-2 rounded-sm">Skills</p>
        
        <div className="w-full flex items-center lg:px-12 xl:px-40">
        {/* <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:px-12 xl:px-40"> */}
            {skills.map(skillStack => (
                <div key={skillStack.id} className="p-1 rounded-[2rem] bg-gradient-to-r from-[#5971fc9c] via-[#60a5facd] to-[#c084fc95]">
                    <div className="h-full w-full bg-neutral-200 dark:bg-neutral-600 p-4 rounded-[1.8rem] text-gray-800 dark:text-gray-100">
                        <h3 className='text-center font-semibold mb-4'>{skillStack.name}</h3>
                        <div className="skills flex items-center flex-wrap gap-4">
                            {skillStack.stack.map(skill => (
                                <div key={skill.id} className="w-fit p-3 flex items-center gap-4 rounded-xl border border-neutral-400">
                                    <div className="relative w-12 h-12 md:w-16 md:h-16">
                                        <Image
                                            src={skill.img}
                                            alt="product extra preview"
                                            fill
                                            className={`object-cover rounded-lg hover:scale-105`}
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                    </div>
                                    <p className='uppercase'>{skill.name}</p>
                                </div>
                            ))}
                            
                        </div>
                    </div>
                </div>
            ))}

        </div>
    </div>
  )
}

export default Skills;