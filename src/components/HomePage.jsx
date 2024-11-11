import React from "react";
import { motion } from "framer-motion";

const AnimatedServicesIllustration = () => (
  <div className="w-full h-full relative">
    {/* F2 (Fast and Fair) Animation */}
    <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100">
      <defs>
        <path id="f2Path" d="M10,50 Q50,10 90,50 T10,50" fill="none" />
      </defs>
      <g>
        <animateMotion dur="15s" repeatCount="indefinite">
          <mpath href="#f2Path" />
        </animateMotion>
        <rect x="-15" y="-15" width="30" height="30" fill="#4CAF50" rx="4">
          <animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite" />
        </rect>
        <path
          d="M-10,-5 h20 v15 h-20 z"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
        />
        <path
          d="M-6,-5 v-5 a6,6 0 0,1 12,0 v5"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
        />
        <text
          x="0"
          y="5"
          fontSize="8"
          fill="white"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          F2
        </text>
      </g>
    </svg>

    {/* PaperPix Animation */}
    <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100">
      <defs>
        <path id="paperPixPath" d="M20,80 Q50,20 80,80 T20,80" fill="none" />
      </defs>
      <g>
        <animateMotion dur="20s" repeatCount="indefinite">
          <mpath href="#paperPixPath" />
        </animateMotion>
        <rect x="-20" y="-25" width="40" height="50" fill="#9C27B0" rx="4">
          <animate attributeName="width" values="40;42;40" dur="2s" repeatCount="indefinite" />
          <animate attributeName="height" values="50;52;50" dur="2s" repeatCount="indefinite" />
        </rect>
        <rect x="-18" y="-23" width="36" height="46" fill="white" rx="2" />
        <line x1="-15" y1="-20" x2="15" y2="-20" stroke="#9C27B0" strokeWidth="0.5" />
        <line x1="-15" y1="-15" x2="15" y2="-15" stroke="#9C27B0" strokeWidth="0.5" />
        <line x1="-15" y1="-10" x2="15" y2="-10" stroke="#9C27B0" strokeWidth="0.5" />
        <text
          x="0"
          y="10"
          fontSize="6"
          fill="#9C27B0"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          PaperPix
        </text>
      </g>
    </svg>

    {/* CareCab Animation */}
    <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100">
      <defs>
        <path id="careCabPath" d="M90,90 Q 50,50 10,10 T90,90" fill="none" stroke="none" />
      </defs>
      <g>
        <animateMotion dur="25s" repeatCount="indefinite" rotate="auto">
          <mpath href="#careCabPath" />
        </animateMotion>
        <rect x="-12" y="-7" width="24" height="14" fill="#FF5722" rx="3">
          <animate attributeName="fill" values="#FF5722;#FF7043;#FF5722" dur="4s" repeatCount="indefinite" />
        </rect>
        <circle cx="-7" cy="7" r="3" fill="#333">
          <animate attributeName="r" values="3;3.5;3" dur="1s" repeatCount="indefinite" />
        </circle>
        <circle cx="7" cy="7" r="3" fill="#333">
          <animate attributeName="r" values="3;3.5;3" dur="1s" repeatCount="indefinite" />
        </circle>
        <rect x="9" y="-4" width="3" height="7" fill="#FFD54F" />
        <text x="0" y="-2" fontSize="4" fill="white" textAnchor="middle" dominantBaseline="middle">
          CareCab
        </text>
      </g>
    </svg>
  </div>
);

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col justify-center">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col-reverse lg:flex-row items-center justify-between py-12 lg:py-24" id="Home">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 w-full lg:pr-12 mt-8 lg:mt-0 text-center lg:text-left"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-4 lg:mb-6 leading-tight">
            Building a Brighter Future Together
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-6 lg:mb-8 leading-relaxed">
            We're on a mission to make a difference. Through our innovative services and commitment to social responsibility, we're creating positive change in communities around the world.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <a
              href={"#Services"}
              className="bg-indigo-600 text-white text-base sm:text-lg font-semibold rounded-lg py-3 px-6 sm:px-8 shadow-lg transition-colors duration-200 hover:bg-indigo-700"
            >
              Explore Our Services
            </a>
          </motion.div>
        </motion.div>

        {/* Animated Services Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-1/2 w-full flex justify-center lg:justify-end"
        >
          <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-[36rem] lg:h-[36rem] rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
            <AnimatedServicesIllustration />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;