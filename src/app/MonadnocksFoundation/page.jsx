"use client";
import React, { useState, useEffect } from "react";

export default function LandingPage() {

  return (
    <div className="w-full max-w-4xl mx-auto">
      <svg viewBox="0 0 800 1200" xmlns="http://www.w3.org/2000/svg">
        {/* Background Gradient */}
        <defs>
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#eab308" stopOpacity="1" />
            <stop offset="100%" stopColor="#15803d" stopOpacity="1" />
          </linearGradient>

          {/* Abstract Beam Pattern */}
          <pattern
            id="beamPattern"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 100 L100 0"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="20"
            />
          </pattern>
        </defs>

        {/* Main Background */}
        <rect width="800" height="1200" fill="url(#bgGradient)" />
        <rect width="800" height="1200" fill="url(#beamPattern)" />

        {/* Logo */}
        <g transform="translate(350, 100)">
          <circle cx="50" cy="50" r="40" fill="white" opacity="0.9" />
          <text
            x="50"
            y="65"
            textAnchor="middle"
            fill="#15803d"
            fontSize="60"
            fontWeight="bold"
          >
            M
          </text>
        </g>

        {/* Main Headline */}
        <g transform="translate(400, 250)">
          <text
            textAnchor="middle"
            fill="white"
            fontSize="60"
            fontWeight="bold"
          >
            Launching Soon! 🚀
          </text>
        </g>

        {/* Subheading */}
        <g transform="translate(400, 320)">
          <text textAnchor="middle" fill="white" fontSize="32" fontWeight="300">
            Innovating Lives, Building Dreams
          </text>
        </g>

        {/* Product Launch Info */}
        <g transform="translate(400, 450)">
          <rect
            x="-250"
            y="-40"
            width="500"
            height="80"
            rx="40"
            fill="white"
            opacity="0.1"
          />
          <text
            textAnchor="middle"
            fill="white"
            fontSize="28"
            fontWeight="bold"
          >
            First Product Launch for BPSC Aspirants
          </text>
        </g>

        {/* Launch Date */}
        <g transform="translate(400, 550)">
          <text
            textAnchor="middle"
            fill="#fde047"
            fontSize="36"
            fontWeight="bold"
          >
            14th January
          </text>
          <text textAnchor="middle" y="45" fill="#fde047" fontSize="24">
            Makar Sankranti
          </text>
        </g>

        {/* Educational Icons */}
        <g transform="translate(200, 650)">
          {/* Book Icon */}
          <rect x="-30" y="-20" width="60" height="40" fill="white" rx="5" />
          <path d="M-20 -15 L20 -15" stroke="#15803d" strokeWidth="3" />
          <path d="M-20 -5 L20 -5" stroke="#15803d" strokeWidth="3" />
          <path d="M-20 5 L20 5" stroke="#15803d" strokeWidth="3" />
        </g>

        <g transform="translate(400, 650)">
          {/* Graduation Cap */}
          <path d="M-25 0 L0 -15 L25 0 L0 15 Z" fill="white" />
          <rect x="-5" y="-20" width="10" height="10" fill="white" />
        </g>

        <g transform="translate(600, 650)">
          {/* Progress Chart */}
          <path
            d="M-25 25 L-15 15 L0 20 L15 0 L25 10"
            stroke="white"
            strokeWidth="3"
            fill="none"
          />
        </g>

        {/* Tagline */}
        <g transform="translate(400, 750)">
          <text
            textAnchor="middle"
            fill="white"
            fontSize="24"
            fontStyle="italic"
          >
            "Quality Meets Affordability"
          </text>
        </g>

        {/* Call to Action */}
        <g transform="translate(400, 850)">
          <rect
            x="-100"
            y="-30"
            width="200"
            height="60"
            rx="30"
            fill="#fde047"
          />
          <text
            textAnchor="middle"
            y="10"
            fill="#15803d"
            fontSize="24"
            fontWeight="bold"
          >
            Stay Tuned!
          </text>
        </g>

        {/* Contact Information */}
        <g transform="translate(400, 950)">
          <text textAnchor="middle" fill="white" fontSize="18">
            For more information, email us at:
          </text>
          <text textAnchor="middle" y="30" fill="#fde047" fontSize="20">
            contactmonadnocks@gmail.com
          </text>
        </g>

        {/* Bottom Wave */}
        <path
          d="M0 1100 Q200 1050 400 1100 Q600 1150 800 1100 L800 1200 L0 1200 Z"
          fill="rgba(255,255,255,0.1)"
        />
      </svg>
    </div>
  );
}
