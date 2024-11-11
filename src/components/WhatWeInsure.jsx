import Image from "next/image";
import deliveryImage from "../assets/DeliveryBoy01.png";


const WhatWeInsure =()=>{
    return(
        <div id="" className=" container mx-auto px-6 lg:px-16 flex flex-col-reverse lg:flex-row items-center justify-between py-12 lg:py-24 bg-green-100/75 gap-20">
        {/* Profile Image */}
        <div className="lg:w-1/2 w-full flex justify-center lg:justify-end gap-4">
          <div
            className="w-60 h-60 sm:w-72 sm:h-72 lg:w-[30rem] lg:h-[30rem] overflow-hidden"
            style={{
              borderTopLeftRadius: "50%",
              borderBottomLeftRadius: "50%",
              borderTopRightRadius: "2rem",
              borderBottomRightRadius: "2rem",
            }}
          >
            <Image
              className="w-full h-full object-cover"
              src={deliveryImage}
              alt="Profile Image"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 w-full lg:pr-12 mt-8 lg:mt-0 text-center lg:text-left">
          <h1 className="text-3xl sm:text-3xl lg:text-4xl text-gray-800 mb-4 lg:mb-6 leading-tight">
            What we insure to provide
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-6 lg:mb-8 leading-relaxed">
            We offer top-quality essentials at the best prices, ensuring
            affordability for everyone. Our commitment goes beyond savings, as
            we reinvest a significant portion of our profits to support and
            uplift communities.
          </p>

          {/* Checkmarks */}
          <ul className="text-base sm:text-lg text-gray-700 space-y-3 mb-6 lg:mb-8">
            <li className="flex items-start">
              <span className="mr-2 text-green-500">✔</span> Best Possible Price
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-green-500">✔</span> No compromise with
              quality
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-green-500">✔</span> Get your order in
              less than an hour
            </li>
          </ul>

          <div className="flex justify-center lg:justify-start">
            <button className=" text-green-500 text-base sm:text-lg font-semibold rounded-lg py-3 px-6 sm:px-8 shadow-lg transform hover:scale-105 transition-transform duration-200 border-2 border-green-500">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    )
}

export default WhatWeInsure;