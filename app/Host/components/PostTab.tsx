import React from 'react'
import Image from 'next/image'
import Post from '@/components/Post'

export default function PostTab() {
  return (
    <div className='overflow-y-auto h-[40rem] mt-12 xl:ml-44 '>
       <div className='pr-64'>
       <Post 
            profilePic="profilpic"
            name="Oshadhi Yasundara"
            caption="Hello everyone"
            post="PictureOfPost"
        />
       
        <Post 
            profilePic="profilpic"
            name="Chamodi vimodya"
            caption="Hello everyone"
            post="PictureOfPost"
        />
        <Post 
            profilePic="profilpic"
            name="Ashan DIlsara"
            caption="Hello everyone"
            post="PictureOfPost"
        />
        <Post 
            profilePic="profilpic"
            name="Ruchith Samarawicrama"
            caption="Hello everyone"
            post="PictureOfPost"
        />
        <Post 
            profilePic="profilpic"
            name="Arkham"
            caption="Hello everyone"
            post="PictureOfPost"
        />
        </div>
    </div>
  )
}
