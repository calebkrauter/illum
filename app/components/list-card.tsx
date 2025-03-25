import React from 'react'

interface ListCardProps {
    title: string,
    text: string,
    className?: string,
    delimiter?: string,
}

function ListCard({ title, text, className, delimiter = ' ' }: ListCardProps) {
    const listEntry = text.split(delimiter).filter(entry => entry !== '').map((entry, index) => (
        <li key={index} className='' style={{ fontSize: "clamp(.5rem, 1rem, 1.25rem)" }}>{entry}</li>
    ))

    return (
        <div className={`p-2 h-full border rounded-lg shadow-md z-20 ${className}`}>
            <h1 className={`text-xl font-bold p-2 ${className}`}>{title}</h1>
            <ul className={`text-lg pl-5 list-disc ${className}`}
            >{listEntry}
            </ul>
        </div >
    )
}

export default ListCard