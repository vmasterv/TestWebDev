"use client";

import { title } from "process";
import { 
  FaHtml5, 
  FaCss3,
  FaJs,
  FaReact, 
  FaFigma,
  FaNodeJs,
  FaSquareFull,
  FaDatabase
} from "react-icons/fa";

import { 
  SiTailwindcss,
  SiNextdotjs
} from "react-icons/si";

const about = {
  title: "About Me",
  desciption: "I am a software developer with a passion for building web applications that provide a great user experience and are easy to use. I excel at digital design and frontend programming.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "John Doe"
    },
    {
      fieldName: "Phone",
      fieldValue: "123 345 678"
    },
    {
      fieldName: "Email",
      fieldValue: ""
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ years"
    },

  ]
}

const experience = {
  icon: "",
  title: "Experience",
  description: "I have 3+ years of experience in building web applications and websites. I have worked with startups and large companies to build web applications that provide a great user experience and are easy to use.",
  items: [
    {
      title: "Technical Support",
      company: "Company A",
      date: "Mar 2022 - Present",
      description: "I worked on building web applications and websites that provide a great user experience and are easy to use."
    },
    {
      title: "Transportation Manager",
      company: "Company B",
      date: "Oct 2021 - Mar 2022",
      description: "I worked on building web applications and websites that provide a great user experience and are easy to use."
    },
    {
      title: "Web Developer",
      company: "Company C",
      date: "Jun 2016 - Oct 2021",
      description: "I worked on building web applications and websites that provide a great user experience and are easy to use."
    },
  ]
}

const education = {
  icon: "",
  title: "Education",
  description: "I have a degree in Tech. I have taken courses in web development, digital design, and frontend programming.",
  items: [
    {
      instition: "Tech Insitute",
      degree: "Certified Web Developer",
      date: "2010 - 2014",
      description: "I studied Tech and took courses in web development, digital design, and frontend programming."
    },
    {
      instition: "Deisgn School",
      degree: "Degree in Design",
      date: "2014 - 2018",
      description: "I studied Tech and took courses in web development, digital design, and frontend programming."
    },
  ]
}

const skills = {
  title: "Skills",
  description: "I have experience in building web applications and websites. I have worked with startups and large companies to build web applications that provide a great user experience and are easy to use.",
  skillList: [
    {
      name: "HTML",
      icon: <FaHtml5 />
    },
    {
      title: "Tailwind CSS",
      icon: <SiTailwindcss />
    },
    {
      name: "CSS",
      icon: <FaCss3 />
    },
    {
      name: "JavaScript",
      icon: <FaJs />
    },
    {
      name: "React",
      icon: <FaReact />
    },
    
    {
      title: "Next.js",
      icon: <SiNextdotjs />
    },
    {
      title: "SQL Databases",
      icon: <FaDatabase />
    }
  ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
    return ( <motion.div 
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        transition: { 
          duration: 0.4, 
          delay: 2.5, 
          ease: "easeIn" },
       }}
       className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
      
      >
        <div className="container mx-auto">
          <Tabs 
            defaultValue="experience"
            className="flex flex-col xl:flex-row gap-[60px]"
            >
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value="experience"> Experience </TabsTrigger>
              <TabsTrigger value="education"> Education </TabsTrigger>
              <TabsTrigger value="skills"> Skills </TabsTrigger>
              <TabsTrigger value="about"> About </TabsTrigger>
            </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
             <ScrollArea className="h-[400px]">
              <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                {experience.items.map((item, index) => {
                  return <li key={index} className="flex flex-col gap-1
                  py-6 px-8 bg-[#28282c] rounded-xl shadow-lg justify-center
                  lg:items-center
                  ">
                    <p className="text-accent">{item.date}</p>
                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.title}</h3>
                    <p className="text-white/60">{item.company}</p>
                    
                    <p className="text-white/60">{item.description}</p>
                  </li>
                },)}
              </ul>
              </ScrollArea> 
              </div>
            </TabsContent> 
            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
             <ScrollArea className="h-[400px]">
              <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                {education.items.map((item, index) => {
                  return <li key={index} className="flex flex-col gap-1
                  py-6 px-8 bg-[#28282c] rounded-xl shadow-lg justify-center
                  lg:items-center
                  ">
                    <p className="text-accent">{item.date}</p>
                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                    <p className="text-white/60">{item.instition}</p>
                    
                    <p className="text-white/60">{item.description}</p>
                  </li>
                },)}
              </ul>
              </ScrollArea> 
              </div>
            </TabsContent> 
            <TabsContent value="skills" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
             <ScrollArea className="h-[400px]">
              <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                {experience.items.map((item, index) => {
                  return <li key={index} className="flex flex-col gap-1
                  py-6 px-8 bg-[#28282c] rounded-xl shadow-lg justify-center
                  lg:items-center
                  ">
                    <p className="text-accent">{item.date}</p>
                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.title}</h3>
                    <p className="text-white/60">{item.company}</p>
                    
                    <p className="text-white/60">{item.description}</p>
                  </li>
                },)}
              </ul>
              </ScrollArea> 
              </div>
            </TabsContent> 
            <TabsContent value="about" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
             <ScrollArea className="h-[400px]">
              <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                {experience.items.map((item, index) => {
                  return <li key={index} className="flex flex-col gap-1
                  py-6 px-8 bg-[#28282c] rounded-xl shadow-lg justify-center
                  lg:items-center
                  ">
                    <p className="text-accent">{item.date}</p>
                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.title}</h3>
                    <p className="text-white/60">{item.company}</p>
                    
                    <p className="text-white/60">{item.description}</p>
                  </li>
                },)}
              </ul>
              </ScrollArea> 
              </div>
            </TabsContent> 
            </div>
          </Tabs>
        </div>

      </motion.div>
    );
  };
  
  export default Resume