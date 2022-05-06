import React from "react";
import profilePic from "../images/image.jpg";
import { DiGithubBadge } from "react-icons/di";
// import {GrAd} from "react-icons/gr"
import {FaInstagramSquare, FaFacebookSquare, FaEnvelope, FaLinkedin} from "react-icons/fa"

export const Card = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center max-w-sm mx-auto shadow-xl rounded-xl bg-white">
        <div>
          <img
            className="mx-auto w-32 shadow-xl rounded-full drop-shadow-sm"
            src={profilePic}
          />
        </div>
        <div className="text-center mt-5">
          <p className="text-xl sm:text-2xl text-gray-900">Divyam Tyagi</p>

          <p className="text-xs sm:text-base text-gray-600 pt-2 pb-2 mb-4 px-5 w-auto inline-block border-b-2">
            React Developer/Engineering Student
          </p>
        </div>

        <div className="flex justify-center mt-4">
          <a target="_blank" className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 hover:text-white rounded-full transition-colors duration-300" href="https://github.com/tyagidivyam47">
            <DiGithubBadge size={40} />
            <span className="sr-only">Github</span>
          </a>

          <a target="_blank" className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-red-600 hover:bg-pink-700 hover:text-white rounded-full transition-colors duration-300" href="https://www.instagram.com/tyagidivyam47_/">
            <FaInstagramSquare size={40} />
            <span className="sr-only">Instagram</span>
          </a>

          <a target="_blank" className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-700 hover:bg-blue-800 hover:text-white rounded-full transition-colors duration-300" href="https://www.linkedin.com/in/divyam-tyagi-546311202/">
            <FaLinkedin size={40} />
            <span className="sr-only">Linkedin</span>
          </a>

          <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-red-700 hover:bg-red-800 hover:text-white rounded-full transition-colors duration-300" href="mailto:tyagidivyam47@gmail.com" >
            <FaEnvelope size={40} />
            <span className="sr-only">Github</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
