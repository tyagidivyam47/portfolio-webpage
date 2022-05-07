import React from "react";
import ScrollIntoView from "react-scroll-into-view";
import { FaChevronDown } from "react-icons/fa";

export const About = () => {
  return (
    <div className="max-w-4xl mt-20 mx-auto">
      <p className="text-2xl text-black  md:text-4xl font-bold text-center">
        Hey 👋
      </p>
      <p className="text-base text-left md:text-center text-gray-500 leading-relaxed mt-4 justify-center">
        I'm a passionate web developer and I love creating content. I have good
        knowledge of Java. <br /> I also love freelancing and contributing to
        open-source projects.
      </p>
    <ScrollIntoView selector="#tech">
        <div className="mx-auto p-16 cursor-pointer">
            <FaChevronDown className="animate-bounce mx-auto text-3xl text-blue-500" />
        </div>
    </ScrollIntoView>

    </div>
  );
};

export default About;
