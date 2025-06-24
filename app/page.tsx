"use client";
import Image from "next/image";
import React, { RefObject, useRef } from "react";
import "rsuite/dist/rsuite-no-reset.min.css";
import "react-vertical-timeline-component/style.min.css";
import { motion, useScroll } from "framer-motion";
import { Link, Element } from "react-scroll";
import ProjectCard from "./components/project-card";
import { useEffect, useState } from "react";
import useScrollSpy from "react-use-scrollspy";
import ConnectButtons from "./components/connect-buttons";
import { Pivot as Hamburger } from "hamburger-react";

export default function Home() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const { scrollY } = useScroll();
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const [loaded, setLoaded] = useState(false);

  const sectionRefs = [
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
  ] as React.RefObject<HTMLElement>[];

  const activeSection = useScrollSpy({
    sectionElementRefs: sectionRefs,
    offsetPx: -120,
  });

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (y) => {
      setHasScrolled(y > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <div>
      <nav
        className={`fixed left-0 top-0 bg-gray-800 w-full h-[50px] bg-white/10 backdrop-blur-sm duration-400 z-50 opacity-90 rounded-b-lg duration-500 ease-in-out ${
          loaded ? "opacity-100" : "opacity-0"
        }`}>
        <div className="flex flex-row h-full">
          <div className="sm:ml-[75px]vblock sm:hidden">
            <Hamburger toggled={isMenuOpen} toggle={setMenuOpen} />
          </div>
          <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 sm:translate-x-0 sm:left-auto sm:ml-[75px] items-center">
            <h1 className="sm:text-2xl text-xl font-bold text-gray-300 z-50">
              CALEB KRAUTER
            </h1>
          </div>
          <div className="fixed right-0 top-0 h-[50px] sm:mr-[75px] mr-[15px]">
            <div className="flex flex-row gap-5 items-center h-full ml-[75px]">
              <a
                href="https://github.com/calebkrauter"
                target="_blank"
                rel="noopener noreferrer"
                className="">
                <button className="opacity-35 hover:opacity-50">
                  <Image
                    src="/github-mark-white.png"
                    alt="icon"
                    width={24}
                    height={24}></Image>
                </button>
              </a>
              <a
                href="https://www.linkedin.com/in/calebkrauter/"
                target="_blank"
                rel="noopener noreferrer"
                className="">
                <button className="opacity-35 hover:opacity-50">
                  <Image
                    src="/ln-white-26.png"
                    alt="icon"
                    width={24}
                    height={24}></Image>
                </button>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div>
        <main className="flex justify-center overflow-hidden">
          {/* <div className='sm:fixed sm:top-0 sm:left-0 mt-[100px] sm:w-[400px] w-full sm:h-screen h-[300px] ml-[100px]'>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: .3 }}
            >
              <div>

                <h2 className='mt-[15px] text-xl text-gray-400'>
                  Software Developer
                </h2>
                <h3 className='mt-[15px] text-gray-500 w-[200px]'>
                  An elegant text describing something cool that I do.
                </h3>
              </div>
              <span className={activeSection === 0 ? "App-navigation-item App-navigation-item--active" : "App-navigation-item group"}>
                <Link to={'about'} smooth={true} duration={300} offset={-50}>
                  <div className='group mt-[50px] text-center w-[100px]'>
                    <h4 className={`leading-7 text-gray-400 group-hover:text-white ${activeSection === 0 ? 'text-white' : ''}`}>
                      About
                    </h4>
                    <hr className={`border-t-1 my-1 opacity-40 w-[100px] ${activeSection === 0 ? 'border-white' : 'border-gray-400'}`} />
                  </div>
                </Link>
              </span>

              <span className={activeSection === 1 ? "App-navigation-item App-navigation-item--active" : "App-navigation-item group"}>
                <Link to={'projects'} smooth={true} duration={300} offset={-50}>
                  <div className='group mt-[15px] text-center w-[100px]'>
                    <h4 className={`leading-7 text-gray-400 group-hover:text-white ${activeSection === 1 ? 'text-white' : ''}`}>
                      Projects
                    </h4>
                    <hr className={`border-t-1 my-1 opacity-40 w-[100px] ${activeSection === 1 ? 'border-white' : 'border-gray-400'}`} />
                  </div>
                </Link>
              </span>
              <span className={activeSection === 2 ? "App-navigation-item App-navigation-item--active" : "App-navigation-item group"}>
                <Link to={'experience'} smooth={true} duration={300} offset={-50}>
                  <div className='group mt-[15px] text-center w-[100px]'>
                    <h4 className={`leading-7 text-gray-400 group-hover:text-white ${activeSection === 2 ? 'text-white' : ''}`}>
                      Experience
                    </h4>
                    <hr className={`border-t-1 my-1 opacity-40 w-[100px] ${activeSection === 2 ? 'border-white' : 'border-gray-400'}`} />
                  </div>
                </Link>
              </span>
            </motion.div>

          </div> */}

          <motion.div
            className="items-center sm:top-0 sm:right-0 mt-[5dvh] mx-[15px] sm:mx-[50px] sm:max-w-[70dvw] max-w-[100dvw] min-w-[200px]"
            initial={{ x: "100%" }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 250, damping: 20 }}>
            <div className="overflow-hidden">
              <section className="App-section" ref={sectionRefs[0]}>
                <Element name={"about"}>
                  <div className="group flex flex-col mt-[50px] mx-auto">
                    <div className="flex xl:flex-row flex-col gap-[50px] md:items-center">
                      <div>
                        <h4
                          className={`leading-7 text-white duration-500 ease-in-out ${
                            loaded ? "opacity-100" : "opacity-0"
                          }`}>
                          My name is Caleb. I'm a Software Developer and
                          part-time barista.{<br />}
                          {<br />}
                          When I'm not at home writing code or at work making
                          coffee, you can often find me spending time with
                          family and friends building relationships where it
                          matters most. I am a Software Developer with
                          professional IT Help Desk experience. Soon after
                          graduating I was given an opportunity at an internship
                          where I now develop dynamic React Components with a
                          great team and a solid mission. I've contributed to
                          several projects using JS, TS, React, Java, C, Python,
                          Erlang among other technologies. I am grateful to the
                          friends who supported me in my college journey and who
                          still support me today.
                        </h4>
                      </div>
                      <div className="relative h-[400px] w-[400px] overflow-hidden rounded-md flex-shrink-0">
                        <Image
                          src={"/1.png"}
                          onLoadingComplete={() => {
                            setLoaded(true);
                          }}
                          width={400}
                          height={400}
                          alt={"Image of Caleb Krauter"}
                          className={`translate-y-[-100px] duration-500 ease-in-out ${
                            loaded ? "opacity-100" : "opacity-0"
                          }`}></Image>
                      </div>
                    </div>
                  </div>
                  <section className="App-section" ref={sectionRefs[2]}>
                    <Element
                      className={`mt-[50px] duration-500 ease-in-out ${
                        loaded ? "opacity-100" : "opacity-0"
                      }`}
                      name="experience">
                      <h4
                        className={`text-[20px] ${
                          activeSection === 2
                            ? "text-gray-200"
                            : "text-gray-400"
                        }`}>
                        Experience
                      </h4>
                      <hr
                        className={`mt-[15px] ${
                          activeSection === 2
                            ? "border-gray-200"
                            : "border-gray-400"
                        } `}></hr>
                    </Element>
                  </section>
                </Element>
              </section>
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />

              <section className="App-section" ref={sectionRefs[1]}>
                <Element
                  className={`mt-[50px] duration-500 ease-in-out ${
                    loaded ? "opacity-100" : "opacity-0"
                  }`}
                  name="projects">
                  <h4
                    className={`text-[20px] ${
                      activeSection === 1 ? "text-gray-200" : "text-gray-400"
                    }`}>
                    Projects
                  </h4>
                  <hr
                    className={`mt-[15px] ${
                      activeSection === 1
                        ? "border-gray-200"
                        : "border-gray-400"
                    } `}></hr>
                </Element>
              </section>

              <ProjectCard />
              <ProjectCard />
              <ProjectCard />

              <div className="mt-[150px]"></div>
            </div>
          </motion.div>
        </main>
      </div>
      <footer
        className={`sm:fixed relative left-0 bottom-0 mb-[50px] duration-500 ease-in-out ${
          loaded ? "opacity-100" : "opacity-0"
        }`}>
        <ConnectButtons />
      </footer>
    </div>
  );
}
