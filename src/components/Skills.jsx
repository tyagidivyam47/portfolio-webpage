import React from "react";
import { FaHtml5, FaReact, FaJava, FaAndroid } from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
import { FaChevronDown } from "react-icons/fa";
import ScrollIntoView from "react-scroll-into-view";

export const Skills = () => {
  return (
    <div className="max-w-4xl mx-auto justify-center py-10" id="tech">
      <p className="text-2xl text-black  md:text-4xl font-bold text-center pt-4">
        Tech I Use
      </p>

      <div className="flex flex-wrap justify-center pt-2">
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <FaHtml5 color="#e34c26" className="mx-auto text-4xl" />
          <p className="mt-6 text-xl font-semibold text-center">HTML5</p>
        </div>

        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiJavascript color="#f0db4f" className="mx-auto text-4xl" />
          <p className="mt-6 text-xl font-semibold text-center">JavaScript</p>
        </div>

        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <FaReact color="#61dbfb" className="mx-auto text-4xl" />
          <p className="mt-6 text-xl font-semibold text-center">React.JS</p>
        </div>

        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <FaJava color="#f89820" className="mx-auto text-4xl" />
          <p className="mt-6 text-xl font-semibold text-center">Java</p>
        </div>

        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiTailwindcss color="#2196f3" className="mx-auto text-4xl" />
          <p className="mt-6 text-xl font-semibold text-center">Tailwind CSS</p>
        </div>

        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <FaAndroid color="#3DDC84" className="mx-auto text-4xl" />
          <p className="mt-6 text-xl font-semibold text-center">
            Android Development
          </p>
        </div>
      </div>
      <ScrollIntoView selector="#contactme">
        <div className="mx-auto p-16 cursor-pointer">
          <FaChevronDown className="animate-bounce mx-auto text-3xl text-blue-500" />
        </div>
      </ScrollIntoView>
    </div>
  );
};
export default Skills;
