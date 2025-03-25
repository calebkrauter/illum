import React from 'react';
import TextCard from './text_card';
import ListCard from './list_card';
import ImageCard from './image_card';
import cardContent from '../card_content';
import OutsideClickHandler from 'react-outside-click-handler';

interface StageLayoutProps {
    isOpen: boolean,
    onClose: () => void,
    children?: React.ReactNode,
    className: string,
    widthCollumn1: string,
    widthCollumn2: string,
    heightRow1: string,
    heightRow2: string,
    classNameOuter?: string,
    setIsOpen: (isOpen: boolean) => void,
    classNameInner?: string,

}

function StageLayout({
    isOpen,
    onClose,
    children,
    className,
    widthCollumn1,
    widthCollumn2,
    heightRow1,
    heightRow2,
    classNameOuter = `${className} 
    grid grid-cols-[60%_40%] grid-rows-[40%_60%] borderborder-gray-500 fixed inset-0 items-center justify-center z-10 
    ${isOpen ? 'bg-opacity-100' : 'bg-opacity-0'} transition-all duration-300 
    ${isOpen ? 'rounded-xl' : 'rounded-l'}`,
    setIsOpen,
    classNameInner = `overflow-auto transition-all duration-150 bg-gray-700 rounded 
    ${isOpen ? 'bg-opacity-100 opacity-100' : 'opacity-0 bg-opacity-0 border-transparent text-transparent'}`,
}: StageLayoutProps) {

    return (
        <OutsideClickHandler onOutsideClick={() => {
            setIsOpen(false)
        }}>
            <div className={`${classNameOuter}`}>
                <ImageCard className={`${classNameInner} bg-opacity-50`} title={cardContent.projects[0].content.image.title} path={cardContent.projects[0].content.image.path} xPosition='50' yPosition='42'></ImageCard>
                <ListCard className={`${classNameInner}`} title={cardContent.projects[0].content.summary.title} text={cardContent.projects[0].content.summary.text} delimiter='*'></ListCard>
                <TextCard className={`${classNameInner}`} title={cardContent.projects[0].content.description.title} text={cardContent.projects[0].content.description.text}></TextCard>
                <ListCard className={`${classNameInner}`} title={cardContent.projects[0].content.stack.title} text={cardContent.projects[0].content.stack.text} delimiter='*'></ListCard>
            </div>


        </OutsideClickHandler>


    );
};

export default StageLayout;
