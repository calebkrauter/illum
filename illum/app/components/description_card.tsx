import React from 'react'

interface descriptionCardProps {
    title: string,
    text: string,
    className?: string,
}

const DescriptionCard: React.FC<descriptionCardProps> = ({ title, text, className }) => {
    return (
        <div className={`p-4 border rounded-lg shadow-md z-20 ${className}`}  >
            <h1 className="text-xl font-bold">{title}</h1>
            <p>{text}</p>
        </div >
    )
}

export default DescriptionCard