import React from "react";
import hero from "../assets/Hero-img.png"
import { FaSearch } from 'react-icons/fa';
import { IoMdCloudOutline } from "react-icons/io";
import { useState } from "react";

const Hero = () => {
  
    return(
        <div className='w-full  bg-white flex flex-col justify-between md:p-24'>
      <div className='grid md:grid-cols-2 '>
        <div className='flex flex-col justify-center md:items-start w-full  px-2 py-8'>
            <p className="font-semibold text-[#4A6D7C]">- HahuCloud</p>
            <p className='md:text-4xl font-bold font-serif text-2xl item-center'>Ethiopia's <span className="text-[#59FFA0]">Premium</span>
Web Hosting Provider. </p>
            <p className='py-3 md:mb-5 items-center text-xs'>We are using top servers for providing web hosting services in Ethiopia. Different hosting plans are available depending on the needs and requirements of yours.</p>

            <div className="bg-white border border-blue-800 rounded-full md:py-2 md:px-4 py-1 px-2 w-full  md:h-15 mt-6">
  <div className=" flex items-center justify-between">
    <div className="flex items-center relative">
      <IoMdCloudOutline className=" md:text-3xl text-5xl" />
      <input
        type="text"
        className="px-4 py-2 focus:outline-none w-full"
        placeholder="Search for your Domain Name"
      />
      <div className=" transform duration-200 transition-all ease-in-out">
      <select >
  <option value=".et">.et</option>
  <option value=".com">.com</option>
  <option value=".net">.net</option>
  <option value=".org">.org</option>
</select>
      </div>
   
    </div>
   
    <button className="md:flex ml-auto text-sm font-bold rounded-full md:rounded-3xl bg-[#50E690] hover:bg-[#29804f] py-2 px-6 hover:duration-300">
      <FaSearch className=" md:text-lg" />
      <span className="md:flex hidden">Search</span>
    </button>
  </div>
</div>


     
    
            </div>
        <div>
          <img src={hero} alt="Picture" className='h-60  md:ml-20 ml-7'/>
        </div>
        
      
      </div>
        
        
        
        
    </div>
    )
}
export default Hero;