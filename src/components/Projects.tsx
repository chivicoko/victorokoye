'use client';

import { projects } from '@/utils/data';
import { GitHub, VisibilityOutlined } from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useMemo, useState } from 'react';
import ProjectImageGallery from './ProjectImageGallery';
import { usePathname } from 'next/navigation';

const Projects = () => {
    const [initialRangeValue, setInitialRangeValue] = useState<number>(0);
    const [secondRangeValue, setSecondRangeValue] = useState<number>(3);
    const pathName = usePathname();
    // console.log(pathName);

    useEffect(() => {
        if(pathName === '/') {
            setInitialRangeValue(0);
            setSecondRangeValue(3);
        }
        if(pathName === '/projects') {
            setInitialRangeValue(0);
            setSecondRangeValue(projects.length);
        }

    },[pathName]);

    // Memoize projects array rendering
    const renderedProjects = useMemo(() => {
        return projects.slice(initialRangeValue, secondRangeValue).map((project, index) => (
            <div
                key={project.id}
                className="flex flex-col md:flex-row items-center justify-center gap-12 pb-6 border-b border-neutral-400"
            >
                {/* Project Image Gallery */}
                <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'} order-2 w-full md:w-1/2 flex flex-col items-center gap-4`}>
                    <ProjectImageGallery project={project} />
                </div>

                {/* Project Details */}
                <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'} order-1 w-full md:w-1/2 flex flex-col gap-4`}>
                    <div className="mb-4 w-fit flex items-center gap-2 self-center text-2xl font-bold">
                        <span className='animate-pulse-slow bg-gradient-to-r from-[#5870fa] via-[#0272fb] to-[#7f03fb] bg-clip-text text-transparent p-2 rounded-full'>✨</span>
                        <p className='text-3xl bg-gradient-to-r from-[#5870fa] via-[#0272fb] to-[#7f03fb] bg-clip-text text-transparent'>{index+1}</p>
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white text-center">{project.name}</h2>
                    <p className="text-lg font-medium text-gray-900 dark:text-gray-200 text-center">{project.description}</p>
                    <p className="p-2 rounded-lg bg-blue-300 text-neutral-950">
                        <span><strong>Stack: </strong></span>
                        {project.techStack}
                    </p>

                    <div className="flex flex-col md:flex-row items-center flex-wrap w-full gap-3">
                        <Link href={project.githubLink} target='_blank' className="self-center whitespace-nowrap flex items-center justify-center gap-4 shadow-md py-2 px-4 rounded-full border border-transparent hover:border-blue-700 dark:hover:border-white bg-blue-700 hover:bg-transparent text-white hover:text-blue-800 dark:hover:text-white group font-semibold">
                            <GitHub /> Codebase (GitHub)
                        </Link>
                        <Link href={project.liveDemoLink} target='_blank' className="self-center whitespace-nowrap flex items-center justify-center gap-4 shadow-md py-2 px-4 rounded-full border border-transparent hover:border-blue-700 dark:hover:border-white bg-blue-700 hover:bg-transparent text-white hover:text-blue-800 dark:hover:text-white group font-semibold">
                            <VisibilityOutlined style={{ width: '17px', height: '17px' }} /> Live Demo
                        </Link>
                    </div>
                </div>
            </div>
        ));
    }, [initialRangeValue, secondRangeValue]);

    return (
        <div id='projects' className={`${pathName === '/projects' ? "my-20" : 'my-12'} w-full flex flex-col items-center justify-center gap-12 py-12 px-4 sm:px-12 md:px-6 rounded-[4rem] bg-neutral-200 dark:bg-neutral-600`}>

            <p className="w-fit text-xl font-bold text-gray-800 dark:text-gray-100 bg-gradient-to-r from-[#5971fc9c] via-[#60a5facd] to-[#c084fc95] py-1 px-2 rounded-sm my-2">
                Projects
            </p>

            <div className="w-full flex flex-col gap-12 lg:px-10 xl:px-10 2xl:px-40">
                {renderedProjects}
            </div>

            {pathName === '/' && 
                <Link href="/projects" className="self-center w-full md:w-1/2 flex items-center justify-center gap-4 shadow-md py-3 px-3 rounded-full bg-white border border-blue-800 text-blue-700 group font-semibold">
                    View all projects
                    <div className="relative w-6 h-6 bg-transparent group transition-all duration-300 ease-in-out">
                        <Image
                            src="/images/Arrow--up-right.svg"
                            alt=""
                            fill
                            className="object-cover rounded-lg transform group-hover:rotate-45 group-hover:translate-x-3"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                </Link>
            }
        </div>
    );
};

export default Projects;
