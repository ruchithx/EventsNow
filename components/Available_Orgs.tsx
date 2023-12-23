import Image from 'next/image'
import React from 'react'

export default function Component_4() {
  return (
    <div className='grid grid-cols-12  m-6 w-[679px] h-[126px] rounded-lg bg-[#D9D9D9] '>

         <div className='col-span-5'>
            <Image src='/image 1.png' alt='compo4' width={249.65} height={126}/>
        </div>

        <div className='col-span-2 '>
            <div className='grid grid-rows-2 '>
                 <div className='w-[140.4px] text-[#353535] font-sans text-2xl font-bold mt-2'>Stein Studios</div>
                 <button className='w-20 h-[30px] rounded-3xl bg-[#B63535] mt-2 '>
                       <div className='justify-center text-white text-sans font-medium'>Deny</div>
                 </button>
            </div>
        </div>

        <div className='col-span-5'>

            <div className='w-[270px] h-[98px] rounded bg-[#F4F4F4] mt-3.5'>

                <div className='grid grid-cols-12'>

                    <div className='col-span-8 m-6'>
                        <div className='text-[#353C4E] font-sans text-sm font-normal leading-4'> Number of Events </div>
                        <div className='text-[#353C4E] font-sans text-sm font-normal leading-4 mt-3'> Number of Members </div>
                    </div>

                    <div className='col-span-4 m-6'>
                        <div className='text-[#353C4E] font-sans text-sm font-bold leading-4'> 45 </div>
                        <div className='text-[#353C4E] font-sans text-sm font-bold leading-4 mt-3'> 34 </div>
                    </div>
                    
                </div>

            </div>
        </div>


    </div>
  )
  }
