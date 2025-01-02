import React from 'react'

const Skills = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center gap-12 mb-4 py-12 px-4 sm:px-12 my-12'>
        <p className="w-fit text-xl font-bold text-gray-800 dark:text-gray-100 bg-gradient-to-r from-[#5971fc9c] via-[#60a5facd] to-[#c084fc95] px-2 rounded-sm">Skills</p>
        
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:px-12 xl:px-40">

            <div className="p-1 rounded-[2rem] bg-gradient-to-r from-[#5971fc9c] via-[#60a5facd] to-[#c084fc95]">
                <div className="bg-neutral-200 dark:bg-neutral-600 p-4 rounded-[1.8rem] text-gray-800 dark:text-gray-100">
                    <h3 className='text-center font-semibold'>Frontend</h3>
                    <div className="skills">
                        <p>Skills</p>
                    </div>
                </div>
            </div>

            <div className="p-1 rounded-[2rem] bg-gradient-to-r from-[#5971fc9c] via-[#60a5facd] to-[#c084fc95]">
                <div className="bg-neutral-200 dark:bg-neutral-600 p-4 rounded-[1.8rem] text-gray-800 dark:text-gray-100">
                    <h3 className='text-center font-semibold'>Backend</h3>
                    <div className="skills">
                        <p>Skills</p>
                    </div>
                </div>
            </div>

            <div className="p-1 rounded-[2rem] bg-gradient-to-r from-[#5971fc9c] via-[#60a5facd] to-[#c084fc95]">
                <div className="bg-neutral-200 dark:bg-neutral-600 p-4 rounded-[1.8rem] text-gray-800 dark:text-gray-100">
                    <h3 className='text-center font-semibold'>Others</h3>
                    <div className="skills">
                        <p>Skills</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Skills;