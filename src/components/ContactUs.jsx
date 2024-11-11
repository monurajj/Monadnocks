import { useState } from "react";
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaTwitter } from "react-icons/fa";

const ContactUs = () => {
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    fetch(
      "https://script.google.com/macros/s/AKfycbyakfRKP3xXSgayZqbVAGeL1eJMdTafrAxbdj76j0oTByK9GVSziaHG3RV4gVOZ1R63/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => {
        setMessage("Message sent successfully");
        setErrorMessage("");
        setTimeout(() => {
          setMessage("");
          form.reset();
        }, 3000); // Display message for 3 seconds
      })
      .catch((error) => {
        console.error("Error!", error.message);
        setErrorMessage("Failed to send message. Please try again.");
      });
  };

  return (
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
                aria-label="Email"
              >
                monu2feb2004@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-4 mt-4">
              <FaPhone />
              <a href="tel:7541062514" className="hover:underline" aria-label="Phone number">
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
                aria-label="Location"
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
            {errorMessage && (
              <p className="mt-4 text-red-600 font-semibold">{errorMessage}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
