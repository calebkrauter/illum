import React from 'react'
import Image from 'next/image';

interface imageCardProps {
    title: string,
    path: string,
    className?: string,
    xPosition?: string,
    yPosition?: string,

}

const ImageCard: React.FC<imageCardProps> = ({ title, path, className, xPosition = '50', yPosition = '50' }) => {
    return (

        <div className={`w-full h-full relative p-5 min-h-full max-h-full border rounded-lg shadow-md z-20 ${className}`}>
            <Image src={path} alt='Project Thumbnail (Small)' layout='fill' objectFit='cover' objectPosition={`${xPosition}% ${yPosition}%`}></Image>
            <div className='absolute inset-0 flex items-center justify-center'>

                <h1 className={`text-xl font-bold p-2 ${className}`}>{title}</h1>
            </div>
<<<<<<< Updated upstream:illum/app/components/image_card.tsx
            {/* <div className='absolute inset-0 flex items-center justify-center'>
                <h2 className='text-3xl font-bold text-white bg-black bg-opacity-30 px-5 py-3 rounded-l transition-all duration-300 group-hover:bg-opacity-0 group-hover:text-opacity-50 select-none'>{title}</h2>
            </div> */}
=======
>>>>>>> Stashed changes:app/components/image_card.tsx
        </div >
    )
}

export default ImageCard
