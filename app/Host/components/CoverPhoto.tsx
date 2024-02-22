import React from 'react'
import Image from 'next/image'

interface CoverPhoto {
    image: String;
}

export default function CoverPhoto({
    image,
  }: CoverPhoto) {
  return (
    <div className='h-screen w-'>
        <Image src={`/${image}`} alt="hay" width={410} height={200} />
    </div>
  )
}
