import Image from 'next/image'
import React from 'react'

export default function Component_3() {
  return (
    <div className='grid grid-cols-12  m-6 w-[679px] h-[126px] rounded-lg bg-[#D9D9D9] '>

        <div className='col-span-5'>
            <Image src='/image 1.png' alt='image2' width={249.64} height={126}/>
        </div>

        <div className='grid grid-rows-2 col-span-7'>

            <div className='flex items-center'>
                <div className='w-48 text-[#353535] font-sans text-2xl font-bold '>Stein Studios</div>
                <button className='w-20 h-[30px] rounded-3xl bg-[#4E8171] ml-20'>
                       <div className='justify-center text-white text-sans font-medium'>Details</div>
                </button>
            </div>

            <div className='flex mt-2'>
                <button className='w-20 h-[30px] rounded-3xl bg-[#3C9313]'>
                       <div className='justify-center text-white text-sans font-medium'>Allow</div>
                </button>
                <button className='w-20 h-[30px] rounded-3xl bg-[#B63535] ml-10'>
                       <div className='justify-center text-white text-sans font-medium'>Deny</div>
                </button>
            </div>

        </div>

    </div>
  )
}
