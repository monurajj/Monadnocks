import {
  ArrowRight,
  Book,
  Car,
  Heart,
  Leaf,
  ShoppingBag,
  Users,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ShopComingSoonToast from "./ShopComingSoonToast";

function OurProducts() {
  const [hoveredLeft, setHoveredLeft] = useState(false);
  const [hoveredRight, setHoveredRight] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const router = useRouter();

  const handleShopNowClick = () => {
    setShowToast(true);
    // Use a cleanup function to prevent memory leaks
    const timer = setTimeout(() => {
      setShowToast(false);
    }, 10000);
    return () => clearTimeout(timer);
  };

  const handleMonadnocksFoundation = () => {
    router.push("https://monadnocks-foundation-page.vercel.app/");
  };

  // Ensure toast closes properly
  const handleCloseToast = () => {
    setShowToast(false);
  };

  const businessProducts = [
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      name: "F2 (Fast and Fair)",
      description:
        "Premium products at unbeatable prices, 30-40% less than market rates",
    },
    {
      icon: <Book className="w-6 h-6" />,
      name: "PaperPix",
      description: "Custom notebooks with premium quality at affordable prices",
    },
    {
      icon: <Car className="w-6 h-6" />,
      name: "CareCab",
      description: "Comfortable rides with complementary amenities",
    },
  ];

  const foundationInitiatives = [
    {
      icon: <Leaf className="w-6 h-6" />,
      name: "Environmental Programs",
      description: "100 Trees Plantation Challenge",
    },
    {
      icon: <Users className="w-6 h-6" />,
      name: "Education & Sports",
      description: "Youth development through learning and athletics",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      name: "Community Welfare",
      description: "Women empowerment and cultural programs",
    },
  ];

  return (
    <div
      className="text-black min-h-screen flex flex-col md:flex-row py-12 relative"
      id="Services"
    >
      {/* Left Side - Monadnocks Business */}
      <div
        className="w-full md:w-1/2 min-h-screen bg-gradient-to-b from-blue-50 to-white p-8 relative transition-all duration-300"
        onMouseEnter={() => setHoveredLeft(true)}
        onMouseLeave={() => setHoveredLeft(false)}
      >
        <div className="max-w-xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-blue-600 mb-4">
              Monadnocks
            </h2>
            <p className="text-gray-600 text-lg">
              Innovative Solutions for Better Living
            </p>
          </div>

          <div className="space-y-8 mb-12">
            {businessProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                    {product.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600">{product.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={handleShopNowClick}
              className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors flex items-center gap-2 mx-auto"
            >
              Explore Products
              <ArrowRight
                className={`w-4 h-4 transition-transform duration-300 ${
                  hoveredLeft ? "translate-x-1" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Right Side - Monadnocks Foundation */}
      <div
        className="w-full md:w-1/2 min-h-screen bg-gradient-to-b from-purple-50 to-white p-8 relative transition-all duration-300"
        onMouseEnter={() => setHoveredRight(true)}
        onMouseLeave={() => setHoveredRight(false)}
      >
        <div className="max-w-xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-purple-600 mb-4">
              Monadnocks Foundation
            </h2>
            <p className="text-gray-600 text-lg">
              Transforming Communities Together
            </p>
          </div>

          <div className="space-y-8 mb-12">
            {foundationInitiatives.map((initiative, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-100 rounded-lg text-purple-600">
                    {initiative.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {initiative.name}
                    </h3>
                    <p className="text-gray-600">{initiative.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={handleMonadnocksFoundation}
              className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors flex items-center gap-2 mx-auto"
            >
              Explore Initiatives
              <ArrowRight
                className={`w-4 h-4 transition-transform duration-300 ${
                  hoveredRight ? "translate-x-1" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Toast Component */}
      {showToast && (
        <div className="fixed top-4 right-4 w-full z-50">
          <ShopComingSoonToast
            message="We're working hard to bring this page to you soon. Stay tuned!"
            onClose={handleCloseToast}
          />
        </div>
      )}
    </div>
  );
}

export default OurProducts;
