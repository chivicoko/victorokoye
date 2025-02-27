import { ProjectProps } from '@/utils/types';
import Image from 'next/image';
import React, { useState } from 'react';

interface Props {
  project: ProjectProps;
}

const ProjectImageGallery: React.FC<Props> = ({ project }) => {
    const [currentImage, setCurrentImage] = useState<string>(project.img);

    const handleImageClick = (id: number, image: string) => {
        setCurrentImage(image);
    };

    return (
        <div className="w-full flex flex-col gap-2 relative bg-cover bg-center self-center rounded-xl p-1" style={{ backgroundImage: `url('/images/bg-2.jpg')` }}>
            <div className="bg-neutral-900 border-2 border-white absolute inset-0 bg-opacity-80 rounded-xl"></div>

            <div className="relative z-10 w-full h-44 md:h-72">
                <Image
                    src={currentImage || project.img || '/images/imagePlaceholder.jpeg'}
                    alt={`${project.name} preview`}
                    fill
                    className="object-contain rounded-lg"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>

            {/* Image Thumbnails */}
            <div className="z-10 w-full flex items-center gap-3 flex-wrap mb-2 mx-1">
                {project.otherImages.map((projectImage, index) => (
                    <div
                        key={projectImage.id}
                        onClick={() => handleImageClick(projectImage.id, projectImage.img)}
                        className={`w-fit rounded-lg p-1 bg-zinc-50 cursor-pointer border-2 ${currentImage === projectImage.img ? 'border-neutral-800 border-dotted scale-110 transform -translate-y-1' : 'border-transparent'}`}
                    >
                        <div className="relative w-12 h-12 md:w-16 md:h-16">
                            <Image
                                src={projectImage.img || '/images/imagePlaceholder.jpeg'}
                                alt={`${project.name} preview ${index+1}`}
                                fill
                                className={`${currentImage === projectImage.img ? 'scale-110' : ''} object-cover rounded-lg hover:scale-105`}
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectImageGallery;
