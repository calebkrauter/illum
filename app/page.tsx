"use client";
import Image from "next/image";
import React, { RefObject, useRef } from "react";
import "rsuite/dist/rsuite-no-reset.min.css";
import "react-vertical-timeline-component/style.min.css";
import { motion, useScroll } from "framer-motion";
import { Link, Element, Button } from "react-scroll";
import ProjectCard from "./components/project-card";
import { useEffect, useState } from "react";
import useScrollSpy from "react-use-scrollspy";
import ConnectButtons from "./components/connect-buttons";
import { Pivot as Hamburger } from "hamburger-react";
import dictionary from "../dictionary.json";

export default function Home() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const { scrollY } = useScroll();
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const [loaded, setLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

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

  console.log(activeSection);
  return (
    <div>
      <nav
        className={`fixed left-0 top-0 w-full h-[50px] bg-white/10 backdrop-blur-sm transition-opacity z-50 duration-500 ease-in-out ${
          loaded ? "backdrop-opacity-90 text-opacity-100" : "opacity-0"
        } ${isMenuOpen ? "rounded-b-0" : "rounded-b-lg"}`}
        style={{ backgroundColor: "rgba(45, 45, 45, 0.60)" }}>
        <div className="flex flex-row h-full">
          <div
            className={`md:ml-[75px] ease-in-out transition-opacity duration-500 md:opacity-0 opacity-60`}>
            <Hamburger toggled={isMenuOpen} toggle={setMenuOpen} />
          </div>
          <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 sm:translate-x-0 sm:left-auto sm:ml-[75px] items-center">
            <h1 className="sm:text-2xl text-xl font-bold text-gray-300 z-50">
              CALEB KRAUTER
            </h1>
          </div>
          <div className="fixed right-0 top-0 h-[50px] sm:mr-[75px] mr-[15px]">
            <div className="flex flex-row gap-5 items-center h-full ml-[75px]">
              <ConnectButtons />
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 top-[50px] backdrop-opacity-90 backdrop-blur-sm bg-white/10 z-50 transition-all duration-300 ease-in-out ${
          isMenuOpen ? "opacity-95 " : "opacity-0 pointer-events-none"
        }`}
        style={{ backgroundColor: "rgba(45, 45, 45, 0.60)" }}>
        <nav className="flex flex-col justify-between">
          <Button
            onClick={() => {
              setMenuOpen(false);
            }}
            to={"about"}
            smooth={true}
            duration={300}
            offset={-50}
            className="h-[15dvh] m-3 bg-white/10 bg-gray-400 bg-opacity-50 rounded-lg">
            About
          </Button>
          <Button
            onClick={() => {
              setMenuOpen(false);
            }}
            to={"experience"}
            smooth={true}
            duration={300}
            offset={-50}
            className="h-[15dvh] m-3 bg-white/10 bg-gray-400 bg-opacity-50 rounded-lg">
            Experience
          </Button>
          <Button
            onClick={() => {
              setMenuOpen(false);
            }}
            to={"projects"}
            smooth={true}
            duration={300}
            offset={-50}
            className="h-[15dvh] m-3 bg-white/10 bg-gray-400 bg-opacity-50 rounded-lg">
            Projects
          </Button>
        </nav>
      </div>

      <div className="z-0">
        <main
          className={`flex justify-center overflow-hidden duration-500 ease-in-out ${
            loaded ? "opacity-90" : "opacity-0"
          }`}>
          <div className="sm:fixed sm:top-0 sm:left-0 sm:w-[400px] sm:h-screen h-[300px] ml-[50px] hidden md:block">
            <div className="flex flex-col absolute top-1/2 -translate-y-1/2 ">
              <Button to={"about"} smooth={true} duration={300} offset={-50}>
                <div className="flex flex-col items-center text-center w-[100px]">
                  <div
                    className={`w-2 opacity-85 h-2 rounded-full leading-7 bg-gray-400 hover:bg-white  ${
                      activeSection === 0
                        ? "bg-white"
                        : "bg-gray-400 hover:bg-white"
                    }`}></div>
                  <div className="w-px h-[75px] bg-gray-400 my-[10px]"></div>
                </div>
              </Button>
              <Button
                to={"experience"}
                smooth={true}
                duration={300}
                offset={-50}>
                <div className="flex flex-col items-center  text-center w-[100px]">
                  <div
                    className={`w-2 opacity-85 h-2 rounded-full leading-7 bg-gray-400 hover:bg-white  ${
                      activeSection === 1
                        ? "bg-white"
                        : "bg-gray-400 hover:bg-white"
                    }`}></div>
                  <div className="w-px h-[75px] bg-gray-400 my-[10px]"></div>
                </div>
              </Button>
              <Button to={"projects"} smooth={true} duration={300} offset={-50}>
                <div className="flex flex-col items-center text-center w-[100px]">
                  <div
                    className={`w-2 opacity-85 h-2 rounded-full leading-7 bg-gray-400 hover:bg-white  ${
                      activeSection === 2
                        ? "bg-white"
                        : "bg-gray-400 hover:bg-white"
                    }`}></div>
                </div>
              </Button>
            </div>
          </div>
          <motion.div
            initial={{ x: "100%" }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 250, damping: 20 }}
            className="items-center sm:top-0 sm:right-0 mt-[5dvh] mx-[15px] sm:mx-[50px] sm:max-w-[70dvw] max-w-[100dvw] min-w-[200px]">
            <div>
              <div className="overflow-hidden">
                <section className="App-section" ref={sectionRefs[0]}>
                  <Element name={"about"}>
                    <div className="group flex flex-col mt-[50px] mx-auto">
                      <div className="flex xl:flex-row flex-col gap-[50px] items-start">
                        <div>
                          <h4
                            className={`leading-7 text-white transition-opacity duration-500 ease-in-out ${
                              loaded ? "opacity-100" : "opacity-0"
                            }`}>
                            My name is Caleb. I'm a Software Developer and
                            part-time barista.{<br />}
                            {<br />}
                            When I'm not at home writing code or at work making
                            coffee, you can often find me spending time with
                            family and friends building relationships that
                            matter most. I am a Software Developer with
                            professional IT Help Desk experience. Soon after
                            graduating I was given an opportunity at an
                            internship where I now develop dynamic React
                            Components with a great team and a solid mission.
                            I've contributed to several projects using
                            JavaScript, TypeScript, React, Java, C, Python,
                            Erlang among other technologies.
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
                            className={`translate-y-[-100px] transition-opacity duration-500 ease-in-out ${
                              loaded ? "opacity-100" : "opacity-0"
                            }`}></Image>
                        </div>
                      </div>
                    </div>
                    <section className="App-section" ref={sectionRefs[1]}>
                      <Element
                        className={`mt-[50px] transition-opacity duration-500 ease-in-out ${
                          loaded ? "opacity-100" : "opacity-0"
                        }`}
                        name="experience">
                        <h4
                          className={`text-[20px] ${
                            activeSection === 1
                              ? "text-gray-200"
                              : "text-gray-400"
                          }`}>
                          Experience
                        </h4>
                      </Element>
                    </section>
                  </Element>
                </section>
                {dictionary.experience.map((experience, index) => (
                  <ProjectCard
                    key={index}
                    title={experience.Title}
                    date={experience.Date}
                    description={experience.Description}
                    tags={experience.TechStack}
                    tagColors={["violet", "orange", "orange"]}
                    company={experience.Company}
                    includeLinkArrow={false}
                  />
                ))}

                <section className="App-section" ref={sectionRefs[2]}>
                  <Element
                    className={`mt-[50px] transition-opacity duration-500 ease-in-out ${
                      loaded ? "opacity-100" : "opacity-0"
                    }`}
                    name="projects">
                    <h4
                      className={`text-[20px] ${
                        activeSection === 2 ? "text-gray-200" : "text-gray-400"
                      }`}>
                      Projects
                    </h4>
                  </Element>
                </section>
                <ProjectCard
                  title={dictionary.project[0].Title}
                  date={dictionary.project[0].Date}
                  description={dictionary.project[0].Description}
                  tags={dictionary.project[0].TechStack}
                  tagColors={[
                    "violet",
                    "orange",
                    "red",
                    "violet",
                    "green",
                    "green",
                    "green",
                  ]}
                  company={dictionary.project[0].ProjectName}
                  url="https://github.com/calebkrauter/keyclash-databases-project"
                />
                <ProjectCard
                  title={dictionary.project[1].Title}
                  date={dictionary.project[1].Date}
                  description={dictionary.project[1].Description}
                  tags={dictionary.project[1].TechStack}
                  tagColors={[
                    "violet",
                    "violet",
                    "violet",
                    "yellow",
                    "green",
                    "green",
                  ]}
                  company={dictionary.project[1].ProjectName}
                  url="https://caleb-krauter.itch.io/the-good-the-bad-and-chad"
                />
                <ProjectCard
                  title={dictionary.project[2].Title}
                  date={dictionary.project[2].Date}
                  description={dictionary.project[2].Description}
                  tags={dictionary.project[2].TechStack}
                  tagColors={[
                    "violet",
                    "violet",
                    "orange",
                    "yellow",
                    "green",
                    "green",
                  ]}
                  company={dictionary.project[2].ProjectName}
                  url="https://caleb-krauter.itch.io/lostpillarsofoop"
                />

                <div className="mt-[150px]"></div>
              </div>
            </div>
          </motion.div>
        </main>
      </div>
      <footer
        className={`md:fixed relative left-0 bottom-0 mb-[50px] transition-opacity duration-500 ease-in-out lg:ml-[75px] ml-[15px] ${
          loaded ? "opacity-100" : "opacity-0"
        }`}>
        <ConnectButtons />
      </footer>
    </div>
  );
}
