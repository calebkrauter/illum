'use client'
import Image from 'next/image';
import React, { RefObject, useRef } from 'react';
import 'rsuite/dist/rsuite-no-reset.min.css';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';
import { Link, Element } from 'react-scroll';
import ProjectCard from './components/project-card';

import useScrollSpy from 'react-use-scrollspy';
export default function Home() {

const sectionRefs = [
  useRef<HTMLElement>(null),
  useRef<HTMLElement>(null),
  useRef<HTMLElement>(null),
] as React.RefObject<HTMLElement>[];


  const activeSection = useScrollSpy({
    sectionElementRefs: sectionRefs,
    offsetPx: -120,
  });
  return (
    <div>
      <div className='grid place-items-center pt-10n'>
        <div className='ml-auto mr-[50px]'>
        </div>




        <main className='flex w-screen h-screen'>

          <div className='fixed top-0 left-0 mt-[100px] w-1/3 h-screen ml-[100px]'>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: .3 }}
            >
              <div className='relative group p-3'>

                <h1 className='text-4xl xfont-bold text-gray-300'>
                  CALEB KRAUTER
                </h1>
                <h2 className='mt-[15px] text-xl text-gray-400'>
                  Software Developer
                </h2>
                <h3 className='mt-[15px] text-gray-500 w-[200px]'>
                  An elegant text describing something cool that I do.
                </h3>
              </div>
              <span className={activeSection === 0 ? "App-navigation-item App-navigation-item--active" : "App-navigation-item group"}>
                <Link to={'about'} smooth={true} duration={300} offset={-50}>
                  <div className='group ml-[15px] mt-[50px] text-center w-[100px]'>
                    <h4 className={`leading-7 text-gray-400 group-hover:text-white ${activeSection === 0 ? 'text-white' : ''}`}>
                      About
                    </h4>
                    <hr className={`border-t-1 my-1 opacity-40 w-[100px] ${activeSection === 0 ? 'border-white' : 'border-gray-400'}`} />
                  </div>
                </Link>
              </span>

              <span className={activeSection === 1 ? "App-navigation-item App-navigation-item--active" : "App-navigation-item group"}>
                <Link to={'projects'} smooth={true} duration={300} offset={-50}>
                  <div className='group ml-[15px] mt-[15px] text-center w-[100px]'>
                    <h4 className={`leading-7 text-gray-400 group-hover:text-white ${activeSection === 1 ? 'text-white' : ''}`}>
                      Projects
                    </h4>
                    <hr className={`border-t-1 my-1 opacity-40 w-[100px] ${activeSection === 1 ? 'border-white' : 'border-gray-400'}`} />
                  </div>
                </Link>
              </span>
              <span className={activeSection === 2 ? "App-navigation-item App-navigation-item--active" : "App-navigation-item group"}>
                <Link to={'experience'} smooth={true} duration={300} offset={-50}>
                  <div className='group ml-[15px] mt-[15px] text-center w-[100px]'>
                    <h4 className={`leading-7 text-gray-400 group-hover:text-white ${activeSection === 2 ? 'text-white' : ''}`}>
                      Experience
                    </h4>
                    <hr className={`border-t-1 my-1 opacity-40 w-[100px] ${activeSection === 2 ? 'border-white' : 'border-gray-400'}`} />
                  </div>
                </Link>
              </span>
              <div className='fixed bottom-10'>
                <a href='https://github.com/calebkrauter' target='_blank' rel='noopener noreferrer' className='pl-6'>
                  <button className='opacity-35 hover:opacity-50' >
                    <Image src='/github-mark-white.png' alt='icon' width={24} height={24}></Image>
                  </button>
                </a>
                <a href='https://www.linkedin.com/in/calebkrauter/' target='_blank' rel='noopener noreferrer' className='pl-6'>
                  <button className='opacity-35 hover:opacity-50' >
                    <Image src='/ln-white-26.png' alt='icon' width={24} height={24}></Image>
                  </button>
                </a>
              </div>
            </motion.div>

          </div>



          <motion.div className='absolute top-0 right-0 mt-[100px] pl-[50px] w-2/3'
            initial={{ x: '100%' }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 250, damping: 20 }}
          >
            <div className='mr-[100px]'>
              <section className="App-section" ref={sectionRefs[0]}>


                <Element name={'about'} >

                  <div className='group flex'>

                    <h4 className='ml-[15px] leading-7 text-white'>

                      I’m a developer with experience in software engineering, cloud deployment, and game development. I enjoy tackling complex problems through collaboration and hands-on experimentation, whether it’s optimizing a backend service, designing a game system, or deploying full-stack applications in the cloud. <br /> <br />

                      I recently earned my BS in Computer Science and Systems from the University of Washington, Tacoma. My work includes developing REST APIs, managing cloud-hosted MySQL databases, and building interactive web experiences with Vue.js and Node.js. I’ve also deployed applications using Docker and AWS services like ECS and RDS. <br /> <br />

                    </h4>
                  </div>
                </Element>
              </section>
              <section className="App-section" ref={sectionRefs[1]}>

                <Element className='mt-[50px]' name='projects'>
                  <h4 className={`text-[20px] ${activeSection === 1 ? 'text-gray-200' : 'text-gray-400'}`}>
                    Projects
                  </h4>
                  <hr className={`mt-[15px] ${activeSection === 1 ? 'border-gray-200' : 'border-gray-400'} `}></hr>
                </Element>
              </section>


              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <section className="App-section" ref={sectionRefs[2]}>

                <Element className='mt-[50px]' name='experience'>
                  <h4 className={`text-[20px] ${activeSection === 2 ? 'text-gray-200' : 'text-gray-400'}`}>
                    Experience
                  </h4>
                  <hr className={`mt-[15px] ${activeSection === 2 ? 'border-gray-200' : 'border-gray-400'} `}></hr>
                </Element>
              </section>

              <ProjectCard />
              <ProjectCard />
              <ProjectCard />

              <div className='mt-[150px]'>

              </div>
            </div>
          </motion.div>
        </main >


      </div >


    </div >
  );
}
