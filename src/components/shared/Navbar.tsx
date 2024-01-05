import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { useState } from "react";
import { CgSun } from "react-icons/cg";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { TiThMenu } from "react-icons/ti";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";
import { motion, AnimatePresence } from "framer-motion";
export default function Navbar() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [hoveredLink, setHoveredLink] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [ani, setAni] = useState(false);
  const handleHover = (link: string) => {
    setHoveredLink(link);
  };

  const resetHover = () => {
    setHoveredLink("");
  };
  const closeSheetDelayed = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 500); // 3 seconds delay before closing
  };

  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const variantsElement = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };
  return (
    <div
      className="bg-[#D9D9D9] text-[
        #000000] dark:bg-black dark:text-white flex justify-between items-center px-16 py-2 fixed top-0 w-full z-10"
    >
      <img src="/assets/images/logo.png" alt="logo" width={150} />
      <div className="lg:flex space-x-8 hidden mr-6">
        <Link
          to="/aboutus"
          className={`hover:text-blue-700 transition-all duration-300 ${
            hoveredLink && hoveredLink !== "/aboutus" && "opacity-40"
          }`}
          onMouseEnter={() => handleHover("/aboutus")}
          onMouseLeave={resetHover}
        >
          About us
        </Link>
        <Link
          to="/leaderboard"
          className={`hover:text-blue-700 transition-all duration-300 ${
            hoveredLink && hoveredLink !== "/leaderboard" && "opacity-40"
          }`}
          onMouseEnter={() => handleHover("/leaderboard")}
          onMouseLeave={resetHover}
        >
          Leaderboard
        </Link>
        <Link
          to="/bugbountyprograms"
          className={`hover:text-blue-700 transition-all duration-300 ${
            hoveredLink && hoveredLink !== "/bugbountyprograms" && "opacity-40"
          }`}
          onMouseEnter={() => handleHover("/bugbountyprograms")}
          onMouseLeave={resetHover}
        >
          Bug Bounty programs
        </Link>
        <Link
          to="/opportunities"
          className={`hover:text-blue-700 transition-all duration-300 ${
            hoveredLink && hoveredLink !== "opportunities" && "opacity-40"
          }`}
          onMouseEnter={() => handleHover("opportunities")}
          onMouseLeave={resetHover}
        >
          Opportunities
        </Link>
        <Link
          to="/joinus"
          className={`hover:text-blue-700 transition-all duration-300 ${
            hoveredLink && hoveredLink !== "joinus" && "opacity-40"
          }`}
          onMouseEnter={() => handleHover("joinus")}
          onMouseLeave={resetHover}
        >
          Join us
        </Link>
      </div>

      <Sheet
        open={isOpen}
        onOpenChange={(nextIsOpen) => {
          setAni(nextIsOpen);
          if (!nextIsOpen) {
            closeSheetDelayed();
          }

          setIsOpen(true);
        }}
      >
        <SheetTrigger className="mr-1 lg:hidden">
          <TiThMenu size={20} />
        </SheetTrigger>
        <AnimatePresence mode="wait">
          <SheetContent className="w-[300px]">
            <SheetHeader>
              <img
                src="/assets/images/logo.png"
                alt="logo"
                width={200}
                className="m-auto"
              />
            </SheetHeader>

            <motion.div
              className="flex flex-col  items-center space-y-8 mt-4 "
              variants={variants}
              initial="closed"
              animate={`${ani ? "open" : "closed"}`}
              exit="closed"
            >
              <motion.div variants={variantsElement}>
                <Link
                  to="/aboutus"
                  className={`hover:text-blue-700 transition-all duration-300 ${
                    hoveredLink && hoveredLink !== "/aboutus" && "opacity-40"
                  }`}
                  onMouseEnter={() => handleHover("/aboutus")}
                  onMouseLeave={resetHover}
                >
                  About us
                </Link>
              </motion.div>
              <motion.div variants={variantsElement}>
                <Link
                  to="/leaderboard"
                  className={`hover:text-blue-700 transition-all duration-300 ${
                    hoveredLink &&
                    hoveredLink !== "/leaderboard" &&
                    "opacity-40"
                  }`}
                  onMouseEnter={() => handleHover("/leaderboard")}
                  onMouseLeave={resetHover}
                >
                  Leaderboard
                </Link>
              </motion.div>
              <motion.div variants={variantsElement}>
                <Link
                  to="/bugbountyprograms"
                  className={`hover:text-blue-700 transition-all duration-300 ${
                    hoveredLink &&
                    hoveredLink !== "/bugbountyprograms" &&
                    "opacity-40"
                  }`}
                  onMouseEnter={() => handleHover("/bugbountyprograms")}
                  onMouseLeave={resetHover}
                >
                  Bug Bounty programs
                </Link>
              </motion.div>
              <motion.div variants={variantsElement}>
                <Link
                  to="/opportunities"
                  className={`hover:text-blue-700 transition-all duration-300 ${
                    hoveredLink &&
                    hoveredLink !== "opportunities" &&
                    "opacity-40"
                  }`}
                  onMouseEnter={() => handleHover("opportunities")}
                  onMouseLeave={resetHover}
                >
                  Opportunities
                </Link>
              </motion.div>
              <motion.div variants={variantsElement}>
                <Link
                  to="/joinus"
                  className={`hover:text-blue-700 transition-all duration-300 ${
                    hoveredLink && hoveredLink !== "joinus" && "opacity-40"
                  }`}
                  onMouseEnter={() => handleHover("joinus")}
                  onMouseLeave={resetHover}
                >
                  Join us
                </Link>
              </motion.div>
            </motion.div>
          </SheetContent>
        </AnimatePresence>
      </Sheet>
      <button className="absolute right-10" onClick={toggleDarkMode}>
        {darkMode ? <CgSun /> : <BsFillMoonStarsFill />}
      </button>
    </div>
  );
}
