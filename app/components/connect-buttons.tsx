'use client'
import Image from 'next/image';

function ConnectButtons() {

    return (
        <div className="flex flex-row gap-5 items-center h-full ml-[75px]">
            <a href='https://github.com/calebkrauter' target='_blank' rel='noopener noreferrer' className=''>
              <button className='opacity-35 hover:opacity-50' >
                <Image src='/github-mark-white.png' alt='icon' width={24} height={24}></Image>
              </button>
            </a>
            <a href='https://www.linkedin.com/in/calebkrauter/' target='_blank' rel='noopener noreferrer' className=''>
              <button className='opacity-35 hover:opacity-50' >
                <Image src='/ln-white-26.png' alt='icon' width={24} height={24}></Image>
              </button>
            </a>
          </div>
    )
}

export default ConnectButtons