  import React, { useState } from "react";
  import { BsStars } from "react-icons/bs";
  import { FaUnlockAlt } from "react-icons/fa";
  import { LuScreenShare } from "react-icons/lu";
  import { HiOutlineCreditCard } from "react-icons/hi2";

  const Service = () =>{

    const [showDetails, setShowDetails] = useState(false);

    const handleMouseOver = () => {
      setShowDetails(true)
    }

    const handleMouseOut =() => {

      setShowDetails(false)
    }
      return(
          <div className="w-full bg-white flex flex-col justify-between md:p-24 ">
              <div className='grid  grid-cols-1 md:grid-cols-3 max-w-[1240px]  bg-white'>
          <div className='flex flex-col justify-center col-span-1 md:items-start  px-2 py-8'>
              <p className="font-semibold text-[#4A6D7C]">- Services</p>
              <p className='md:text-4xl font-bold font-serif text-2xl item-center'>A <span className="text-[#50E690]">premier web hosting</span> service for reliable, secure, and fast hosting solutions. </p>
              <button class="flex items-center justify-center text-xs font-bold rounded-3xl bg-[#50E690] hover:bg-[#29804f] py-2 px-4 hover:duration-300 mt-4 max-w-[200px] md:max-w-none md:text-sm md:py-2 md:px-7 mx-auto">
    <span>Place Order</span>
    <HiOutlineCreditCard class="ml-2 text-base md:hidden" />
  </button>
          </div>
          <div className="text-xs md:text-sm  col-span-2 bg-white ">
          <p>HahuCloud, the leading provider of web hosting services,committed to providing our customers with reliable, secure, and affordable hosting solutions. Our team of experienced professionals is dedicated to ensuring that your website is up and running 24/7. </p>
          <div className="flex w-full mt-6">
            <div>
            <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className={`hover:text-white rounded-lg text-8xl md:text-4xl flex flex-col items-center gap-8  hover:bg-blue-800 w-[200px] hover:w-[300px] transition-all duration-500 overflow-hidden`}>
      
      <div className="min-w-[100px] mt-4"><BsStars /></div>
      <p className="text-lg ">Simplicity</p>
      <ul 
      className={`transition-all duration-500 overflow-hidden text-xs text-white ${!showDetails ? 'h-0' : 'h-[100px]'} `}
      ><li>cPanel Control Panel</li>
      <li>User-Friendly Dashboard</li>
      <li>200+ Free Web Apps</li>
      <li>Online File Manager</li>
      <li>Easy Domain Manager</li>
        </ul>
    </div>
            </div>
            <div>
            <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className={`hover:text-white rounded-lg text-8xl md:text-4xl flex flex-col items-center gap-8  hover:bg-blue-800 w-[200px] hover:w-[300px] transition-all duration-500 overflow-hidden`}>
      
      <div className="min-w-[100px] mt-4"><FaUnlockAlt /></div>
      <p className="text-lg">Safety</p>
      <ul 
      className={`text-white text-xs transition-all duration-500 overflow-hidden ${!showDetails ? 'h-0' : 'h-[100px]'} `}
      >
       <li>24/7 Expert Support</li>
      <li>Automated Backups</li>
      <li>Free SSL Certificate</li>
      <li>Brute Force Protection</li>
      <li>Refund Guarantee</li>
        </ul>
    </div>
            </div>
            <div>
            <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className={`hover:text-white rounded-lg text-8xl md:text-4xl flex flex-col items-center gap-8  hover:bg-blue-800 w-[200px] hover:w-[300px] transition-all duration-500 overflow-hidden`}>
      
      <div className="min-w-[100px] mt-4"><HiOutlineCreditCard /></div>
      <p className="text-lg">Performance</p>
      <ul 
      className={`text-white text-xs transition-all duration-500 overflow-hidden ${!showDetails ? 'h-0' : 'h-[100px]'} `}
      ><li>100% NVMe Storages</li>
      <li>Advanced Caching</li>
      <li>Free CDN by Cloudflare</li>
      <li>PHP 5.4 and 8.1 Support</li>
      <li>phpMyAdmin DB Control</li>  </ul>
    </div>
            </div>
   
    
  
  </div>
        
          </div>
          </div>

          
              
          </div>
      )
  }

  export default Service;