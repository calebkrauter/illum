import React from 'react';
import TextCard from './text_card';
import ListCard from './list_card';
// import { useConfiguredGlobalCardContent } from '../util';
import cardContent from '../card_content';
import OutsideClickHandler from 'react-outside-click-handler';

interface ModalProps {
    isOpen: boolean,
    onClose: () => void,
    children?: React.ReactNode,
    className?: string,
    setIsOpen: (isOpen: boolean) => void,

}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, className, setIsOpen }) => {
    let descriptionOpacity0: string
    let descriptionOpacity100: string
    descriptionOpacity100 = 'bg-opacity-100'
    descriptionOpacity0 = 'bg-opacity-0 border-transparent text-transparent'
    // const globalCardContent = useConfiguredGlobalCardContent()

    // console.log(globalCardContent); // Check the structure here
    // TODO Add the other 3 card components. Upon setting up each of the four components, consolidate them to the layout component.
    // Ideally, the layout component will have props where you can pass in the four components that you want in it as props.
    return (
        <OutsideClickHandler onOutsideClick={() => {
            setIsOpen(false)
        }}>

            {/* TODO Use this format with colors as a good debug mode for the layout component. */}
            {/* <div className="bg-blue-500 p-4 outline outline-2 outline-blue-500 h-full">Item 1</div>
<div className="bg-green-500 p-4 outline outline-2 outline-green-500 h-full">Item 2</div>
<div className="bg-red-500 p-4 outline outline-2 outline-red-500 h-full">Item 3</div>
<div className="bg-yellow-500 p-4 outline outline-2 outline-yellow-500 h-full">Item 4</div> */}
            {/* FOR testing... */}
            {/* {
                globalCardContent.projects.length > 0 && ( */}
            <div className={`grid grid-cols-[70%_30%] grid-rows-[30%_70%] borderborder-gray-500 fixed inset-0 items-center justify-center z-10 ${className} ${isOpen ? 'bg-opacity-100' : 'bg-opacity-0'}`}>
                <TextCard className={`bg-gray-700 ${isOpen ? 'bg-opacity-100' : 'bg-opacity-0 border-transparent text-transparent'}`} title={cardContent.projects[0].content.image.title} text={cardContent.projects[0].content.image.path}></TextCard>
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
