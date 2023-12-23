"use client"

function overview(){
  console.log("Direct to the overview")
}
function hostpage(){
  console.log("Direct to the host page")
}
function team(){
  console.log("Direct to the Team details")
}
function report(){
  console.log("Direct to the repots")
}
function campaign(){
  console.log("Direct to the campaign details")
}
function settings(){
  console.log("Direct to the setttings")
}
function tickets(){
  console.log("Direct to the Ticket purchases")
}

import React from 'react'

interface Event_navbar{
  first : String
  second : String
  third : String
  fourth : String
  fifth : String
  sixth : String
  seventh : String
} 

export default function Event_Dashboard_Nav_bar({first , second , third , fourth , fifth , sixth , seventh}: Event_navbar) {
  return (
    <div className='style1 w-96 h-[45rem] bg-slate-200'>
      <div className='grid-rows-8'>
        <button onClick={() => overview()}
        className=' w-[306.14px] w-96 h-12 rounded-lg bg-[#A986A9] m-9'>
          <div className=' font-sans	text-base font-semibold text-white leading-normal'>{first}</div>
        </button>
        <button onClick={() => hostpage()}
        className=' w-[306.14px] w-96 h-12 rounded-lg bg-[#A986A9] m-9 mt-0'>
          <div className=' font-sans	text-base font-semibold text-white leading-normal'>{second}</div>
        </button>
        <button onClick={() => team()}
        className=' w-[306.14px] w-96 h-12 rounded-lg bg-[#A986A9] m-9 mt-0'>
          <div className=' font-sans	text-base font-semibold text-white leading-normal'>{third}</div>
        </button>
        <button onClick={() => report()}
        className=' w-[306.14px] w-96 h-12 rounded-lg bg-[#A986A9] m-9 mt-0'>
          <div className=' font-sans	text-base font-semibold text-white leading-normal'>{fourth}</div>
        </button>
        <button onClick={() => campaign()}
        className=' w-[306.14px] w-96 h-12 rounded-lg bg-[#A986A9] m-9 mt-0'>
          <div className=' font-sans	text-base font-semibold text-white leading-normal'>{fifth}</div>
        </button>
        <button onClick={() => settings()}
        className=' w-[306.14px] w-96 h-12 rounded-lg bg-[#A986A9] m-9 mt-0'>
          <div className=' font-sans	text-base font-semibold text-white leading-normal'>{sixth}</div>
        </button>
        <button onClick={() => tickets()}
        className=' w-[306.14px] w-96 h-12 rounded-lg bg-[#A986A9] m-9 mt-0'>
          <div className=' font-sans	text-base font-semibold text-white leading-normal'>{seventh}</div>
        </button>
       
        
      </div>
    </div>
  )
}
