import NavBar from '@/components/NavBar'
import React from 'react'
import Footer from '@/components/Footer'
import Image from 'next/image'
import BestEvent from '@/components/BestEvent'


export default function page() {
  return (
    <div>
      <NavBar/>
     
      <div className="h-[600px] w-[1440] bg-[url('/mainphoto.png')] bg-no-repeat bg-cover bg-center">
        <div className="flex-auto w-[1263px] h-[213px] flex-col justify-center shrink-0 text-white text-center text-6xl pl-48	 pt-60  font-['Khand']">"Creating memorable moments through expert event management." </div>
      </div>

      <div className='grid grid-cols-2 mx-40 my-14'>
        <div>
        <div className='flex-auto w-[28rem] h-[5rem] flex-col justify-center shrink-0 text-[#906953] font-["Khand"] text-5xl font-semibold'>
            OUR MISSION
          </div>
          <div className='flex-auto w-[27rem] h-[13rem] flex-col justify-center shrink-0 text-black font-["Khand"] text-base font-medium tracking-wider '> 
          At EventNow our mission is to connect people through exceptional event experiences. We are committed to providing a seamless and user-friendly platform that empowers event organizers to create, promote, and manage their events effortlessly. By fostering a vibrant community of organizers and attendees, we aim to enhance the way people discover, share, and participate in events, fostering memorable moments and lasting connections.
          </div>
        </div>

        <div className='ml-40'>
          <Image src={"/mission.png"} width={350} height={200} alt='mission' />
        </div>
      </div>


      <div className='grid grid-cols-2 mx-40 my-14'>
        <div>
          <div className='flex-auto w-[28rem] h-[5rem] flex-col justify-center shrink-0 text-[#906953] font-["Khand"] text-5xl font-semibold'>
            OUR VISION
          </div>
          <div className='flex-auto w-[27rem] h-[13rem] flex-col justify-center shrink-0 text-black font-["Khand"] text-base font-medium tracking-wider '>
          Our vision is to be the go-to platform for event planning and participation, setting the standard for excellence in the digital events landscape. We envision a future where individuals and organizations worldwide turn to EventNow for all their event needs. By leveraging cutting-edge technology, fostering innovation, and prioritizing user satisfaction, we strive to become a global hub that transforms the way people celebrate, learn, and connect through events. 
          </div>
        </div>

        <div className='ml-40'>
          <Image src={"/vision.png"}  width={350} height={200} alt='vision' />
        </div>
      </div>

      <div className='text-center w-[28rem] h-[5rem] flex-col text-[#906953] font-["Khand"] text-5xl font-semibold ml-[500px]'>
        OUR STORY
      </div>

      <div className='grid grid-cols-2  my-14'>

        <div className='ml-40'>
          <Image src={"/story.png"} width={675} height={394} alt='story' />
        </div>
        
        <div className='ml-24'>
          <div className='flex-auto w-[35rem] h-[28rem] flex-col justify-center shrink-0 text-black font-["Khand"] text-base font-medium tracking-wider '>
            As aspiring event organizers immersed in the dynamic landscape of IT in 2023, Team OneZero observed a seismic shift in how individuals engage with experiences. The traditional methods of marketing and sales pitches were losing their effectiveness, drowned out by a discerning audience that had mastered the art of ignoring interruptions.
            Inspired by this shift, the vision for EventNow emerged—a platform founded on the principles of "inbound" for the event space. The fundamental belief that people no longer desired interruptions but sought genuine assistance in their event journeys became the cornerstone of EventNow.
            In the spirit of the inbound movement, EventNow empowers event organizers to cease interruption, embrace assistance, and refocus on the attendee. Through our platform, we aim to catalyze a movement where events become authentic, enriching experiences rather than interruptions in people's lives.
            EventNow—Empowering Events, Enhancing Experiences.
        </div>
      </div>
      </div>

      <div className='text-center w-[28rem] h-[5rem] flex-col text-[#906953] font-["Khand"] text-5xl font-semibold ml-[500px]'>
        BEST EVENTS
      </div>

      <div className='ml-20 grid grid-cols-3'>
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
