import React from "react";
import Logo from "../assets/Logo.png"
import { SiInstagram } from "react-icons/si";
import { SiTelegram } from "react-icons/si";
import { SiFacebook } from "react-icons/si";
import { RiTwitterXLine } from "react-icons/ri";
import { SiYoutube } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";

const Final = () =>{
return(
<div className="w-full bg-white flex flex-col justify-between mb-10 ">
<div className='grid md:grid-cols-2 max-w-[1240px] '>
<div className="md:ml-56 md:mt-28 ml-8 mb-10">
<img src={Logo} alt="" className="text-sm"/>
<div className="mt-4 flex space-x-3">
<SiFacebook />
<SiTelegram />
<SiInstagram />
<RiTwitterXLine />
<SiYoutube />
<SiLinkedin />
</div>
</div>
        <div className="grid grid-cols-2 md:grid-cols-3 ml-10">
        <div className="">
            <p className="font-bold text-1xl">Policy</p>
            <div className = "text-xs mt-4 leading-8 ">
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
            <p>Refund Policy</p>
            </div>
            
        </div>
        <div>
            <p className="font-bold text-1xl">Services</p>
            <div className = "text-xs mt-4 leading-8 ">
            <p>Ethiopian Web Hosting</p>
            <p>General Purpose Servers</p>
            <p>Ethiopian Web Design</p>
            <p>SSL Certificates</p>
            <p>Domain Registrations</p>
            <p>Domain Transfer</p>
            <p>VPS</p>
            </div>
            
        </div>
        <div>
            <p className="font-bold text-1xl">Otherlinks</p>
            <div className = "text-xs mt-4 leading-8 ">
            <p>SMS Gateway</p>
            <p>WordPress</p>
            <p>Server Status</p>
            <p>Announcements</p>
            <p>Knowledgebase</p>
            <p>Video Tutorials</p>
            <p>.et Domain Name</p> 
            </div>
            
        </div>
        </div>
        
        </div>
    </div>
)}

export default Final