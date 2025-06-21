'use client'
import Image from 'next/image';
import React, { RefObject, useRef } from 'react'
import 'rsuite/dist/rsuite-no-reset.min.css'
import 'react-vertical-timeline-component/style.min.css'
import { motion, useScroll } from 'framer-motion'
import { Link, Element } from 'react-scroll'
import ProjectCard from './components/project-card'
import { useEffect, useState } from 'react'
import useScrollSpy from 'react-use-scrollspy'
export default function Home() {
  const [ hasScrolled, setHasScrolled ] = useState(false)
  const { scrollY } = useScroll()
  const sectionRefs = [
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
  ] as React.RefObject<HTMLElement>[];


  const activeSection = useScrollSpy({
    sectionElementRefs: sectionRefs,
    offsetPx: -120,
  })


  useEffect(() => {
    const unsubscribe = scrollY.on('change', (y) => {
      setHasScrolled(y > 0)
    })
    return () => unsubscribe()
  }, [scrollY])
  return (
    <div>
        <nav className={`fixed left-0 top-0 bg-gray-800 w-full h-[50px] bg-white/10 backdrop-blur-sm transition-opacity duration-400 z-50
        ${hasScrolled ? 'opacity-80' : 'opacity-30'}`}>
          
        </nav>
      <div>
        <main>
          <div className='sm:fixed sm:top-0 sm:left-0 mt-[100px] sm:w-[400px] w-full sm:h-screen h-[300px] ml-[100px]'>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: .3 }}
            >
              <div>
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
            </motion.div>

          </div>



          <motion.div className='sm:absolute sm:top-0 sm:right-0 mt-[100px] pl-[50px] max-w-[65%] min-w-[500px]'
            initial={{ x: '100%' }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 250, damping: 20 }}
          >
            <div className='mr-[100px] overflow-hidden'>
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

<footer className='fixed left-0 bottom-0 bg-gray-800 w-full h-[50px] bg-white/10 backdrop-blur-sm'>
                <div className="flex items-center h-full ml-[100px]">
                  <a href='https://github.com/calebkrauter' target='_blank' rel='noopener noreferrer' className='mr-4'>
                  <button className='opacity-35 hover:opacity-50' >
                    <Image src='/github-mark-white.png' alt='icon' width={24} height={24}></Image>
                  </button>
                </a>
                <a href='https://www.linkedin.com/in/calebkrauter/' target='_blank' rel='noopener noreferrer' className='mr-4'>
                  <button className='opacity-35 hover:opacity-50' >
                    <Image src='/ln-white-26.png' alt='icon' width={24} height={24}></Image>
                  </button>
                </a>
                </div>
              </footer>
    </div >
  );
}
