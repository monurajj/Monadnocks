"use client"
import NavBar from "@/components/navbar";
import Image from "next/image";
import { useState } from "react";



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
      {/* <NavBar /> */}

      {/* First Row */}
      <HomePageImport/>

      <div>
        <OurProducts/>
      </div>

      {/* Second Row */}
      <div>
        {/* <WhatWeInsure/> */}
      </div>


      {/* Third Row */}


    <div>
      <OurMission/>
    </div>

      {/* fourth Row */}
      <div>
        <AboutUs/>
      </div>

      <div>
        <CostomersFeedback/>
      </div>

      {/* Fifth Row - Know More About Us */}
      <div>
        <ContactUs/>
      </div>


    </div>
  );
}

export default HomePage;
