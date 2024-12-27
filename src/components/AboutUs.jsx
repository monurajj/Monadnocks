import Image from "next/image";
import MonuImage from "../assets/monu.png";
import RajaImage from "../assets/rajababu.jpeg";
import SonuImage from "../assets/sonu.png";

const AboutUs=()=>{
    return(
        <div id="AboutUs" className="container mx-auto px-6 lg:px-16 py-12 lg:py-24 ">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-12 text-center">
          Know More About Us
        </h1>
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Raj Bhushan Raj */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center lg:w-1/3">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
              <Image
                className="w-full h-full object-cover"
                src={RajaImage}
                alt="Raj Bhushan Raj"
              />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Raj Bhushan Raj - Co-founder & CEO
            </h2>
            <p className="text-gray-600">
              Raj Bhushan Raj is responsible for handling marketing on the
              ground and managing the daily financial operations. His leadership
              ensures the smooth running of our business.
            </p>
          </div>

          {/* Sonu Rajj */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center lg:w-1/3">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
              <Image
                className="w-full h-full object-cover"
                src={SonuImage}
                alt="Sonu Rajj"
              />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Sonu Rajj - Co-founder & Head of Marketing
            </h2>
            <p className="text-gray-600">
              Sonu Rajj oversees the marketing team, ensuring that our brand
              reaches the right audience. His strategies drive the growth and
              visibility of our company.
            </p>
          </div>

          {/* Monu Rajj */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center lg:w-1/3">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
              <Image
                className="w-full h-full object-cover"
                src={MonuImage}
                alt="Monu Rajj"
              />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Monu Rajj - Co-founder & CTO
            </h2>
            <p className="text-gray-600">
              Monu Rajj is in charge of overall development, focusing on
              technology and the company&apos;s future growth. He ensures we
              stay ahead in innovation and development.
            </p>
          </div>
        </div>
      </div>
    )
}

export default AboutUs;