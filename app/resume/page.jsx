"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaNode } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiDjango } from "react-icons/si";

// about data

const about = {
  title: "About me",
  description: "",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Fanirininony Andriatombontsoa",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+261) 34 82 666 54",
    },
    {
      fieldName: "Experience",
      fieldValue: "2 years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Malagasy",
    },
    {
      fieldName: "Email",
      fieldValue: "andriatombontsoafaniry@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "Malagasy, English, French",
    },
  ],
};

//experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Here are some of the works that I have compelled during my study",
  items: [
    {
      company: "Mobile project",
      theme: "Mini social-media with React Native Django",
      duration: "July to August 2024",
    },
    {
      company: "IHM project",
      theme: "Student management with React and NodeJs",
      duration: "June 2024",
    },
    {
      company: "Java Web project",
      theme: "Money Transfert with Java Server Page",
      duration: "June 2024",
    },
    {
      company: "Intership at the SRB",
      theme: " Case tracking with react and express.js",
      duration: "September-November 2023",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description: "",
  items: [
    {
      degree: "C2 from the International Tofel/Tesol Training Institue",
      theme: "International Certification in English",
      duration: "2024",
    },
    {
      degree: "B2 from the Alliance Française",
      theme: "International Diploma in French language",
      duration: "2024",
    },
    {
      degree: "3rd year of the bachelor's degree at ENI",
      theme: "Software and database Engineering",
      duration: "2023 - 2024",
    },
    {
      degree: "2nd year of the bachelor's degree at ENI",
      theme: "Software and database Engineering",
      duration: "2022 - 2023",
    },
    {
      degree: "1st year of the bachelor's degree at ENI",
      theme: "Software and database Engineering",
      duration: "2021 - 2022",
    },
    {
      degree: "Last year of high school at the Saint Josepth de Cluny",
      theme: "Baccalaureate in series D",
      duration: "2021",
    },
  ],
};

//skills  data
const skills = {
  title: "My skills",
  description: "",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "Html 5",
    },
    {
      icon: <FaCss3 />,
      name: "Css 3",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNode />,
      name: "node.js",
    },
    {
      icon: <SiDjango />,
      name: "django",
    },
  ],
};

//components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          {/* Contents */}
          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl 
                          flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.company}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* Dot */}
                            <span
                              className="w-[7px] h-[5px] rounded-full
                            bg-accent"
                            ></span>
                            <p className="text-white/60 text-sm">
                              {item.theme}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl 
                          flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-sm max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.theme}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* Dot */}
                            <span
                              className="w-[7px] h-[5px] rounded-full
                            bg-accent"
                            ></span>
                            <p className="text-white/60 text-sm">
                              {item.degree}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold ">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger
                              className="w-full h-[150px] bg-[#232329] rounded-xl flex 
                            justify-center items-center group"
                            >
                              <div
                                className="text-6xl group-hover:text-accent transition-all 
                              duration-300 "
                              >
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* About me */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 gap-x-[150px] max-w-[1250px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60 ">{item.fieldName}</span>
                        <span className="text-[14px]">{item.fieldValue} </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
