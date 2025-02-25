import { useEffect, useState } from 'react'

interface ImageDetails {
    title: string,
    path: string,
}

interface Details {
    title: string,
    text: string,
}

interface StageLayoutCardContent {
    image: ImageDetails,
    summary: Details,
    description: Details,
    stack: Details,
}

interface StageCardContent {
    projectName: string,
    date: string,
    content: StageLayoutCardContent
}

interface StageCardProjects {
    projects: StageCardContent[]
}

export const useConfiguredGlobalCardContent = () => {
    const [globalCardContent, setGlobalCardContent] = useState<StageCardProjects>({ projects: [] })
    const cardContentJSON = '/card_content.json'

    useEffect(() => {
        (async () => {
            setGlobalCardContent(
                await (await fetch(cardContentJSON)).json())
        })()

    }, [])

    return globalCardContent
}