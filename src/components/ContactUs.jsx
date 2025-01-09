import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const ContactUs = () => {
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // New state for loading

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading to true when submission starts

    emailjs
      .sendForm(
        "service_r61kpfu", // Replace with your EmailJS Service ID
        "template_nh68txa", // Replace with your EmailJS Template ID
        e.target,
        "PUYULeXlwF1-NbWZN" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          setMessage("Message sent successfully");
          setErrorMessage("");
          setIsLoading(false); // Stop loading when submission is successful
          setTimeout(() => {
            setMessage("");
            e.target.reset(); // Reset form after successful submission
          }, 2000);
        },
        (error) => {
          console.error("Error!", error.text);
          setErrorMessage("Failed to send message. Please try again.");
          setIsLoading(false); // Stop loading when there's an error
        }
      );
  };

  return (
    <div
      className="container mx-auto px-6 lg:px-16 py-12 lg:py-24"
      id="Contact"
    >
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-12 text-center">
        Contact Us
      </h1>

      <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Left Div */}
        <div className="flex flex-col items-center p-4 md:p-8 w-full max-w-4xl mx-auto space-y-4 md:space-y-8 lg:w-2/3">
          <div className="w-full md:w-2/3 p-4 md:p-6 rounded-lg shadow-lg bg-white">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center text-black">
              Get in Touch
            </h2>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center justify-center space-x-3">
                <FaEnvelope className="text-black" size={16} />
                <a
                  href="mailto:contactmonadnocks@gmail.com"
                  className="text-black hover:underline text-sm md:text-base"
                  aria-label="Email"
                >
                  contactmonadnocks@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <FaPhone className="text-black" size={16} />
                <a
                  href="tel:7541062514"
                  className="text-black hover:underline text-sm md:text-base"
                  aria-label="Phone number"
                >
                  7541062514
                </a>
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/3 p-4 md:p-6 rounded-lg shadow-lg bg-white">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center text-black">
              Location
            </h2>
            <div className="flex items-center justify-center space-x-3">
              <FaMapMarkerAlt className="text-black" size={16} />
              <a
                href="https://www.google.com/maps/@25.093859,84.5864697,213m/data=!3m1!1e3?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:underline text-sm md:text-base text-center"
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
            name="contact_form"
            onSubmit={handleSubmit}
          >
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="user_name" // Match this with EmailJS template variable
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
                name="user_email" // Match this with EmailJS template variable
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
                name="message" // Match this with EmailJS template variable
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                rows="4"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isLoading} // Disable the button while loading
              >
                {isLoading ? (
                  <div className="flex justify-center items-center">
                    <div className="w-4 h-4 border-4 border-t-transparent border-green-500 rounded-full animate-spin"></div>
                  </div>
                ) : (
                  "Send Message"
                )}
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
