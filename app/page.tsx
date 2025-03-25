'use client'
import Image from 'next/image';
import StageCard from './components/stage_card';
import React, { useState } from 'react';
import { Button } from 'rsuite';
import { Timeline } from 'rsuite';
import 'rsuite/dist/rsuite-no-reset.min.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TimelineItem from 'rsuite/esm/Timeline/TimelineItem';



export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className='grid place-items-center pt-10'>
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

      <main className='pt-10 grid grid-cols-12 w-screen h-screen overflow-y-auto'>
        <div className='group' style={{ display: 'contents' }}>
          <div className="ml-12 col-start-2 w-1 h-[400px] bg-slate-100 relative">
            <div className="w-8 h-8 bg-gray-400 rounded-full absolute -translate-x-1/2 -translate-y-1/2 top-1/2 group-hover:w-12 group-hover:h-12 transition-all duration-300 ease-in-out pointer-events-none flex items-center">
              <p className='ml-16 whitespace-nowrap'>December 23</p>
            </div>

          </div>
          <div className='col-start-4 col-span-6 h-[400px] flex justify-center'>

            <StageCard title='Project 1' thumbnail='/demo.webp' width={100} height={100}></StageCard>

          </div>
        </div>
        <div className='group' style={{ display: 'contents' }}>
          {/* I don't like hard coding the size values here. I want it to be dynamic so that the line changes with height of stage card and they both change with site size perhaps resolution and screen size. */}
          <div className="ml-12 col-start-2 w-1 h-[400px] bg-slate-100 relative">
            <div className="w-8 h-8 bg-gray-400 rounded-full absolute -translate-x-1/2 -translate-y-1/2 top-1/2 group-hover:w-12 group-hover:h-12 transition-all duration-300 ease-in-out pointer-events-none flex items-center">
              <p className='ml-16 whitespace-nowrap'>December 23</p>
            </div>

          </div>
          <div className='col-start-4 col-span-6 h-[400px] flex justify-center'>

            <StageCard title='Project 1' thumbnail='/demo.webp' width={90} height={80}></StageCard>

          </div>
        </div>
        <div className='group' style={{ display: 'contents' }}>
          {/* I don't like hard coding the size values here. I want it to be dynamic so that the line changes with height of stage card and they both change with site size perhaps resolution and screen size. */}
          <div className="ml-12 col-start-2 w-1 h-[400px] bg-slate-100 relative">
            <div className="w-8 h-8 bg-gray-400 rounded-full absolute -translate-x-1/2 -translate-y-1/2 top-1/2 group-hover:w-12 group-hover:h-12 transition-all duration-300 ease-in-out pointer-events-none flex items-center">
              <p className='ml-16 whitespace-nowrap'>December 23</p>
            </div>

          </div>
          <div className='col-start-4 col-span-6 h-[400px] flex justify-center'>

            <StageCard title='Project 1' thumbnail='/demo.webp' width={100} height={100}></StageCard>

          </div>
        </div>
      </main >

      <footer className='pt-10'></footer>

    </div >
  );
}
