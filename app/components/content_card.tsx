import React from 'react';
import Image from 'next/image';

interface ContentCardProps {
    type?: ContentCardType,
    title: string,
    text: string,
    className?: string,
    delimiter?: string,
    path?: string,
    xPosition?: string,
    yPosition?: string,
}

enum ContentCardType {
    Image = 'image',
    Text = 'text',
    List = 'list',
    Generic = 'generic',
}
function ContentCard({ type = ContentCardType.TEXT, title, text, className, delimiter = ' ', path, xPosition = '50', yPosition = '50' }: ContentCardProps) {
    let listEntry: React.ReactNode[] = []
    if (type === ContentCardType.GENERIC || type === ContentCardType.LIST) {
        listEntry = text.split(delimiter).filter(entry => entry !== '').map((entry, index) => (
            <li key={index} className=''>{entry}</li>
        ))
    }
    return (
        <div className={`w-full h-full relative p-5 min-h-full max-h-full border rounded-lg shadow-md z-20 ${className}`}>
            <Image className={`${type === ContentCardType.IMAGE || type === ContentCardType.GENERIC ? 'opacity-100' : 'opacity-0'}`} src={path} alt='Project Thumbnail (Small)' layout='fill' objectFit='cover' objectPosition={`${xPosition}% ${yPosition}%`}></Image>
            <div className='absolute inset-0 flex items-center justify-center'>

                <h1 className={`text-xl font-bold p-2 ${className}`}>{title}</h1>
                <p className={`p-2 ${className}`}>                    {(type === ContentCardType.IMAGE || type === contentCardType.GENERIC) ? listEntry : text}</p>

            </div>
        </div >
    )
}


export default ContentCard