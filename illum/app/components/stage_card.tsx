import Image from 'next/image';

interface card_props {
    title: string
    thumbnail?: string
}
// TODO make this card dynamic so that the size can be passed in optionally with a default otherwise used.
// TODO Make the Title appear centered on the image without a banner. 
// TODO Adjust sizing. 
// TODO Make card clickable and transform as a modal.
const stage_card: React.FC<card_props> = ({ title, thumbnail }) => {
    return (
        <div className="col-span-5 col-start-2 place-self-center bg-white rounded-xl shadow-md overflow-hidden w-[50%] h-[35%]">
            {thumbnail && (
                <div className="w-full h-40 relative">
                    <Image src={thumbnail} alt={title} layout="fill" objectFit="cover" />
                </div>
            )}
            <div className="p-4">
                <h2 className="text-xl font-bold">{title}</h2>
            </div>
        </div>
    )
}

export default stage_card