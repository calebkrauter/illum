import Image from 'next/image';
import StageCard from './components/stage_card';

export default function Home() {
  return (
    <div className='grid place-items-center p-20'>
      <nav className='bg-gray-800 w-[90vw] mx-auto p-4 flex justify-center items-center'>
        <h1 className=' text-5xl font-bold text-white'>
          CALEB KRAUTER
        </h1>
        <a href='https://github.com/calebkrauter' target='_blank' rel='noopener noreferrer' className='pl-6'>
          <button className='bg-gray-800 text-white py-2 px-2 rounded-full hover:bg-red-900' >
            <Image src='/github-mark-white.png' alt='icon' width={24} height={24}></Image>
          </button>
        </a>
        <a href='https://www.linkedin.com/in/calebkrauter/' target='_blank' rel='noopener noreferrer' className='pl-6'>
          <button className='bg-gray-800 text-white py-2 px-2 rounded-full hover:bg-red-900' >
            <Image src='/In-White-26.png' alt='icon' width={24} height={24}></Image>
          </button>
        </a>
      </nav>
      <main className='grid grid-cols-7 w-screen h-screen'>
        <StageCard title='Project 1' thumbnail='/demo.webp'></StageCard>
      </main>
    </div>
  );
}
