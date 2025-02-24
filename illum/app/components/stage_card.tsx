import Image from 'next/image';
import { useState } from 'react';
import DescriptionCard from './description_card';
import Modal from './modal';

interface card_props {
    title: string
    thumbnail?: string,
    width?: number,
    height?: number,
}
// TODO make this card dynamic so that the size can be passed in optionally with a default otherwise used.
// TODO Make the Title appear centered on the image without a banner. 
// TODO Adjust sizing. 
// TODO Make card clickable and transform as a modal.


const stage_card: React.FC<card_props> = ({ title, thumbnail, width = 60, height = 60 }) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen);

    }

    return (
        <div className='col-span-5 col-start-2 place-self-center shadow-md overflow-hidden] transform hover:scale-110 transition-transform duration-300 group'
            style={{ width: `${width}%`, height: `${height}%` }}
            onClick={handleClick}
        >

            {thumbnail && (
                <div className='w-full h-full relative'>

                    <Modal className='rounded-l transition-all duration-300 group-hover:rounded-xl' isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    </Modal>
                    <Image className='rounded-l transition-all duration-300 group-hover:rounded-xl' src={thumbnail} alt={title} layout='fill' objectFit='cover' />
                    <div className='absolute inset-0 flex items-center justify-center'>
                        <h2 className='text-3xl font-bold text-white bg-black bg-opacity-30 px-5 py-3 rounded-l transition-all duration-300 group-hover:bg-opacity-0 group-hover:text-opacity-50 select-none'>{title}</h2>
                    </div>
                </div>
            )}

        </div>
    )
}

export default stage_card