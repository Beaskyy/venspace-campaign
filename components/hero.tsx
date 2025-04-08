"use client";

import { slides } from "@/lib/data";
import { useState, useEffect } from "react";
import { Search } from "./search";
import { Header } from "./header";

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideCount = slides.length;

  // Automatically move to the next slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideCount);
    }, 5000);
    return () => clearInterval(interval);
  }, [slideCount]);

  return (
    <div className="relative w-full h-[790px] overflow-hidden">
      <div className="md:flex hidden absolute z-50 top-[470px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <Search />
      </div>
   
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${slide.image})` }}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out bg-cover bg-center ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,33,67,0.32)] via-[rgba(0,0,0,0.39)] to-[rgba(0,33,67,0.32)]"></div>
            <Header />
            <div className="flex flex-col justify-center items-center gap-12 mt-[170px]">
              <h1 className="lg:text-[64px] text-3xl md:text-6xl max-w-[893px] text-center text-white font-bold z-10">
                {slide.text}{" "}
                <span className="text-[#FDF1C3]">{slide.highlight}</span>
                {slide.afterText ? ` ${slide.afterText}` : ""}
              </h1>
            </div>
          </div>
        ))}
      </div>

      {/* Dots with progress bar for active dot */}
      <div className="absolute lg:bottom-[142px] bottom-24 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`relative ${
              currentSlide === index ? "w-10 h-1.5" : "w-1.5 h-1.5"
            } rounded-full bg-[#D9D9D9] overflow-hidden transition-all duration-500 ease-out`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {currentSlide === index && (
              <span
                className="absolute inset-0 bg-white animate-progress"
                style={{ animationDuration: "5s" }} // Same duration as the interval
              />
            )}
          </button>
        ))}
      </div>

      <style jsx>{`
        .animate-progress {
          animation: progress-animation linear forwards;
        }
        @keyframes progress-animation {
          0% {
            width: 0;
          }
          100% {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};
