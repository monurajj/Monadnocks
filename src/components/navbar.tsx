import React from "react";
import Image from "next/image";
import logoImage from "../assets/logoImage.jpeg";

function NavBar() {
  return (
    <nav className="sticky z-[100] inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all flex items-center justify-center">
      <div className="flex items-center ml-4">
        <Image
          className="w-12 h-12 object-cover rounded-full"
          src={logoImage}
          alt="Logo Image"
        />
      </div>

      <div>
        <ul>
            <li>
                home
            </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
