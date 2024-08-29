"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";
import logoImage from "../assets/logoImage01.jpeg";

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-green-100/75 backdrop-blur-lg transition-all">
      <div className="w-full">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            {/* Logo */}
            <div className="flex items-center p-1">
              <Image
                src={logoImage}
                alt="Logo"
                width={50}
                height={50}
                className="rounded-full border-2 border-yellow-500"
              />
              <h1 className="ml-2 text-black text-2xl font-Uchen font-semibold">
                Monadnocks
              </h1>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-x-6 text-black">

              <Link href={"#Home"} className="relative group">
                <p className="transition-all group-hover:text hover-cursor-pointer"
                >
                  Home
                </p>
                <span className="absolute left-0 right-0 -bottom-0.5 h-1 bg-emerald-300 scale-x-0 group-hover:scale-x-100 hover-cursor-pointer transition-transform origin-left"></span>
              </Link>

              <Link href={"#Services"} className="scroll-smooth relative group">
                <p className="transition-all group-hover:text hover-cursor-pointer">
                  Services
                </p>
                <span className="absolute left-0 right-0 -bottom-0.5 h-1 bg-emerald-300 scale-x-0 group-hover:scale-x-100 hover-cursor-pointer transition-transform origin-left"></span>
              </Link>

              <Link href={"#Contact"} className="relative group">
                <p className="transition-all group-hover:text hover-cursor-pointer">
                  Contact
                </p>
                <span className="absolute left-0 right-0 -bottom-0.5 h-1 bg-emerald-300 scale-x-0 group-hover:scale-x-100 hover-cursor-pointer transition-transform origin-left"></span>
              </Link>
              
              <Link href={"#AboutUs"} className="relative group">
                <p className="transition-all group-hover:text hover-cursor-pointer">
                  About us
                </p>
                <span className="absolute left-0 right-0 -bottom-0.5 h-1 bg-emerald-300 scale-x-0 group-hover:scale-x-100 hover-cursor-pointer transition-transform origin-left"></span>
              </Link>
              
              <button className="relative flex group">
                <p className="transition-all group-hover:text hover-cursor-pointer">
                  Shop Now
                </p>
                <BsArrowRight className="ml-1.5 h-5 w-5 mt-0.5 " />
                <span className="absolute left-0 right-0 -bottom-0.5 h-1 bg-emerald-300 scale-x-0 group-hover:scale-x-100 hover-cursor-pointer transition-transform origin-left"></span>
              </button>

            </ul>

            {/* Mobile Menu Icon */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMobileMenu} className="text-black">
                {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {/* <div
            className={`md:hidden flex flex-col absolute top-14 right-0 bg-green-200 rounded-l-lg shadow-lg py-6 mt-2 transition-all duration-300 ${
              isMobileMenuOpen ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col space-y-4 p-4">
              <li
                onClick={toggleMobileMenu}
                className="text-black hover:text-emerald-500 transition relative group"
              >
                <p>Home</p>
                <span className="absolute left-0 right-0 -bottom-0.5 h-1 bg-emerald-300 scale-x-0 group-hover:scale-x-100 hover-cursor-pointer transition-transform origin-left"></span>
              </li>
              <li
                onClick={toggleMobileMenu}
                className="text-black hover:text-emerald-500 transition relative group"
              >
                <p>Services</p>
                <span className="absolute left-0 right-0 -bottom-0.5 h-1 bg-emerald-300 scale-x-0 group-hover:scale-x-100 hover-cursor-pointer transition-transform origin-left"></span>
              </li>
              <li
                onClick={toggleMobileMenu}
                className="text-black hover:text-emerald-500 transition relative group"
              >
                <p>Contacts</p>
                <span className="absolute left-0 right-0 -bottom-0.5 h-1 bg-emerald-300 scale-x-0 group-hover:scale-x-100 hover-cursor-pointer transition-transform origin-left"></span>
              </li>
              <li
                onClick={toggleMobileMenu}
                className="text-black hover:text-emerald-500 transition relative group"
              >
                <p>About Us</p>
                <span className="absolute left-0 right-0 -bottom-0.5 h-1 bg-emerald-300 scale-x-0 group-hover:scale-x-100 hover-cursor-pointer transition-transform origin-left"></span>
              </li>
              <li
                onClick={toggleMobileMenu}
                className="text-black hover:text-emerald-500 transition relative group"
              >
                <p>Shop Now</p>
                <span className="absolute left-0 right-0 -bottom-0.5 h-1 bg-emerald-300 scale-x-0 group-hover:scale-x-100 hover-cursor-pointer transition-transform origin-left"></span>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
