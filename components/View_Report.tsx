"use client"
import Image from 'next/image'
function print(){
    console.log("print the report")
}
import React from 'react'

interface View_Report{
discription1: String
img : String
}

export default function View_Report({discription1, img
}:View_Report) {
  return (
    <div className='grid grid-cols-12 w-[761px] h-[127px] rounded-[10px] bg-[#F8F8F8] m-6 border divide-[#848484]'>
        <div className='col-span-4 my-3 ml-14'>
            <Image src={`/${img}`} alt='compo5' width={100} height={100}/> 
        </div>

        <div className='col-span-5 mt-4'>
            <div className='text-[#666] font-sans text-xl font-normal'>EVENT’S</div>
            <div className='text-[#353535] font-sans text-2xl font-bold mt-6'>{discription1}</div>
        </div>

        <div className='col-span-3 my-10'>
            <button
            onClick={() => print()}
            className='w-[116px] h-10 rounded-md bg-[#4E5381]'>
                <div className='flex'>
                    <div className='ml-4'>
                        <Image src='/Chart_alt_fill.svg' alt='chart' width={100} height={100}/>
                    </div>

                    <div className='w-[87.751px] h-[19.317px] judtify-center text-white font-sans text-base font-medium'> Print</div>

                </div>
            </button>
        </div>

    </div>
  )
}
