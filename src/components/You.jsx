import React from 'react'

const You = () => {
  return (
    <div className="flex justify-center items-center mt-24">
      <div className="flex justify-center items-center shadow-md rounded-3xl bg-[#020887] text-white py-10 m-4 w-96 md:w-3/4">
        <div className="flex flex-col justify-center w-full">
          <p className="md:text-3xl font-bold text-2xl text-center">
            Professional Web Hosting <br /> for{" "}
            <span className="text-[#50E690]">YOU</span>
          </p>
          <div className="mt-6 flex justify-center">
            <button className="text-sm font-bold rounded-3xl bg-[#50E690] hover:bg-[#29804f] py-2 px-7 hover:duration-300">
              PlaceOrder
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default You;