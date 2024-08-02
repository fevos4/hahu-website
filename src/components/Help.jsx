import React from 'react'
import help from "../assets/help.png"

const Help = () => {
    return(
        
        <div className='w-full  bg-white flex flex-col justify-between md:p-24 p-6'>

 <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
   <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
       <p className='md:text-4xl font-bold font-serif text-2xl item-center'>Need <span className="text-[#59FFA0]">Help</span> ?</p>
       <p className='py-3 md:mb-2 items-center text-xs md:text-sm '>Having issues and hoping to get help. Our technical team is dedicated to ensuring you get the support you need 24/7. Reach us via Telegram.
</p>
<div>
     <button className='flex items-center justify-center text-xs font-bold rounded-3xl bg-[#50E690] hover:bg-[#29804f] py-2 px-4 hover:duration-300 mt-10 max-w-[200px] md:max-w-none md:text-sm md:py-2 md:px-7 mx-auto'>Contact Us</button>
    </div>

</div>
   <div>
     <img src={help} alt="Picture" className='h-52  '/>
   </div>
   
   
 
 </div>
 
   
   
   
</div>
   
)
}

export default Help
