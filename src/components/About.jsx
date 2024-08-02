import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { BsEnvelope } from "react-icons/bs";

const About = () => {
    return(
        <div className="w-full bg-white flex flex-col justify-between md:p-24 p-6 ">
            <div className='grid md:grid-cols-2 max-w-[1240px] m-auto '>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <p className='md:text-4xl font-bold font-serif text-2xl item-center'>About us</p>
                <p className='py-4 md:mb-5 items-center text-xs md:text-sm'><span className="font-bold">HahuClouds</span> ipsum dolor sit amet consectetur. Porta mattis mollis metus volutpat sed elementum netus. Auctor aliquet nisl porttitor sed faucibus mauris. Turpis facilisis mauris sit sit. Porttitor sapien nibh eu urna magna tincidunt donec sit posuere. Eget diam nulla faucibus ultrices ac arcu sed. Diam lacus orci amet vitae lectus auctor maecenas. Et sapien vel nec lorem orci tellus egestas phasellus. Nunc tristique pretium ut auctor. Amet nullam at integer magna nulla dictumst purus habitant imperdiet. Facilisis sit auctor risus blandit ipsum et id. Arcu pretium.</p>
            </div>
            <div className="md:px-24">
                    <p className='md:text-4xl font-bold text-2xl item-center '>Contacts</p>
                    <div>
                    <div className="items-center mt-6  mb-10 flex space-x-4">
                    <div className="relative">
                    <CiLocationOn className="text-4xl" />
                        </div>
                        <div className="flex flex-col">
                        <p className="font-bold">Address</p>
                        <p className="text-xs">Alemnesh Plaza, 9th Floor <br />
                        Bole, Addis Ababa, Ethiopia</p>
                        </div>
                       
                    </div>
                    <div>
                    <div className="items-center mt-6  mb-10 flex space-x-4">
                    <div className="relative">
                    <CiPhone  className="text-4xl" />
                        </div>
                        <div className="flex flex-col">
                        <p className="font-bold">Phone Number</p>
                        <p className="text-xs">+251 (933) 753 333 <br />
                        +251 (118) 549 922</p>
                        </div>
                        </div>
                    </div>
                    <div>
                    <div className="items-center mt-6  mb-10 flex space-x-4">
                    <div className="relative ml-2">
                    <BsEnvelope className="text-3xl" />
                        </div>
                        <div className="flex flex-col">
                        <p className="font-bold ">Email</p>
                        <p className="text-xs ">hello@hahucloud.com</p>
                        </div>
                        </div>
                    </div>
                    
                    </div>
                    
                    
                    
                </div>
</div>

        </div>
    )
}

export default About