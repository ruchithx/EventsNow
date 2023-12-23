import Image from 'next/image'
import React from 'react'

export default function View_Report() {
  return (
    <div className='grid grid-cols-12 w-[761px] h-[127px] rounded-[10px] bg-[#F8F8F8] m-6 border divide-[#848484]'>
        <div className='col-span-4 my-3 ml-14'>
            <Image src='/image_4.png' alt='compo5' width={100} height={100}/> 
        </div>

        <div className='col-span-5 mt-4'>
            <div className='text-[#666] font-sans text-xl font-normal'>EVENT’S</div>
            <div className='text-[#353535] font-sans text-2xl font-bold mt-6'>ATTENDANCE REPORT</div>
        </div>

        <div className='col-span-3 my-10'>
            <button className='w-[116px] h-10 rounded-md bg-[#4E5381]'>
                <div className='flex'>
                    <div className='ml-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M18.3529 14H19C19.9428 14 20.4142 14 20.7071 13.7071C21 13.4142 21 12.9428 21 12V11C21 9.11438 21 8.17157 20.4142 7.58579C19.8284 7 18.8856 7 17 7H7C5.11438 7 4.17157 7 3.58579 7.58579C3 8.17157 3 9.11438 3 11V13C3 13.4714 3 13.7071 3.14645 13.8536C3.29289 14 3.5286 14 4 14H5.64706" stroke="white" stroke-width="2"/>
                            <path d="M6 20.3063L6 12C6 11.0572 6 10.5858 6.29289 10.2929C6.58579 10 7.05719 10 8 10L16 10C16.9428 10 17.4142 10 17.7071 10.2929C18 10.5858 18 11.0572 18 12L18 20.3063C18 20.6228 18 20.7811 17.8962 20.856C17.7924 20.9308 17.6422 20.8807 17.3419 20.7806L15.1581 20.0527C15.0798 20.0266 15.0406 20.0135 15 20.0135C14.9594 20.0135 14.9202 20.0266 14.8419 20.0527L12.1581 20.9473C12.0798 20.9734 12.0406 20.9865 12 20.9865C11.9594 20.9865 11.9202 20.9734 11.8419 20.9473L9.15811 20.0527C9.07975 20.0266 9.04057 20.0135 9 20.0135C8.95943 20.0135 8.92025 20.0266 8.84189 20.0527L6.65811 20.7806C6.3578 20.8807 6.20764 20.9308 6.10382 20.856C6 20.7811 6 20.6228 6 20.3063Z" stroke="white" stroke-width="2"/>
                            <path d="M18 7V5.88C18 4.87191 18 4.36786 17.8038 3.98282C17.6312 3.64413 17.3559 3.36876 17.0172 3.19619C16.6321 3 16.1281 3 15.12 3H8.88C7.87191 3 7.36786 3 6.98282 3.19619C6.64413 3.36876 6.36876 3.64413 6.19619 3.98282C6 4.36786 6 4.87191 6 5.88V7" stroke="white" stroke-width="2"/>
                            <path d="M10 14L13 14" stroke="white" stroke-width="2" stroke-linecap="round"/>
                            <path d="M10 17L14.5 17" stroke="white" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </div>

                    <div className='w-[87.751px] h-[19.317px] judtify-center text-white font-sans text-base font-medium'> Print</div>

                </div>
            </button>
        </div>

    </div>
  )
}
