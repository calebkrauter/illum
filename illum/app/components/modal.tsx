import React from 'react';
import DescriptionCard from './description_card';

interface ModalProps {
    isOpen: boolean,
    onClose: () => void,
    children?: React.ReactNode,
    className?: string,
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, className }) => {
    let descriptionOpacity0: string
    let descriptionOpacity100: string
    descriptionOpacity100 = 'bg-opacity-100'
    descriptionOpacity0 = 'bg-opacity-0 border-transparent text-transparent'

    // TODO Add the other 3 card components. Upon setting up each of the four components, consolidate them to the layout component.
    // Ideally, the layout component will have props where you can pass in the four components that you want in it as props.
    return (


        <div className={`grid grid-cols-[60%_40%] grid-rows-[25%_75%] borderborder-gray-500 fixed inset-0 items-center justify-center z-10 ${className} ${isOpen ? 'bg-opacity-100' : 'bg-opacity-0'}`}>

            {/* TODO Use this format with colors as a good debug mode for the layout component. */}
            {/* <div className="bg-blue-500 p-4 outline outline-2 outline-blue-500 h-full">Item 1</div>
            <div className="bg-green-500 p-4 outline outline-2 outline-green-500 h-full">Item 2</div>
            <div className="bg-red-500 p-4 outline outline-2 outline-red-500 h-full">Item 3</div>
            <div className="bg-yellow-500 p-4 outline outline-2 outline-yellow-500 h-full">Item 4</div> */}


            <DescriptionCard className={`bg-gray-700 ${isOpen ? 'bg-opacity-100' : 'bg-opacity-0 border-transparent text-transparent'}`} title='Title' text='description'></DescriptionCard>
            <DescriptionCard className={`bg-gray-700 ${isOpen ? 'bg-opacity-100' : 'bg-opacity-0 border-transparent text-transparent'}`} title='Title' text='description'></DescriptionCard>
            <DescriptionCard className={`bg-gray-700 ${isOpen ? 'bg-opacity-100' : 'bg-opacity-0 border-transparent text-transparent'}`} title='Title' text='description'></DescriptionCard>
            <DescriptionCard className={`bg-gray-700 ${isOpen ? 'bg-opacity-100' : 'bg-opacity-0 border-transparent text-transparent'}`} title='Title' text='description'></DescriptionCard>
        </div >

    );
};

export default Modal;
