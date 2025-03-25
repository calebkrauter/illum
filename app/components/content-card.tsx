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
function ContentCard({ type = ContentCardType.Text, title, text, className, delimiter = ' ', path, xPosition = '50', yPosition = '50' }: ContentCardProps) {
    let listEntry: React.ReactNode[] = []
    if (type === ContentCardType.Generic || type === ContentCardType.List) {
        listEntry = text.split(delimiter).filter(entry => entry !== '').map((entry, index) => (
            <li key={index} className=''>{entry}</li>
        ))
    }
    return (
        <div className={`w-full h-full relative p-5 min-h-full max-h-full border rounded-lg shadow-md z-20 ${className}`}>
            <Image className={`${type === ContentCardType.Image || type === ContentCardType.Generic ? 'opacity-100' : 'opacity-0'}`} src={path} alt='Project Thumbnail (Small)' layout='fill' objectFit='cover' objectPosition={`${xPosition}% ${yPosition}%`}></Image>
            <div className='absolute inset-0 flex items-center justify-center'>

                <h1 className={`text-xl font-bold p-2 ${className}`}>{title}</h1>
                <p className={`p-2 ${className}`}>                    {(type === ContentCardType.Image || type === ContentCardType.Generic) ? listEntry : text}</p>

            </div>
        </div >
    )
}


export default ContentCard