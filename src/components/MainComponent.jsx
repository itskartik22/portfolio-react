import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaSquareInstagram } from "react-icons/fa6";
import About from "./About";
import ProjectSection from "./ProjectSection";
import SkillSection from "./SkillSection";
import EducationSection from "./EducationSection";
import { useEffect, useRef, useState } from "react";

const MainComponent = () => {
  const [activeHoverEffect, setActiveHoverEffect] = useState("");
  const [activeSection, setActiveSection] = useState("about");
  const sectionRefs = {
    aboutRef: useRef(null),
    skillRef: useRef(null),
    projectRef: useRef(null),
    educationRef: useRef(null),
  };
  const mainScrollRef = useRef(null);

  const handleScroll = () => {
    const scrollPosition = mainScrollRef.current.scrollTop;

    // Determine the active section based on the scroll position
    Object.keys(sectionRefs).forEach((sectionId) => {
      const sectionRef = sectionRefs[sectionId];
      const sectionTop = sectionRef.current.offsetTop;
      const sectionBottom = sectionTop + sectionRef.current.clientHeight;
      if (
        scrollPosition + 250 >= sectionTop &&
        scrollPosition + 250 < sectionBottom
      ) {
        // console.log(scrollPosition + 250, sectionTop, sectionBottom);
        setActiveSection(sectionRef.current.id);
      }
    });
  };

  const handleClickScroll = (sectionId) => {
    const sectionRef = sectionRefs[sectionId];
    const sectionTop = sectionRef.current.offsetTop;
    mainScrollRef.current.scrollTop = sectionTop - 80;
  };

  useEffect(() => {
    const scrollableElement = mainScrollRef.current;
    if (scrollableElement) {
      scrollableElement.addEventListener("scroll", handleScroll, {
        passive: true,
      });

      return () => {
        if (scrollableElement) {
          scrollableElement.removeEventListener("scroll", handleScroll);
        }
      };
    }
  });

  return (
    <div
      ref={mainScrollRef}
      className="max-w-screen lg:max-h-screen md:overflow-x-hidden bg-gradient-to-tr from-black to-slate-900 text-white scroll-smooth"
    >
      {/* <div className="z-1 absolute -top-48 -left-28 bg-white/90 rounded-full" style={{
        height: "45rem",
        width: "45rem"
      }}></div> */}

      <div className="flex lg:flex-row flex-col gap-5">
        <div className="lg:w-1/2 w-full lg:h-screen h-fit lg:sticky top-0 flex flex-col justify-between lg:gap-0 gap-12 xl:px-24 lg:px-18 md:px-16 sm:px-8 px-3 xl:py-24 lg:py-20 md:py-12 sm:py-12 py-32 pb-10">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
                <h2 className="text-xl font-semibold">Hello there! I am</h2>
              <h1 className="text-5xl font-bold drop-shadow-md shadow-white">
                Kartik Kumar
              </h1>
                <h2 className="text-2xl font-semibold">
                  a MERN Stack Developer
                </h2>
              {/* <p className="text-lg font-medium">
                Hi, I am Kartik Thakur, a undergraduate Engineering IT student.
              </p> */}
            </div>
            <nav className="">
              <ul className="w-fit flex flex-col text-lg font-medium gap-1">
                <li
                  className={`${
                    activeSection === "about" || activeHoverEffect === "about"
                      ? "text-white"
                      : "text-slate-500"
                  } flex items-center gap-2 cursor-pointer transition-all`}
                  onMouseEnter={() => setActiveHoverEffect("about")}
                  onMouseLeave={() => setActiveHoverEffect("")}
                  onClick={() => handleClickScroll("aboutRef")}
                >
                  <div
                    className={`
                    ${
                      activeSection === "about" || activeHoverEffect === "about"
                        ? "w-16 bg-white"
                        : "w-8 bg-slate-500"
                    }
                     transition-all`}
                    style={{
                      height: "0.15rem",
                    }}
                  ></div>
                  About
                </li>
                <li
                  className={`${
                    activeSection === "skills" || activeHoverEffect === "skills"
                      ? "text-white"
                      : "text-slate-500"
                  } flex items-center gap-2 cursor-pointer transition-all`}
                  onMouseEnter={() => setActiveHoverEffect("skills")}
                  onMouseLeave={() => setActiveHoverEffect("")}
                  onClick={() => handleClickScroll("skillRef")}
                >
                  <div
                    className={`
                    ${
                      activeSection === "skills" ||
                      activeHoverEffect === "skills"
                        ? "w-16 bg-white"
                        : "w-8 bg-slate-500"
                    }
                     transition-all`}
                    style={{
                      height: "0.15rem",
                    }}
                  ></div>
                  Skills
                </li>
                <li
                  className={`${
                    activeSection === "projects" ||
                    activeHoverEffect === "projects"
                      ? "text-white"
                      : "text-slate-500"
                  } flex items-center gap-2 cursor-pointer transition-all`}
                  onMouseEnter={() => setActiveHoverEffect("projects")}
                  onMouseLeave={() => setActiveHoverEffect("")}
                  onClick={() => handleClickScroll("projectRef")}
                >
                  {" "}
                  <div
                    className={`
                    ${
                      activeSection === "projects" ||
                      activeHoverEffect === "projects"
                        ? "w-16 bg-white"
                        : "w-8 bg-slate-500"
                    }
                     transition-all`}
                    style={{
                      height: "0.15rem",
                    }}
                  ></div>
                  Projects
                </li>
                <li
                  className={`${
                    activeSection === "education" ||
                    activeHoverEffect === "education"
                      ? "text-white"
                      : "text-slate-500"
                  } flex items-center gap-2 cursor-pointer transition-all`}
                  onMouseEnter={() => setActiveHoverEffect("education")}
                  onMouseLeave={() => setActiveHoverEffect("")}
                  onClick={() => handleClickScroll("educationRef")}
                >
                  {" "}
                  <div
                    className={`
                    ${
                      activeSection === "education" ||
                      activeHoverEffect === "education"
                        ? "w-16 bg-white"
                        : "w-8 bg-slate-500"
                    }
                     transition-all`}
                    style={{
                      height: "0.15rem",
                    }}
                  ></div>
                  Education
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex md:flex-row flex-col gap-2">
            <ul className="w-fit text-3xl flex sm:flex-row flex-col gap-3 md:pl-2">
              <li>
                <a href="https://www.linkedin.com/in/kartik-kumar-836a3a228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                  <BsLinkedin />
                </a>
              </li>
              <li>
                <a href="https://github.com/itskartik22">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a href="https://leetcode.com/its_kartik/">
                  <SiLeetcode />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/kartik_rebel22?igsh=em03ZDdkbTNpNmZ3">
                  <FaSquareInstagram />
                </a>
              </li>
            </ul>
            <span className="text-lg font-light">
              thakurkartik2262@gmail.com
            </span>
          </div>
        </div>
        <div className="main lg:w-1/2 w-full flex flex-col justify-center lg:gap-28 md:gap-24 sm:gap-20 gap-16 xl:px-24 lg:px-18 md:px-16 px-2 xl:py-24 lg:py-20 md:py-12 py-2">
          <About reference={sectionRefs.aboutRef} />
          <SkillSection reference={sectionRefs.skillRef} />
          <ProjectSection reference={sectionRefs.projectRef} />
          <EducationSection reference={sectionRefs.educationRef} />
        </div>
        <p className="lg:hidden block text-center bg-white/10 p-4">@copyright. Kartik Kumar</p>
      </div>
    </div>
  );
};

export default MainComponent;
