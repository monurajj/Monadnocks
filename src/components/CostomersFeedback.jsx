import Image from "next/image";
import customerImage01 from "../assets/rhytham.png";
import customerImage02 from "../assets/rhytham.png";
import customerImage03 from "../assets/rhytham.png";

const CostomersFeedback=()=>{
    return(
        <div className="container mx-auto px-6 lg:px-16 flex flex-col-reverse lg:flex-row items-center justify-between py-12 lg:py-24">
        <div className="container mx-auto px-6 lg:px-16 py-12 lg:py-24">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-12 text-center">
            What our customers say about us
          </h1>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Customer 1 */}
            <div className="w-full lg:w-1/3 p-6 bg-white shadow-lg rounded-lg border border-gray-200 flex flex-col justify-between min-h-[20rem]">
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    className="w-full h-full object-cover"
                    src={customerImage01}
                    alt="Customer Image 01"
                  />
                </div>
                <div className="ml-4">
                  <h2 className="text-lg font-semibold text-gray-800">
                    Rajiv Kumar
                  </h2>
                  <p className="text-gray-600">Vill-Purhara</p>
                  <div className="flex items-center mt-2">
                    <span className="text-yellow-500 text-xl">
                      ⭐️⭐️⭐️⭐️
                    </span>
                    <span className="text-gray-800 ml-2 text-lg">4.0</span>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-gray-700 leading-relaxed flex-grow">
                I am extremely satisfied with the products and services provided
                by Monadnocks. The delivery was quick, and the quality is
                top-notch. Highly recommended!
              </p>
            </div>

            {/* Customer 2 */}
            <div className="w-full lg:w-1/3 p-6 bg-white shadow-lg rounded-lg border border-gray-200 flex flex-col justify-between min-h-[20rem]">
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    className="w-full h-full object-cover"
                    src={customerImage02}
                    alt="Customer Image 02"
                  />
                </div>
                <div className="ml-4">
                  <h2 className="text-lg font-semibold text-gray-800">
                    Avinash Kumar
                  </h2>
                  <p className="text-gray-600">Vill-Purhara</p>
                  <div className="flex items-center mt-2">
                    <span className="text-yellow-500 text-xl">
                      ⭐️⭐️⭐️⭐️⭐️
                    </span>
                    <span className="text-gray-800 ml-2 text-lg">5.0</span>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-gray-700 leading-relaxed flex-grow">
                Monadnocks has exceeded my expectations. The prices are
                unbeatable, and their community-focused approach is truly
                inspiring.
              </p>
            </div>

            {/* Customer 3 */}
            <div className="w-full lg:w-1/3 p-6 bg-white shadow-lg rounded-lg border border-gray-200 flex flex-col justify-between min-h-[20rem]">
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    className="w-full h-full object-cover"
                    src={customerImage03}
                    alt="Customer Image 03"
                  />
                </div>
                <div className="ml-4">
                  <h2 className="text-lg font-semibold text-gray-800">
                    Rhythm Jain
                  </h2>
                  <p className="text-gray-600">Vill-Purhara</p>
                  <div className="flex items-center mt-2">
                    <span className="text-yellow-500 text-xl">
                      ⭐️⭐️⭐️⭐️½
                    </span>
                    <span className="text-gray-800 ml-2 text-lg">4.5</span>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-gray-700 leading-relaxed flex-grow">
                Fast delivery, great quality, and wonderful customer service.
                Monadnocks is my go-to for essentials!
              </p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default CostomersFeedback;