import React, { useState } from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";

const PricingPlan = ({ id, title, description, features, price }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`group bg-white shadow-md rounded-3xl hover:bg-[#020887] hover:duration-500 hover:text-white p-6 m-4 w-64 relative ${isFlipped ? 'card-parent' : 'card-parent-initial'}`}
    >
      

      <div className={`${isFlipped ? 'card-back' : 'card-front'}`}>
        {/* Card front content */}
        <div className="relative  flex items-center justify-between ">
        <h4 className="text-2xl font-bold mb-4">{id}</h4>
        <BsBoxArrowUpRight className="text-1xl absolute right-0 cursor-pointer text-white group-hover:text-[#50E690]" onClick={handleFlip} />
      </div>
      
        <div className='card-front'>
          <h3 className="text-2xl font-bold text-blue-900 group-hover:text-[#50E690]">{title}</h3>
          <p className="text-gray-400">{description}</p>
          <ul className="mt-4 space-y-2 list-disc pl-4 text-sm">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <p className="text-md font-bold text-blue-900 mt-10 group-hover:text-[#50E690]">{price}</p>
         
        </div>
      
       
      
      </div>
      
      
     
    </div>
  );
};

const PricingPage = () => {
  const pricingPlans = [
    {
      id: "01",
      title: 'Standard',
      description: 'Great Choice for Personal Uses',
      features: [
        '60 GB NVMe Storage',
        '2 GB RAM & 2 CPU Cores',
        '500 GB Bandwidth',
        '10 Databases and Email accounts',
        'Host 5 Websites',
      ],
      price: '273 birr/month',
    },
    {
      id: "02",
      title: 'Professional',
      description: 'Best For Developers',
      features: [
        '680 GB NVMe Storage',
        '2 GB RAM & 2 CPU Cores',
        'Unlimited Bandwidth',
        'Unlimited Databases and Email accounts',
        'Host 10 Websites',
      ],
      price: '330 birr/month',
    },
    {
      id: "03",
      title: 'Enterprise',
      description: 'Best For Business',
      features: [
        '125 GB NVMe Storage',
        '2 GB RAM & 2 CPU Cores',
        'Unlimited Bandwidth',
        'Unlimited Databases and Email accounts',
        'Host 13 Websites',
      ],
      price: '410 birr/month',
    },
    {
      id: "04",
      title: 'Enterprise PLUS',
      description: 'Best for Large Website',
      features: [
        '60 GB NVMe Storage',
        '4 GB RAM & 2 CPU Cores',
        'Unlimited GB Bandwidth',
        'Unlimited Databases and Email accounts',
        'Host 15 Websites',
      ],
      price: '485 birr/month',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? pricingPlans.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === pricingPlans.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="justify-center md:p-24  p-6">
    <div className="w-full bg-white flex flex-col justify-between  ">
      <div className='grid md:grid-cols-2 max-w-[1240px] m-auto  '>
        <div className='flex flex-col justify-center md:items-start w-full px-2 py-6 '>
          <p className="font-semibold text-[#4A6D7C] mt-16">- Price Plan</p>
          <p className='md:text-4xl font-bold text-2xl item-center '><span className='text-[#50E690]'>Fastest</span> Web Hosting in Ethiopia.</p>
        </div>
      </div>
      <div className='py-3 md:mb-5 items-center md:ml-2 text-xs md:text-sm '>
        <p><span className='font-bold'>Planning to Have Your Website? You're at The Right Place!</span> <br />
          Check Our Affordable Web Hosting Packages and Go with The One That Suits Your Needs.</p>
      </div>
    </div>



      <div className="flex justify-center items-center mt-10 md:hidden">
        <div className="flex justify-center items-center">
          <FaArrowLeft className="text-2xl cursor-pointer " onClick={handlePrev} />
          <PricingPlan
            key={pricingPlans[currentIndex].id}
            id={pricingPlans[currentIndex].id}
            title={pricingPlans[currentIndex].title}
            description={pricingPlans[currentIndex].description}
            features={pricingPlans[currentIndex].features}
            price={pricingPlans[currentIndex].price}
          />
          <FaArrowRight className="text-2xl cursor-pointer ml-8" onClick={handleNext} />
        </div>
      </div>

      <div className='hidden md:flex justify-center mt-10'>
        {pricingPlans.map((plan, index) => (
          <PricingPlan
            key={index}
            id={plan.id}
            title={plan.title}
            description={plan.description}
            features={plan.features}
            price={plan.price}
          />
        ))}
      </div>

      <p className='text-sm font-bold ml-20 mt-6 cursor-pointer hover:text-[#50E690] mb-20'>Explore all price plans</p>
    </div>
  );
};

export default PricingPage;

