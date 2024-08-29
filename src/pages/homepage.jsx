"use client"
import NavBar from "@/components/navbar";
import Image from "next/image";
import { useState } from "react";
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaTwitter } from "react-icons/fa";
import deliveryImage from "../assets/DeliveryBoy01.png";
import customerImage01 from "../assets/customerImage01.png";
import customerImage02 from "../assets/customerImage02.png";
import customerImage03 from "../assets/customerImage03.png";
import logoImage from "../assets/logoImage01.jpeg";
import MonuImage from "../assets/monu.png";
import RajaImage from "../assets/rajababu.jpeg";
import row1Image from "../assets/row1Image.png";
import SonuImage from "../assets/sonu.png";

function HomePage() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    fetch(
      "https://script.google.com/macros/s/AKfycbwr8TLDmqKd2I3BIMdK06Wwll2CQKnuF_-iMDuuVap4ULzxNudkHI743nvRiWZTSwFM/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => {
        setMessage("Message sent successfully");
        setTimeout(() => {
          setMessage("");
          form.reset();
        }, 3000); // 3000ms = 3 seconds
      })
      .catch((error) => console.error("Error!", error.message));
  };


  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      <NavBar />

      {/* First Row */}
      <div className="container mx-auto px-6 lg:px-16 flex flex-col-reverse lg:flex-row items-center justify-between py-12 lg:py-24" id="Home">
        {/* Text Section */}
        <div className="lg:w-1/2 w-full lg:pr-12 mt-8 lg:mt-0 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-4 lg:mb-6 leading-tight">
            Let’s work together now to build a brighter future
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-6 lg:mb-8 leading-relaxed">
            Offering essentials at unbeatable prices, with a significant portion
            of profits dedicated to charitable causes and launching our NGO to
            support communities.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="bg-green-600 text-white text-base sm:text-lg font-semibold rounded-lg py-3 px-6 sm:px-8 shadow-lg transform hover:scale-105 transition-transform duration-200">
              Shop Now
            </button>
          </div>
        </div>

        {/* Profile Image */}
        <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
          <div className="w-60 h-60 sm:w-72 sm:h-72 lg:w-[30rem] lg:h-[30rem] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              className="w-full h-full object-cover"
              src={row1Image}
              alt="Profile Image"
            />
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div id="Services" className=" container mx-auto px-6 lg:px-16 flex flex-col-reverse lg:flex-row items-center justify-between py-12 lg:py-24 bg-green-100/75 gap-20">
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

      {/* Third Row */}
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
                    John Doe
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
                    Jane Smith
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
                    Emily Davis
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

      {/* fourth Row */}
            

      {/* Fifth Row - Know More About Us */}
      <div id="AboutUs" className="container mx-auto px-6 lg:px-16 py-12 lg:py-24 bg-green-100/75">
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

      {/* Sixth Row - Contact Us */}
      <div className="container mx-auto px-6 lg:px-16 py-12 lg:py-24" id="Contact">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-12 text-center">
        Contact Us
      </h1>

      <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Left Div */}
        <div className="flex flex-col items-center text-white p-8 w-full lg:w-1/2 space-y-8">
          {/* Get in Touch */}
          <div className="p-6 rounded-lg shadow-lg flex flex-col items-center text-center w-full lg:w-2/3 bg-white text-black">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <div className="flex items-center space-x-4">
              <FaEnvelope />
              <a
                href="mailto:monu2feb2004@gmail.com"
                className="hover:underline"
              >
                monu2feb2004@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-4 mt-4">
              <FaPhone />
              <a href="tel:7541062514" className="hover:underline">
                7541062514
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="p-6 rounded-lg shadow-lg flex flex-col items-center text-center w-full lg:w-2/3 bg-white text-black">
            <h2 className="text-2xl font-semibold mb-4">Location</h2>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt />
              <a
                href="https://www.google.com/maps/@25.093859,84.5864697,213m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI0MDgyMy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Village-Purhara, Haspura Bihar 824120
              </a>
            </div>
          </div>
        </div>

        {/* Right Div */}
        <div className="flex flex-col justify-center p-8 w-full lg:w-1/2">
      <form
        className="space-y-6 text-black"
        name="submit-to-google-sheet"
        onSubmit={handleSubmit}
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Your Name"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email or Phone
          </label>
          <input
            type="text"
            name="emailOrPhone"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Your Email or Phone"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            name="message"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            rows="4"
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-600"
          >
            Send Message
          </button>
        </div>
        {message && (
          <p className="mt-4 text-green-600 font-semibold">{message}</p>
        )}
      </form>
    </div>
      </div>
    </div>

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
