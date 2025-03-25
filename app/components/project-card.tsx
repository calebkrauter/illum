import { motion } from 'framer-motion';
import { Tag } from 'rsuite';
import Image from 'next/image';

function ProjectCard() {
    return (
        <a href='https://www.linkedin.com/in/calebkrauter/' target='_blank' rel='noopener noreferrer' className='pl-6'>
            <motion.div
                className='group mt-[25px] w-full h-full hover:bg-white/5 rounded-lg flex hover:shadow-[0px_0px_3px_.5px_rgba(255,255,255,.1)]'
                initial={{ x: '100%' }}
                whileInView={{ x: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}

            >
                <div className='m-[15px] '>

                    <h4 className='group-hover:text-white w-[150px] text-sm font-semibold text-gray-200'>
                        2024 Jan - Mar
                    </h4>
                </div>
                <div className='m-[15px] flex-col relative'>

                    <h4 className='group-hover:text-white mb-[15px] text-md font-semibold text-gray-200'>
                        Portfolio Web App
                        <div className='absolute inline'>
                            <button className='ml-[15px] mt-[1px] opacity-35 group-hover:opacity-85 transition-transform duration-300 group-hover:translate-x-[5px] group-hover:translate-y-[-5px]' >
                                <Image src='/link-arrow.svg' alt='icon' width={24} height={24}></Image>
                            </button>

                        </div>

                    </h4>
                    <h4 className='group-hover:text-white leading-6 text-sm text-gray-400 font-semibold'>
                        A site to display my epic projects.
                    </h4>
                    <Tag className='group-hover:opacity-100 mt-[15px] opacity-75' color='violet'>
                        <h4 className='text-sm text-gray-300 font-semibold'>
                            Next.js
                        </h4>
                    </Tag>
                    <Tag className='group-hover:opacity-100 mt-[15px] opacity-75' color='violet'>
                        <h4 className='text-sm text-gray-300 font-semibold'>
                            Typescript
                        </h4>
                    </Tag>
                    <Tag className='group-hover:opacity-100 mt-[15px] opacity-75' color='violet'>
                        <h4 className='text-sm text-gray-300 font-semibold'>
                            TailWind
                        </h4>
                    </Tag>

                </div>

            </motion.div>
        </a>
    )
}

export default ProjectCard