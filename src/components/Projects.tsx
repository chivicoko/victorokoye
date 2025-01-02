import { projects } from '@/utils/data';
import { ArrowForward, GitHub, VisibilityOutlined } from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


const Projects = () => {
    const [currentImage, setCurrentImage] = useState<string>('');

    const handleProductImagesViews = (id: number, image: string) => {
        if (id) {
            setCurrentImage(image);
        }
    }

    const handleProductImagesHover = (id: number, image: string) => {
        if (id) {
            setCurrentImage(image);
        }
    }

    // Slider settings
    const settings = {
        dots: true,
        infinite: projects.length > 4,
        autoplay: false,
        speed: 300,
        slidesToShow: projects.length < 4 ? projects.length : 4,
        slidesToScroll: 1,
        arrows: true,
    };

    return (
        <div className='w-full flex flex-col items-center justify-center gap-12 py-12 px-4 sm:px-12 my-12 rounded-[4rem] bg-neutral-200 dark:bg-neutral-600'>
            <p className="w-fit text-xl font-bold text-gray-800 dark:text-gray-100 bg-gradient-to-r from-[#5971fc9c] via-[#60a5facd] to-[#c084fc95] px-2 rounded-sm my-2">Projects</p>

            <div className="w-full flex flex-col gap-12 lg:px-12 xl:px-40">
                {projects.map((project, index) => (
                    <div key={project.id} className="flex flex-col md:flex-row items-center justify-center gap-12 pb-6 border-b border-neutral-400">
                        <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'} order-2 w-full md:w-1/2 flex flex-col items-center justify-between gap-4`}>
                            

                            <div
                                className="w-full relative bg-cover bg-center self-center rounded-xl p-1"
                                style={{ backgroundImage: `url('/images/bg-2.jpg')` }}
                            >
                                
                                <div className={`bg-neutral-900 border-2 border-white absolute inset-0 bg-opacity-80 rounded-xl`}></div>

                                <div className="relative z-10 w-full h-44 md:w- md:h-72">
                                    <Image
                                        src={currentImage || project.img}
                                        alt={`Samsung Galaxy S50's preview`}
                                        fill
                                        className="object-contain rounded-lg"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                            </div>

                            <div className="w-full flex items-center gap-3 flex-wrap">
                                {/* <Slider {...settings}>
                                </Slider> */}
                                    {project.otherImages.map(projectImage => (
                                        <div key={projectImage.id} onClick={() => handleProductImagesViews(projectImage.id, projectImage.img)} className={`${currentImage === projectImage.img ? 'border border-neutral-800' : ''} w-fit rounded-lg p-1 md:p-4 bg-zinc-50 cursor-pointer`}>
                                            <div className="relative w-12 h-12 md:w-16 md:h-16">
                                                <Image
                                                    src={projectImage.img}
                                                    alt="product extra preview"
                                                    fill
                                                    className={`${currentImage === projectImage.img ? 'scale-110' : ''} object-cover rounded-lg hover:scale-105`}
                                                    sizes="(max-width: 768px) 100vw, 50vw"
                                                />
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>

                        <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'} order-1 w-full md:w-1/2 flex flex-col gap-4`}>
                            <p className="mb-4 w-fit self-center text-2xl font-bold bg-gradient-to-r from-[#5870fa] via-[#0272fb] to-[#7f03fb] bg-clip-text text-transparent p-2 rounded-full animate-pulse-slow transition-all duration-300 ease-in-out">✨</p>
                            <h2 className="text-5xl font-bold text-gray-800 dark:text-white text-center">{project.name}</h2>
                            <p className="text-lg font-medium text-gray-600 dark:text-gray-200 text-center">A Software Engineer with over 4 years of experience in web development. I spend most of my time on the UI part of the web to ensure seamless and relaxed experience for all users.</p>

                            <div className='flex flex-col md:flex-row items-center gap-3'>
                                <Link href='/' className='self-center w-full md:w-1/2 flex items-center justify-center gap-4 shadow-md whitespace-nowrap py-2 px-3 rounded-full border border-transparent hover:border-blue-700 bg-blue-700 hover:bg-transparent hover:dark:bg-blue-800 text-white hover:dark:text-white hover:text-blue-700  group font-semibold'>
                                    <GitHub /> Codebase (GitHub)
                                </Link>
                                <Link href='/' className='self-center w-full md:w-1/2 flex items-center justify-center gap-4 shadow-md whitespace-nowrap py-2 px-3 rounded-full border border-transparent hover:border-blue-700 bg-blue-700 hover:bg-transparent hover:dark:bg-blue-800 text-white hover:dark:text-white hover:text-blue-700  group font-semibold'>
                                    <VisibilityOutlined style={{ width: '17px', height: '17px' }} /> Live Demo
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

            <Link href='/projects' className='self-center w-full md:w-1/2 flex items-center justify-center gap-4 shadow-md whitespace-nowrap py-3 px-3 rounded-full bg-white border border-blue-800 text-blue-700  group font-semibold'>
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
        </div>
    )
}

export default Projects;
