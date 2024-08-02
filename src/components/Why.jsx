import React, { useState } from "react";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { BsLightningCharge } from "react-icons/bs";
import { HiOutlineShieldExclamation } from "react-icons/hi2";
import { TbWorld } from "react-icons/tb";
import { FaAppStore } from "react-icons/fa";
import { TbWheel } from "react-icons/tb";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Why = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 5 : prevIndex - 1));
  };

  const handleSlideRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 5 ? 0 : prevIndex + 1));
  };

  const features = [
    {
      icon: AiOutlineDollarCircle,
      title: "Reasonable Price. High Service.",
      description:
        "We utilize top-of-the-range cloud technology, allowing us to keep costs down and provide 5-Star performance.",
    },
    {
      icon: BsLightningCharge,
      title: "Amazing Speed.",
      description:
        "We provide you Free CDN Powered by Cloudflare which can help you to speed up your website like never before.",
    },
    {
      icon: HiOutlineShieldExclamation,
      title: "Protection and Security",
      description:
        "With our amazing security features like Multi Factor Authentication, auto-enabled sFTP free secure hosting with Let's Encrypt.",
    },
    {
      icon: TbWorld,
      title: "Website Builder",
      description:
        "We have the best Website Builder tool, Just Drag & Drop to build your own website with no coding skill.",
    },
    {
      icon: FaAppStore,
      title: "200+ Free Apps",
      description:
        "Install Free Apps like wordpress, joomla and others from HahuCloud cPanel with few clicks for free",
    },
    {
      icon: TbWheel,
      title: "Great Support",
      description:
        "We are here anytime you need help 24/7/365 to assist you with any aspect of your hosting experience. (Live Chat 9:15 AM - 5:00 PM)",
    },
  ];

  return (
    <div className=" md:px-24 p-6">
      <div className="flex flex-col justify-center w-full md:px-2 md:py-8 px-1 py-4 ">
        <p className="md:text-4xl font-bold text-2xl item-center  mt-16  ">
          Why choose <span className="text-[#50E690]">us</span>
        </p>
        <p className="py-3 md:mb-5 items-center  text-xs md:text-sm ">
          Benefit from maximum availability, the best performance, and
          professional customer service. Allow us the opportunity to exceed your
          expectations.
        </p>
      </div>

      <div className="items-center grid md:grid-cols-3 gap-10   ">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`mb-auto  ${
              index === currentIndex
                ? "block"
                : "hidden md:block transition-all duration-500 transform  "
            }`}
          >
            <div className="relative flex justify-center">
              <div className="z-[-1] absolute -bottom-0.5 bg-[#71fcad] w-5 h-5 rounded-full "></div>
              <feature.icon className="text-5xl" />
            </div>
            <p className="text-sm font-bold text-center md:text-left">{feature.title}</p>

            {/* Mobile Arrow Icons */}
            <div className="flex justify-between items-center">
              <div
                className="md:hidden flex items-center cursor-pointer"
                onClick={handleSlideLeft}
              >
                <FaArrowLeft className="mr-10 text-2xl" />
              </div>
              <p className="text-xs mt-3 w-72 md:text-left text-center">{feature.description}</p>
              <div
                className="md:hidden flex items-center cursor-pointer"
                onClick={handleSlideRight}
              >
                <FaArrowRight className="ml-12 text-2xl" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Why;