'use client'
import Image from 'next/image';
import StageCard from './components/stage-card';
import React, { useState } from 'react';
import { Button } from 'rsuite';
import { Timeline } from 'rsuite';
import 'rsuite/dist/rsuite-no-reset.min.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TimelineItem from 'rsuite/esm/Timeline/TimelineItem';
import { Tag } from 'rsuite';
import { useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
export default function Home() {

  const [darkMode, setDarkMode] = useState(true);


  return (
    <div>
      <div className='grid place-items-center pt-10' style={{ backgroundColor: '#070c26' }}>
        <div className='ml-auto mr-[50px]'>
        </div>
        <main className='flex w-screen h-screen mt-[50px]'>
          <div className='w-1/3 h-screen ml-[100px]'>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >

              <h1 className='text-4xl xfont-bold text-gray-300'>
                CALEB KRAUTER
              </h1>
              <h2 className='mt-[15px] text-xl text-gray-400'>
                Software Developer
              </h2>
              <h3 className='mt-[15px] text-gray-500 w-[200px]'>
                An elegant text describing something cool that I do.
              </h3>


              <div className='mt-[100%]'>
                <a href='https://github.com/calebkrauter' target='_blank' rel='noopener noreferrer' className='pl-6'>
                  <button className='opacity-35 hover:opacity-85' >
                    <Image src='/github-mark-white.png' alt='icon' width={24} height={24}></Image>
                  </button>
                </a>
                <a href='https://www.linkedin.com/in/calebkrauter/' target='_blank' rel='noopener noreferrer' className='pl-6'>
                  <button className='opacity-35 hover:opacity-85' >
                    <Image src='/In-White-26.png' alt='icon' width={24} height={24}></Image>
                  </button>
                </a>
              </div>
            </motion.div>

          </div>



          <motion.div className='pl-[85px] w-2/3 h-screen pb-[200px] overflow-y-scroll overflow-x-hidden'
            initial={{ x: '100%' }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 250, damping: 20 }}
          >
            <div className='mr-[100px]'>

              <h4 className='ml-[15px] leading-7 text-gray-400 '>
                I’m a developer with experience in software engineering, cloud deployment, and game development. I enjoy tackling complex problems through collaboration and hands-on experimentation, whether it’s optimizing a backend service, designing a game system, or deploying full-stack applications in the cloud. <br /> <br />

                I recently earned my BS in Computer Science and Systems from the University of Washington, Tacoma. My work includes developing REST APIs, managing cloud-hosted MySQL databases, and building interactive web experiences with Vue.js and Node.js. I’ve also deployed applications using Docker and AWS services like ECS and RDS. <br /> <br />

                Beyond web development, I have a deep interest in game programming, having contributed to multiple projects where I implemented procedural generation, UI systems, and gameplay mechanics. I also enjoy algorithmic problem-solving and have competed in programming competitions like ICPC and the Puget Sound Programming Competition. <br /> <br />

                In the past, I’ve worked in IT support roles, troubleshooting software and hardware issues while documenting processes to streamline technical solutions. I also have leadership experience from my time as a shift supervisor, where I guided teams through fast-paced problem-solving and operational challenges.
              </h4>
              <a href='https://www.linkedin.com/in/calebkrauter/' target='_blank' rel='noopener noreferrer' className='pl-6'>
                <motion.div
                  className='group mt-[25px] w-full h-full hover:bg-white/5 hover:backdrop-blur-2xl rounded-lg flex hover:shadow-2xl hover:shadow-white/10'
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

              <a href='https://www.linkedin.com/in/calebkrauter/' target='_blank' rel='noopener noreferrer' className='pl-6'>
                <motion.div
                  className='group mt-[25px] w-full h-full hover:bg-white/5 hover:backdrop-blur-2xl rounded-lg flex hover:shadow-2xl hover:shadow-white/10'
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

              <a href='https://www.linkedin.com/in/calebkrauter/' target='_blank' rel='noopener noreferrer' className='pl-6'>
                <motion.div
                  className='group mt-[25px] w-full h-full hover:bg-white/5 hover:backdrop-blur-2xl rounded-lg flex hover:shadow-2xl hover:shadow-white/10'
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

              <a href='https://www.linkedin.com/in/calebkrauter/' target='_blank' rel='noopener noreferrer' className='pl-6'>
                <motion.div
                  className='group mt-[25px] w-full h-full hover:bg-white/5 hover:backdrop-blur-2xl rounded-lg flex hover:shadow-2xl hover:shadow-white/10'
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

            </div>
          </motion.div>

        </main >


      </div >

    </div >
  );
}
