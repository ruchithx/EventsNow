import NavBar from '@/components/NavBar'
import React from 'react'
import Footer from '@/components/Footer'
import Image from 'next/image'
import BestEvent from '@/app/About/components/BestEvent'


export default function page() {
  return (
  <div>
      <NavBar/>
     
      <div className="xl:h-[600px] md:h-[400px] w-full bg-[url('/mainphoto.png')] bg-no-repeat bg-cover">
        <div className="flex-auto w-full h-[213px] flex-col shrink-0 text-white text-center xl:text-6xl md:text-4xl sm:text-2xl md:py-40 xl:pt-56 py-20 px-20 font-['Khand'] font-semibold">
          "Creating memorable moments through expert event management." 
        </div>
      </div>


     <div className='grid md:grid-cols-2 '>

        <div className=' xl:mx-40 sm:mt-8 md:mx-20 mx-4'>
            <p className='xl:text-left xl:mb-4 sm:text-2xl flex-auto w-full md:h-[5rem] text-center flex-col shrink-0 text-[#906953] font-["Khand"] xl:text-5xl md:text-3xl sm:mt-2 font-semibold '>
              OUR MISSION
            </p>
            <div className='md:-mt-6 xl:text-left flex-auto text-center w-full xl:h-[28rem] xl:w-[34rem] flex-col shrink-0 text-black font-["Khand"] md:text-base font-medium xl:tracking-wider text-left mx-1'>
            At EventNow our mission is to connect people through exceptional event experiences. We are committed to providing a seamless and user-friendly platform that empowers event organizers to create, promote, and manage their events effortlessly. By fostering a vibrant community of organizers and attendees, we aim to enhance the way people discover, share, and participate in events, fostering memorable moments and lasting connections.
            </div>
        </div>

        <div className='mt-6 xl:mx-16 xl:-mt-52 flex justify-center items-center md:my-12 md:mx-8 mx-12 mb-4' >
        <Image src={"/mission.png"} width={350} height={200} alt='mission' />
          {/* <img src='/story.png' className='justify-center' alt='story'/> */}
        </div>     
      </div>


    <div className='grid md:grid-cols-2 xl:-mt-60'>

        <div className=' xl:mx-40 sm:mt-8 md:mx-20 mx-4'>
            <p className='xl:text-left xl:mb-4 sm:text-2xl flex-auto w-full md:h-[5rem] text-center flex-col shrink-0 text-[#906953] font-["Khand"] xl:text-5xl md:text-3xl sm:mt-2 font-semibold '>
              OUR VISION
            </p>
            <div className='md:-mt-6 xl:text-left flex-auto text-center w-full xl:h-[28rem] xl:w-[34rem] flex-col shrink-0 text-black font-["Khand"] md:text-base font-medium xl:tracking-wider text-left mx-1'>
                Our vision is to be the go-to platform for event planning and participation, setting the standard for excellence in the digital events landscape. We envision a future where individuals and organizations worldwide turn to EventNow for all their event needs. By leveraging cutting-edge technology, fostering innovation, and prioritizing user satisfaction, we strive to become a global hub that transforms the way people celebrate, learn, and connect through events. 
            </div>
        </div>

        <div className='mt-6 xl:mx-16 xl:-mt-52 flex justify-center items-center md:my-12 md:mx-8 mx-12 mb-4' >
        <Image src={"/vision.png"}  width={350} height={200} alt='vision' />
          {/* <img src='/story.png' className='justify-center' alt='story'/> */}
        </div>     
      </div>


    <div className='xl:-mt-52 mt-6 text-center w-full  h-[5rem]  text-[#906953] font-["Khand"] xl:text-5xl md:text-3xl sm:text-2xl md:mt-12 font-semibold sm:mt-12'>
        OUR STORY
      </div>

      <div className='grid md:grid-cols-2 '>

        <div className=' -mt-8 xl:mx-28 xl:-mt-12 flex justify-center items-center md:my-4  md:mx-8 mx-12 mb-4' >
          <Image src={"/story.png"} width={675} height={394} alt='story' />
          {/* <img src='/story.png' className='justify-center' alt='story'/> */}
        </div>
        
        <div className=' xl:mx-16 sm:mt-8 md:mx-8 mx-4'>
          <div className='flex-auto w-full xl:h-[28rem] xl:w-[34rem] flex-col shrink-0 text-black font-["Khand"] md:text-base font-medium xl:tracking-wider text-left mx-1'>
            As aspiring event organizers immersed in the dynamic landscape of IT in 2023, Team OneZero observed a seismic shift in how individuals engage with experiences. The traditional methods of marketing and sales pitches were losing their effectiveness, drowned out by a discerning audience that had mastered the art of ignoring interruptions.
            Inspired by this shift, the vision for EventNow emerged—a platform founded on the principles of "inbound" for the event space. The fundamental belief that people no longer desired interruptions but sought genuine assistance in their event journeys became the cornerstone of EventNow.
            In the spirit of the inbound Experiences.
        </div>
      </div>
      </div>

      <div className='mt-6 text-center w-full  h-[5rem]  text-[#906953] font-["Khand"] xl:text-5xl md:text-3xl sm:text-2xl md:mt-12 font-semibold sm:mt-8 '>
        BEST EVENTS
      </div>

      <div className='mt-1 md:mt-4 md:ml-2 xl:ml-4 grid xl:grid-cols-3 md:grid-cols-2  place-items-center  flex justify-center items-center -mt-20 xl:mt-1'>
      <BestEvent 
        img="bestevent.png"
        eventname={"MEGA"}
        year={"2021"}
        description={"Darani, an extraordinary event, was held with unmatched grandeur and elegance. This remarkable gathering celebrated the fusion of culture and creativity, creating an unforgettable experience for all attendees. From captivating performances to delectable cuisine, Darani left a lasting impression on every guest. It was a momentous journey, where the vibrancy of tradition blended seamlessly with modernity. The event's success is a testament to the "}
      />

      <BestEvent 
        img="bestevent.png"
        eventname={"MEGA"}
        year={"2021"}
        description={"Darani, an extraordinary event, was held with unmatched grandeur and elegance. This remarkable gathering celebrated the fusion of culture and creativity, creating an unforgettable experience for all attendees. From captivating performances to delectable cuisine, Darani left a lasting impression on every guest. It was a momentous journey, where the vibrancy of tradition blended seamlessly with modernity. The event's success is a testament to the "}
      />

      <BestEvent 
        img="bestevent.png"
        eventname={"MEGA"}
        year={"2021"}
        description={"Darani, an extraordinary event, was held with unmatched grandeur and elegance. This remarkable gathering celebrated the fusion of culture and creativity, creating an unforgettable experience for all attendees. From captivating performances to delectable cuisine, Darani left a lasting impression on every guest. It was a momentous journey, where the vibrancy of tradition blended seamlessly with modernity. The event's success is a testament to the "}
      />

      </div>
      
      <div className='mt-52'></div>
      
    <Footer />
    </div>
  )
}
