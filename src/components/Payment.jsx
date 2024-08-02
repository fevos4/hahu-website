import React from "react";
import pay from "../assets/Payment.png"

const Payment = () => {
    return(
        
             <div className='w-full  bg-white flex flex-col justify-between md:px-24 p-6'>
      <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
            <p className='md:text-4xl font-bold font-serif text-2xl item-center'>Payment Made  <span className="text-[#59FFA0]">Easy</span></p>
            <p className='py-3 md:mb-5 items-center md:text-sm text-xs'>We made it easy for you to make payments on HahuCloud. It's Simple and Fast!
Buying Hosting and Domain has never been this much easy in Ethiopia.
</p>
<p className="font-bold mt-6 md:text-sm text-xs">
Own Your dream domain in less than 3 Minutes!</p>

 


     
    
            </div>
        <div>
          <img src={pay} alt="Picture" className='h-60  md:ml-20 mt-4'/>
        </div>
        
      
      </div>
        
        
        
        
    </div>
        
    )
}

export default Payment