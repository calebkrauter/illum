import React from 'react'

interface descriptionCardProps {
    title: string,
    text: string,
    className?: string,
}

const DescriptionCard: React.FC<descriptionCardProps> = ({ title, text, className }) => {
    return (
        <div className={`min-h-full max-h-full border rounded-lg shadow-md z-20 ${className}`}  >
            <h1 className={`text-xl font-bold ${className}`}>{title}</h1>
            <p className={`${className}`}>{text}</p>
        </div >
    )
}

export default DescriptionCard