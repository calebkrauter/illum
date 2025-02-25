import React from 'react'

interface listCardProps {
    title: string,
    text: string,
    className?: string,
    delimiter?: string,
}

const ListCard: React.FC<listCardProps> = ({ title, text, className, delimiter = ' ' }) => {
    const listEntry = text.split(delimiter).filter(entry => entry !== '').map((entry, index) => (
        <li key={index} className=''>{entry}</li>
    ))

    return (
        <div className={`p-5 min-h-full max-h-full border rounded-lg shadow-md z-20 ${className}`}  >
            <h1 className={`text-xl font-bold ${className}`}>{title}</h1>
            <div className={`pl-5 ${className}`}>{listEntry}</div>
        </div >
    )
}

export default ListCard