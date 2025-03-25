import React from 'react';
import TextCard from './text_card';
import ListCard from './list_card';
import ImageCard from './image_card';
import cardContent from '../card_content';
import OutsideClickHandler from 'react-outside-click-handler';

interface ModalProps {
    isOpen: boolean,
    onClose: () => void,
    children?: React.ReactNode,
    className?: string,
    setIsOpen: (isOpen: boolean) => void,

}

function Modal({ isOpen, onClose, children, className, setIsOpen }: ModalProps) {
    return (
        <OutsideClickHandler onOutsideClick={() => {
            setIsOpen(false)
        }}>
            <div className={`grid grid-cols-[70%_30%] grid-rows-[40%_60%] borderborder-gray-500 fixed inset-0 items-center justify-center z-10 ${className} ${isOpen ? 'bg-opacity-100' : 'bg-opacity-0'}`}>
                <ImageCard className={`bg-gray-700 rounded ${isOpen ? 'bg-opacity-100 opacity-100' : 'opacity-0 bg-opacity-0 border-transparent text-transparent'}`} title={cardContent.projects[0].content.image.title} path={cardContent.projects[0].content.image.path} xPosition='50' yPosition='42'></ImageCard>
                <ListCard className={`bg-gray-700 ${isOpen ? 'bg-opacity-100' : 'bg-opacity-0 border-transparent text-transparent'}`} title={cardContent.projects[0].content.summary.title} text={cardContent.projects[0].content.summary.text} delimiter='*'></ListCard>
                <TextCard className={`bg-gray-700 ${isOpen ? 'bg-opacity-100' : 'bg-opacity-0 border-transparent text-transparent'}`} title={cardContent.projects[0].content.description.title} text={cardContent.projects[0].content.description.text}></TextCard>
                <ListCard className={`bg-gray-700 ${isOpen ? 'bg-opacity-100' : 'bg-opacity-0 border-transparent text-transparent'}`} title={cardContent.projects[0].content.stack.title} text={cardContent.projects[0].content.stack.text} delimiter='*'></ListCard>
            </div>
            {/* )
            } */}


        </OutsideClickHandler>


    );
};

export default Modal;
