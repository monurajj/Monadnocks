"use client"
import NavBar from "@/components/navbar";
import Image from "next/image";
import { useState } from "react";
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaTwitter } from "react-icons/fa";

import logoImage from "../assets/logoImage01.jpeg";

import HomePageImport from '../components/HomePage'
import OurProducts from "../components/OurProducts"
import WhatWeInsure from "../components/WhatWeInsure"
import CostomersFeedback from "../components/CostomersFeedback"
import AboutUs from "../components/AboutUs"
import ContactUs from "../components/ContactUs"
import OurMission from "../components/OurMission"

function HomePage() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      <NavBar />

      {/* First Row */}
      <HomePageImport/>

      <div>
        <OurProducts/>
      </div>

      {/* Second Row */}
      <div>
        <WhatWeInsure/>
      </div>


      {/* Third Row */}

      <div>
        <CostomersFeedback/>
      </div>

    <div>
      <OurMission/>
    </div>

      {/* fourth Row */}
      <div>
        <AboutUs/>
      </div>

      {/* Fifth Row - Know More About Us */}
      <div>
        <ContactUs/>
      </div>

      {/* Sixth Row - Contact Us */}
      

      {/* Seventh Row - Footer */}
      <div className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center lg:items-start justify-between space-y-6 lg:space-y-0">
          {/* Footer Content - Horizontal Layout */}
          <div className="flex w-full flex-col lg:flex-row items-center lg:items-start justify-between lg:space-x-6">
            {/* Logo */}
            <div className="flex-shrink-0 mb-6 lg:mb-0">
              <Image
                src={logoImage} // Replace with your actual logo image
                alt="Monadnocks Logo"
                width={100} // Adjust width as needed
                height={100} // Adjust height as needed
                className="rounded-full border-2 border-yellow-400" // Make image round
              />
            </div>

            {/* Centered Copyright and Message */}
            <div className="text-center py-6 mt-4">
              <p className="text-lg font-semibold text-gray-300 mb-2">
                Love from Monadnocks ❤️
              </p>
              <p className="text-sm text-gray-500">
                © Monadnocks 2024 | All Rights Reserved
              </p>
            </div>

            {/* More ways to connect text and icons */}
            <div className="flex flex-col items-center lg:items-end space-y-2">
              <p className="text-lg font-semibold text-gray-300 text-center lg:text-right mb-2">
                More ways to connect with us 🤩
              </p>
              <div className="flex space-x-6 items-center">
                <a
                  href="https://twitter.com/yourprofile" // Replace with actual Twitter link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <FaTwitter
                    size={24}
                    className="hover:text-blue-400 transition-colors duration-300"
                  />
                </a>
                <a
                  href="https://linkedin.com/in/yourprofile" // Replace with actual LinkedIn link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <FaLinkedin
                    size={24}
                    className="hover:text-blue-500 transition-colors duration-300"
                  />
                </a>
                <a
                  href="https://instagram.com/yourprofile" // Replace with actual Instagram link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <FaInstagram
                    size={24}
                    className="hover:text-pink-500 transition-colors duration-300"
                  />
                </a>
                <a
                  href="https://facebook.com/yourprofile" // Replace with actual Facebook link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <FaFacebook
                    size={24}
                    className="hover:text-blue-600 transition-colors duration-300"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default HomePage;
