import React from "react";
import { FaInstagramSquare, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { DiGithubBadge } from "react-icons/di";

export const Footer = () => {
  return (
    <div className="py-5 border-t-3/2">
      <div className="flex justify-center mt-4">
        <a
          target="_blank"
          className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 hover:text-white rounded-full transition-colors duration-300"
          href="https://github.com/tyagidivyam47"
        >
          <DiGithubBadge size={25} />
          <span className="sr-only">Github</span>
        </a>

        <a
          target="_blank"
          className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-red-600 hover:bg-pink-700 hover:text-white rounded-full transition-colors duration-300"
          href="https://www.instagram.com/tyagidivyam47_/"
        >
          <FaInstagramSquare size={25} />
          <span className="sr-only">Instagram</span>
        </a>

        <a
          target="_blank"
          className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-700 hover:bg-blue-800 hover:text-white rounded-full transition-colors duration-300"
          href="https://www.linkedin.com/in/divyam-tyagi-546311202/"
        >
          <FaLinkedin size={25} />
          <span className="sr-only">Linkedin</span>
        </a>

        <a
          className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-red-700 hover:bg-red-800 hover:text-white rounded-full transition-colors duration-300"
          href="mailto:tyagidivyam47@gmail.com"
        >
          <FaEnvelope size={25} />
          <span className="sr-only">Github</span>
        </a>
      </div>

      <div className="flex align-center justify-center mt-4">
        <p className="text-black mb-4">
          Made with{" "}
          <span className="mr-2" role="img" aria-label="heart">
            💙{" "}
          </span>
          by
          <a
            className="text-blue-500 hover:underline"
            href="mailto:tyagidivyam47@gmail.com"
          >
            {" "}
            Divyam Tyagi
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
