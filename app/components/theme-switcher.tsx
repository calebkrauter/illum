import { useContext, useEffect, useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import Image from "next/image";
import { Button } from "@heroui/button";
import { ThemeContext } from "./theme-provider";
interface ThemeSwitcherProps {
  className?: string;
}
const pillPositions = [0, 50, 100];
export default function ThemeSwitcher({ className }: ThemeSwitcherProps) {
  const parentRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const { selected, setSelected } = useContext(ThemeContext);
  const [isMobile, setIsMobile] = useState(false);
  const handleClick = () => {
    if (!isDragging) {
      if (selected >= 2) {
        setSelected(0);
      } else {
        setSelected(selected + 1);
      }
    }
  };

  const handleDrag = () => {
    setIsDragging(true);
  };

  const x = useMotionValue(0);
  const themeSourceChoice = [
    "/system.svg",
    "/dark-mode.svg",
    "/light-mode.svg",
  ];
  const [width, setWidth] = useState(50);
  const [height, setHeight] = useState(40);

  const storeThemeSelection = (index: number) => {
    localStorage.setItem("themeIndex", index.toString());
  };

  useEffect(() => {
    const localStorageIndex = localStorage.getItem("themeIndex");
    if (localStorageIndex) setSelected(parseInt(localStorageIndex));
  }, [setSelected]);

  useEffect(() => {
    const onRefocus = () => {};
    const handleResize = () => {
      x.set(pillPositions[selected]);
    };
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    if (
      selected === 0 &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      document.body.classList.remove("light", "dark");
      document.body.classList.add("dark");
      storeThemeSelection(0);
    } else if (
      selected === 0 &&
      window.matchMedia("(prefers-color-scheme: light)").matches
    ) {
      document.body.classList.remove("light", "dark");
      document.body.classList.add("light");
      storeThemeSelection(0);
    }
    if (selected === 1) {
      document.body.classList.remove("light", "dark");
      document.body.classList.add("dark");
      storeThemeSelection(1);
    } else if (selected === 2) {
      document.body.classList.remove("light", "dark");
      document.body.classList.add("light");
      storeThemeSelection(2);
    }
    window.addEventListener("focus", onRefocus);
    window.addEventListener("pointerdown", onRefocus);
    window.addEventListener("scroll", onRefocus);
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") onRefocus();
    });

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("focus", onRefocus);
      document.removeEventListener("visibilitychange", onRefocus);
      window.removeEventListener("pointerdown", onRefocus);
      window.removeEventListener("scroll", onRefocus);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("resize", check);
    };
  }, [selected, x]);

  const handleButton = (index: number) => {
    setSelected(index);
  };
  return (
    <div ref={parentRef} className={`flex flex-row relative ${className}`}>
      <motion.div
        style={{ x }}
        animate={{
          x: selected * 50,
          width: width,
          height: height,
        }}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 50,
          bounce: 0,
        }}
        drag={isMobile ? false : "x"}
        dragConstraints={parentRef}
        dragTransition={{
          power: 0,
          timeConstant: 50,
          // Snap calculated target to nearest 50 pixels
          modifyTarget: (target) => Math.round(target / 50) * 50,
          min: 0,
          max: 100,
          bounceStiffness: 500,
        }}
        onDrag={handleDrag}
        onClick={handleClick}
        onDragEnd={() => {
          setIsDragging(false);
          setSelected(Math.round(x.get() / 50));
        }}
        whileTap={{ cursor: "grabbing" }}
        dragElastic={0.01}
        className={`flex absolute bottom-0 transform -translate-x-1/2 bg-subTitle-background rounded-lg z-50 `}>
        <motion.div
          key={themeSourceChoice[selected]}
          initial={{ opacity: 0, scale: 1, filter: "blur(5px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 0.5, filter: "blur(5px)" }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className=" relative mx-auto my-auto w-full h-full max-w-[24px] max-h-[24px]">
          <Image
            className="mx-auto pointer-events-none w-full h-full max-w-[24px] max-h-[24px]"
            src={themeSourceChoice[selected]}
            alt={"system theme icon"}
            width={24}
            height={24}></Image>
        </motion.div>
      </motion.div>
      <Button
        className="flex w-[50px] rounded-l-lg h-[40px] my-auto bg-red-300"
        onPress={() => {
          handleButton(0);
        }}>
        <Image
          src={"/system.svg"}
          alt={"system theme icon"}
          width={24}
          height={24}></Image>
      </Button>
      <Button
        className="flex w-[50px] rounded-none h-[40px] my-auto bg-red-300"
        onPress={() => {
          handleButton(1);
        }}>
        <Image
          src={"/dark-mode.svg"}
          alt={"system theme icon"}
          width={24}
          height={24}></Image>
      </Button>

      <Button
        className="flex w-[50px] rounded-r-lg h-[40px] my-auto bg-red-300"
        onPress={() => {
          handleButton(2);
        }}>
        <Image
          src={"/light-mode.svg"}
          alt={"system theme icon"}
          width={24}
          height={24}></Image>
      </Button>
    </div>
  );
}
