import React, { useState, useEffect } from 'react';
import { ShoppingBag, Book, Car, Smile, Heart } from 'lucide-react';

const ProductCard = ({ title, description, icon: Icon, color }) => (
  <div  className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl border-t-4 ${color}`}>
    <div className="p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className={`${color} rounded-full p-3 transition-colors duration-300`}>
          <Icon className="h-6 w-6 text-black" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
    <div className="bg-gray-50 px-6 py-4 flex justify-between items-center">
      <a href="#" className='text-green-500 hover:text-bg-green-800 '>
        Use Now →
      </a>
      <Heart className="h-5 w-5 text-red-400 cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-125" />
    </div>
  </div>
);

const HappinessGauge = ({ value }) => (
  <div className="flex items-center gap-2 mb-8">
    <Smile className="h-8 w-8 text-yellow-400" />
    <div className="bg-gray-200 h-4 flex-grow rounded-full overflow-hidden">
      <div 
        className="bg-gradient-to-r from-yellow-300 to-yellow-500 h-full transition-all duration-1000 ease-out"
        style={{ width: `${value}%` }}
      ></div>
    </div>
    <span className="font-semibold text-gray-700">{value}% Happier</span>
  </div>
);


const ProductShowcase = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [happinessLevel, setHappinessLevel] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => setHappinessLevel(99), 500);
    return () => clearTimeout(timer);
  }, []);

  const products = [
    {
      title: "F2 (Fast and Fair)",
      description: "Revolutionize your online shopping experience with premium products at unbeatable prices. Enjoy top-quality items for 30-40% less, because luxury shouldn't break the bank.",
      icon: ShoppingBag,
      color: "border-blue-500"
    },
    {
      title: "PaperPix",
      description: "Unleash your creativity with PaperPix! Get premium notebooks at jaw-dropping prices, and turn your ideas into art with fully customizable covers. Your imagination, our unbeatable value.",
      icon: Book,
      color: "border-green-500"
    },
    {
      title: "CareCab",
      description: "Redefine your ride with CareCab. Experience hassle-free booking, plush comfort, and thoughtful amenities like complimentary water. Clean, cozy, and care in every journey.",
      icon: Car,
      color: "border-purple-500"
    }
  ];


  return (
    <section id="Services" className=" py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-4 text-gray-800 animate-bounce">
          Elevate Your Everyday
        </h2>
        <p className="text-2xl text-center mb-12 text-gray-600">
          Discover how Monadnocks is revolutionizing daily experiences and spreading happiness!
        </p>
        
        <HappinessGauge value={happinessLevel} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <div 
              key={index} 
              className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{transitionDelay: `${index * 200}ms`}}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;