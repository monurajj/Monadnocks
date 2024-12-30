"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";
import logoImage from "../assets/logoImage01.jpeg";
import ShopComingSoonToast from "./ShopComingSoonToast";
import { useRouter } from "next/navigation"; // Fixed import

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const router = useRouter(); // Fixed router initialization

  const handleMonadnocksFoundation = () => {
    router.push("https://monadnocks-foundation-page.vercel.app/");
  };

  
  const handleShopNowClick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  };

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
              <li>
                <Link href="#Home" className="relative group">
                  <p className="transition-all group-hover:text-emerald-500">
                    Home
                  </p>
                  <span className="absolute left-0 right-0 -bottom-0.5 h-1 bg-emerald-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </Link>
              </li>

              <li>
                <Link href="#Services" className="relative group">
                  <p className="transition-all group-hover:text-emerald-500">
                    Services
                  </p>
                  <span className="absolute left-0 right-0 -bottom-0.5 h-1 bg-emerald-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </Link>
              </li>

              <li>
                <Link href="#Contact" className="relative group">
                  <p className="transition-all group-hover:text-emerald-500">
                    Contact
                  </p>
                  <span className="absolute left-0 right-0 -bottom-0.5 h-1 bg-emerald-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </Link>
              </li>

              <li>
                <Link href="#AboutUs" className="relative group">
                  <p className="transition-all group-hover:text-emerald-500">
                    About Us
                  </p>
                  <span className="absolute left-0 right-0 -bottom-0.5 h-1 bg-emerald-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </Link>
              </li>

              <li>
                <button
                  onClick={handleMonadnocksFoundation}
                  className="relative flex group items-center"
                >
                  <p className="transition-all group-hover:text-emerald-500">
                    Monadnocks Foundation
                  </p>
                  <BsArrowRight className="ml-1.5 h-5 w-5" />
                  <span className="absolute left-0 right-0 -bottom-0.5 h-1 bg-emerald-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </button>
              </li>
            </ul>

            {/* Mobile Menu Icon */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMobileMenu} className="text-black">
                {isMobileMenuOpen ? (
                  <FaTimes size={24} />
                ) : (
                  <FaBars size={24} />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden flex flex-col absolute top-14 right-0 bg-green-200 rounded-l-lg shadow-lg py-6 mt-2 transition-all duration-300 ${
              isMobileMenuOpen ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col space-y-4 p-4">
              <li>
                <Link
                  href="#Home"
                  onClick={toggleMobileMenu}
                  className="text-black hover:text-emerald-500 transition relative group block"
                >
                  <p>Home</p>
                  <span className="absolute left-0 right-0 -bottom-0.5 h-1 bg-emerald-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </Link>
              </li>

              <li>
                <Link
                  href="#Services"
                  onClick={toggleMobileMenu}
                  className="text-black hover:text-emerald-500 transition relative group block"
                >
                  <p>Services</p>
                  <span className="absolute left-0 right-0 -bottom-0.5 h-1 bg-emerald-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </Link>
              </li>

              <li>
                <Link
                  href="#Contact"
                  onClick={toggleMobileMenu}
                  className="text-black hover:text-emerald-500 transition relative group block"
                >
                  <p>Contact</p>
                  <span className="absolute left-0 right-0 -bottom-0.5 h-1 bg-emerald-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </Link>
              </li>

              <li>
                <Link
                  href="#AboutUs"
                  onClick={toggleMobileMenu}
                  className="text-black hover:text-emerald-500 transition relative group block"
                >
                  <p>About Us</p>
                  <span className="absolute left-0 right-0 -bottom-0.5 h-1 bg-emerald-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </Link>
              </li>

              <li>
                <button
                  onClick={handleMonadnocksFoundation}
                  className="text-black hover:text-emerald-500 transition relative group w-full text-left"
                >
                  <p>Monadnocks Foundation</p>
                  <span className="absolute left-0 right-0 -bottom-0.5 h-1 bg-emerald-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Show Toast */}
      {showToast && (
        <ShopComingSoonToast
          message="We're working hard to bring this page to you soon. Stay tuned!"
          onClose={() => setShowToast(false)}
        />
      )}
    </nav>
  );
}

export default NavBar;
