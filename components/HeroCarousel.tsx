import React from "react";
import { Carousel } from "flowbite-react";
import Image from "next/image";

function info() {
  console.log("Direct to the info page");
}

export default function HeroCarousel() {
  return (
    <div className="grid xl:grid-cols-2">
      <div>
        <div className="w-full bg-[#D7CFC7] xl:h-screen rounded-lg">
          <div className='text-[#906953] text-center font-["Khand"] text-3xl md:py-16 sm:text-5xl md:text-7xl  xl:px-12 font-semibold py-6 md:px-6'>
            “Where Moments Become Memories”
          </div>
          <div className='text-[#4A4A4A] text-center font-["khand"] text-lg xl:text-base font-medium px-4 leading-6 pb-6 md:px-12 sm:mx-8'>
            Welcome to EVENTNOW, where we believe that every event is an
            opportunity to create cherished memories. We're your dedicated
            platform for discovering and attending a wide range of exciting
            events that will leave you with lasting impressions. Whether it's a
            concert that fills your heart with music, a conference that ignites
            your passion, or a cultural celebration that brings communities
            together, our mission is to provide you with access to unforgettable
            experiences. Join us in embracing the joy of the moment and let us
            be your guide to the world of extraordinary events.
          </div>

          <div className="justify-center items-center pb-10  md:pb-16 mx-10 flex md:py-8 xl:py-8">
            <button
              onClick={() => info()}
              className=" md:w-48 w-12 md:h-11 h-8 rounded-l-full  bg-[#D47151] shrink-0 flex  "
            >
              <div className="py-1 pl-3.5  ">
                <Image src={"/Frame.svg"} alt="info" width={80} height={80} />
              </div>

              <div className="hidden md:block md:w-56 md:h-4 md:text-white md:text-xl md:py-1.5 md:text-left flex font-['Roboto Mono']">
                search events
              </div>
            </button>

            <label className="relative block">
              <input
                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full md:h-11 border border-slate-300 py-1 sm:py-1.5 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                placeholder="Title, Venue, Organizer..."
                type="text"
                name="search"
              />
            </label>
          </div>
        </div>
      </div>

      <div className="grid ">
        <div className="h-56 sm:h-64 xl:h-screen hidden xl:block rounded-none">
          <Carousel >
            <Image className="w-full h-full object-cover object-center" sizes='100vw' width={80} height={80} alt="ima" src={'/slider1.png'}/>
            <Image className="w-full h-full object-cover object-center" sizes='100vw' width={80} height={80} alt="ima" src={'/slider2.png'}/>
            <Image className="w-full h-full object-cover object-center" sizes='100vw' width={80} height={80} alt="ima" src={'/slider3.png'}/>
            <Image className="w-full h-full object-cover object-center" sizes='100vw' width={80} height={80} alt="ima" src={'/slider4.png'}/>
            {/* <img src="/slider1.png" alt="..." />
            <img src="/slider2.png" alt="..." />
            <img src="/slider3.png" alt="..." />
            <img src="/slider4.png" alt="..." /> */}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
