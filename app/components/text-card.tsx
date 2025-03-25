import React from 'react'

interface TextCardProps {
    title: string,
    text: string,
    className?: string,
}

function TextCard({ title, text, className }: TextCardProps) {
    return (
        <div className={`p-5 min-h-full max-h-full border rounded-lg shadow-md z-20 ${className}`}  >
            <h1 className={`text-xl font-bold p-2 ${className}`}>{title}</h1>
            <p className={`p-2 ${className}`}>{text}</p>
        </div >
    )
}

export default TextCard