import React from 'react';
import DescriptionCard from './description_card';

interface ModalProps {
    isOpen: boolean,
    onClose: () => void,
    children?: React.ReactNode,
    className?: string,
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, className }) => {
    if (!isOpen) return null;

    return (
        <div className={`fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-10 ${className}`}>
            // TODO position and setup the description card. Then add the other 3 card components. Upon setting up each of the four components, consolidate them to the layout component.
            <DescriptionCard className='bg-gray-700' title='Title' text='description'></DescriptionCard>

        </div>

    );
};

export default Modal;
