import React from 'react'
import { useState } from 'react';
export default function HostSideBar() {
  const [activeButton, setActiveButton] = useState<number | null>(1);

  const handleClick = (buttonNumber: number) => {
    setActiveButton(buttonNumber);
  };
  return (
    <div className='w-96 h-[50rem]  bg-gray-500 text-center'>
        <div className=' text-center text-neutral-800 text-5xl font-normal pt-6 font-["Fredoka One"]'>
          NADAGAMA
        </div>

        <div className="flex w-80 h-14 rounded-3xl bg-[#F9EBE9] items-center mx-8 my-8">
          <button
            className={`text-lg font-medium ml-2 w-40 h-12 rounded-3xl  ${activeButton === 1 ? 'bg-[#D47151] text-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]' : 'hover:bg-gray-200 text-[#D47151] bg-[#F9EBE9]'}`}
            onClick={() => handleClick(1)}
          >
           EVENT HOST
          </button>
          <button
            className={`text-lg font-medium mr-2 w-40 h-12 rounded-3xl  ${activeButton === 2 ? 'bg-[#D47151] text-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]' : 'hover:bg-gray-200 text-[#D47151] bg-[#F9EBE9]'}`}
            onClick={() => handleClick(2)}
          >
            COMMUNITY
          </button>
        </div>

        <div className='text-[#455273] text-2xl font-bold my-6'>
            QUICK FACTS
        </div>

        <div className=''>

        </div>

    </div>
  )
}

