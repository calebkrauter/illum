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
    name: string,
    date: string,
    content: StageLayoutCardContent,
}


const cardContent: { projects: StageCardContent[] } = {
    projects: [
        {
            name: "Highlighted project",
            date: "2025-02-24",
            content: {
                image: {
                    title: "Project Name Title",
                    path: "/demo.webp"
                },
                summary: {
                    title: "Project Summary",
                    text: "*02-24-2025*Web Development*Portfolio Site",
                },
                description: {
                    title: "Description",
                    text: "This is a modern web app built to showcase a portfolio.",
                },
                stack: {
                    title: "Tech Stack",
                    text: "*React*Next.js*TypeScript*Tailwind*CSS",
                },
            }
        },
        {
            name: "My Second Project",
            date: "2025-02-23",
            content: {
                image: {
                    title: "Project Image",
                    path: "/demo.webp",
                },
                summary: {
                    title: "Project Summary",
                    text: "This project is designed for rapid content delivery and great user experience.",
                },
                description: {
                    title: "Description",
                    text: "This project focuses on building a fast, SEO-friendly web application using Vue and Next."
                },
                stack: {
                    title: "Tech Stack",
                    text: "Vue, Next.js, JavaScript"
                }
            }
        }
    ]
}

export default cardContent
