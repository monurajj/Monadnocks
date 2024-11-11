import React from 'react';
import Image from 'next/image';
import { ArrowRight, Target, Users, TrendingUp } from 'lucide-react';
import monadnocksTeamImg from "../assets/monadnocksTeam.jpg"

const MissionComponent = () => {
  const stats = [
    { icon: Target, label: 'Market Price Reduction', value: '30-40%' },
    { icon: Users, label: 'Communities Served', value: '50+' },
    { icon: TrendingUp, label: 'Growth Rate', value: '125%' }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 md:p-12 rounded-xl shadow-xl">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-slide-up">
            Shaping Tomorrow&apos;s Future
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6 animate-scale-in" />
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side - Image */}
          <div className="lg:w-1/2 animate-fade-in">
            <div className="relative transition-transform duration-500 hover:scale-105">
              <div className="absolute inset-0 bg-blue-600 rounded-xl transform rotate-6 opacity-20" />
              <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
                <Image
                  src={monadnocksTeamImg}
                  alt="Monadnocks Team"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:w-1/2 space-y-8 animate-slide-in">
            <div className="transform transition-all duration-500 hover:translate-x-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Monadnocks, we&apos;re dedicated to creating a brighter tomorrow through innovative solutions that enhance lives. Our commitment extends beyond profit margins &ndash; we prioritize meaningful impact, unwavering transparency, and universal accessibility.
              </p>
            </div>

            <div className="transform transition-all duration-500 hover:translate-x-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision Forward</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our roadmap is clear: continuous innovation and strategic expansion to reach more communities while maintaining our commitment to exceptional value. Through sustainable practices and customer-centric approaches, we&apos;re building a future where quality meets affordability.
              </p>
              <button className="group inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300">
                Learn More
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MissionComponent;