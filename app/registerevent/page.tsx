'use client'
import NavBar from '@/components/NavBar'
import React from 'react'
import EventRegisterFormBasic from './EventRegisterFormBasic'
import { useState } from 'react'
import Footer from '@/components/Footer'


export default function page() {
  return (
    <div>
        <NavBar/>
        <div className="grid md:grid-cols-2">
            <EventRegisterFormBasic/>
            <div className=" max-md:hidden  md:col-span-1  overflow-hidden	bg-[url('/eventRegFormImg.png')] bg-no-repeat bg-cover  bg-center">
          
        </div>
        </div>
        <Footer/>
    </div>
  )
}
