import React, { useState } from "react";
import { TbServer } from "react-icons/tb";
import gua from "../assets/img1.png"
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const Learn = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const servers = [
    { name: "HahuCloud Server 1 - UK", active: true },
    { name: "HahuCloud Server 2 - UK", active: false },
    { name: "HahuCloud Server 3 - UK", active: false },
  ];

  const handleNextServer = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % servers.length);
  };

  const handlePrevServer = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + servers.length) % servers.length);
  };

  return (
    <div className="w-full bg-white flex flex-col justify-between md:p-24 p-6 ">
      <div className='flex flex-col justify-center md:items-start w-full px-2 py-6'>
        <p className="font-semibold text-[#4A6D7C]">- Learn more</p>
        <p className='md:text-4xl font-bold text-2xl item-center'>99.9% Uptime <span className="text-[#50E690]">Guarantee</span>.</p>
      </div>

      <div className='md:ml-5 md:text-sm text-xs'>
        <p><span className='font-bold'>DON'T YOU HATE DOWNTIME? WHO DOESN'T? We Make Sure That Your Website is Always Up and Running.</span> <br />
        Our server status page is updated in real-time, providing immediate access to downtime or alerts from one central location.</p>
        <p className="font-semibold text-[#1E3888] text-sm mt-4">Transparent Uptime Reports</p>
      </div>

      {/* Mobile view */}
      <div className="md:hidden mt-10 flex flex-col items-center">
        <img src={gua} alt="" className="w-56 h-56" />
        <div className="flex justify-between items-center mb-6 mt-6">
          <button onClick={handlePrevServer}>
            <FaArrowLeft className="text-2xl mr-4" />
          </button>
          <div className="items-center flex space-x-4">
            <div className="relative">
              <div className="absolute -bottom-0.5 right-74 ml-7 bg-[#71fcad] w-5 h-5 rounded-full"></div>
              <TbServer className="text-5xl" />
            </div>
            <p>{servers[currentIndex].name}</p>
          </div>
          <button onClick={handleNextServer}>
            <FaArrowRight className="text-2xl ml-4" />
          </button>
        </div>
        <button className="flex items-center justify-center text-xs font-bold rounded-3xl bg-[#50E690] hover:bg-[#29804f] py-2 px-4 hover:duration-300 mt-10 w-auto md:text-sm md:py-2 md:px-7 md:mx-0 mx-auto ">
Check Server Status
</button>
      </div>

      {/* Desktop view */}
      <div className=" grid-cols-3 hidden md:grid">
        <div>
          <div className="items-center  mt-6 mb-10 flex space-x-4">
            <div className="relative">
              <div className="absolute -bottom-0.5 right-74 ml-7 bg-[#71fcad] w-5 h-5 rounded-full"></div>
              <TbServer className="text-5xl" />
            </div>
            <p>HahuCloud Server 1 - UK</p>
          </div>
          <div className="items-center  mt-6 mb-10 flex space-x-4">
            <div className="relative">
              <div className="absolute -bottom-0.5 right-74 ml-7 bg-[#71fcad] w-5 h-5 rounded-full"></div>
              <TbServer className="text-5xl" />
            </div>
            <p>HahuCloud Server 2 - UK</p>
          </div>
          <button className="flex items-center justify-center text-xs font-bold rounded-3xl bg-[#50E690] hover:bg-[#29804f] py-2 px-4 hover:duration-300 mt-10 w-auto md:text-sm md:py-2 md:px-7 md:mx-0 mx-auto ">
            Check Server Status
          </button>
        </div>
        <div>
          <div className="items-center  mt-6 mb-10 flex space-x-4">
            <div className="relative">
              <div className="absolute -bottom-0.5 right-74 ml-7 bg-[#71fcad] w-5 h-5 rounded-full"></div>
              <TbServer className="text-5xl" />
            </div>
            <p>HahuCloud Server 3 - UK</p>
          </div>
        </div>
        <div className="">
          <img src={gua} alt="" className=" md:w-64 md:h-64 " />
        </div>
      </div>
    </div>
  );
};

export default Learn;