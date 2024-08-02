import React, { useState } from 'react';
import company from '../assets/company.png';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import abs from '../assets/abs.png';
import amole from '../assets/Amole.png';
import birr from '../assets/birr.png';
import dashen from '../assets/Dashen.png';
import link from '../assets/linkup.png';
import hibret from '../assets/hibret.png';
import ngd from '../assets/ngd.png';
import moya from '../assets/Moya.png';
import tele from '../assets/tele.png';
import purpose from '../assets/purpose.png'


function Company() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [abs, amole, birr, dashen, link, hibret, ngd, moya, tele, purpose];
  const slidesPerRow = 4;

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? Math.floor((images.length - 1) / slidesPerRow) * slidesPerRow : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === Math.floor((images.length - 1) / slidesPerRow) * slidesPerRow ? 0 : prevIndex + 1));
  };

  return (
    <div class="justify-center md:py-24">
    <div class="w-full bg-white flex flex-col justify-between md:p-0 p-6">
      <div class="max-w-[1240px] m-auto">
        <div class="relative">
          <img src={company} alt="" class="h-96 w-full md:block hidden" />
          <div class=" md:ml-0 md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:text-center">
            <p class="md:text-3xl font-bold text-black text-2xl md:mt-10 ">
              You're in <span class="text-[#50E690]">Great</span> Company.
            </p>
            <p class="text-black mt-2 md:mt-4 md:text-sm md:ml-4 text-xs">
              We're honored to provide a quality web hosting service all over Ethiopia.
              Here are some of our esteemed clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  
    <div class="relative mt-8 md:hidden ml-10">
      <div class="flex justify-center items-center">
        <button
          class=" font-bold py-2 px-4 text-2xl "
          onClick={prevSlide}
        >
          <FaArrowLeft />
        </button>
        <div class="grid grid-cols-2 grid-rows- gap-4 w-[100%]">
          {images.slice(currentIndex, currentIndex + 4).map((image, index) => (
            <div key={index} class="flex-shrink-0">
              <img src={image} alt={`Slide ${index + currentIndex}`} class="h-32 mx-auto" />
            </div>
          ))}
        </div>
        <button
          class="text-2xl font-bold py-2 px-4 "
          onClick={nextSlide}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  </div>
  );
}

export default Company;