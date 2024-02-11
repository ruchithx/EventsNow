import NavBar from "@/components/Navbar/NavBar";
import React from "react";
import Footer from "@/components/Footer";
import Image from "next/image";
import BestEvent from "./components/BestEvent";
// import BestEvent from "@/components/BestEvent";

export default function page() {
  return (
    <div>
      <div className="xl:h-[600px] md:h-[400px] w-full bg-[url('/images/about/mainphoto.png')] bg-no-repeat bg-cover bg-center">
        <div className="flex-auto w-full h-[213px] flex-col shrink-0 text-white text-center xl:text-6xl md:text-4xl sm:text-2xl md:py-40 xl:pt-56 py-20 px-20 font-['Khand'] font-semibold">
          &ldquo;Creating memorable moments through expert event
          management.&rdquo;
        </div>
      </div>

      <div className="grid md:grid-cols-2 xl:mx-40 xl:my-14 md:my-14 md:place-items-center place-items-center ">
        <div>
          <div className='mt-6 xl:text-left xl:mb-4 sm:text-2xl flex-auto w-full md:h-[5rem] text-center flex-col shrink-0 text-[#906953] font-["Khand"] xl:text-5xl md:text-3xl sm:mt-8 font-semibold'>
            OUR MISSION
          </div>
          <div className='xl:text-left flex-auto w-full h-[13rem] text-center flex-col shrink-0 text-black font-["Khand"] md:text-base  font-medium tracking-wider '>
            At EventNow our mission is to connect people through exceptional
            event experiences. We are committed to providing a seamless and
            user-friendly platform that empowers event organizers to create,
            promote, and manage their events effortlessly. By fostering a
            vibrant community of organizers and attendees, we aim to enhance the
            way people discover, share, and participate in events, fostering
            memorable moments and lasting connections.
          </div>
        </div>

        <div className="mt-6 xl:ml-40 md:ml-12 place-items-center flex justify-center items-center xl:w-[23rem] md:w-[22rem] sm:-mt-12">
          <Image
            src={"/images/about/mission.png"}
            width={350}
            height={200}
            alt="mission"
          />
          {/* <img src="/mission.png" className="justify-center" alt="mission"  /> */}
        </div>
      </div>

      <div className="grid md:grid-cols-2 xl:mx-40 xl:my-14 md:my-14 md:place-items-center place-items-center">
        <div>
          <div className='mt-6 xl:text-left xl:mb-4 sm:text-2xl flex-auto w-full md:h-[5rem] flex-col text-center justify-center shrink-0 text-[#906953] font-["Khand"] xl:text-5xl md:text-3xl md:mt-8 sm:mt-8  font-semibold'>
            OUR VISION
          </div>
          <div className=' xl:text-left flex-auto w-full h-[13rem] flex-col text-center shrink-0 text-black font-["Khand"] md:text-base font-medium tracking-wider'>
            Our vision is to be the go-to platform for event planning and
            participation, setting the standard for excellence in the digital
            events landscape. We envision a future where individuals and
            organizations worldwide turn to EventNow for all their event needs.
            By leveraging cutting-edge technology, fostering innovation, and
            prioritizing user satisfaction, we strive to become a global hub
            that transforms the way people celebrate, learn, and connect through
            events.
          </div>
        </div>

        <div className="mt-6 xl:ml-40  md:ml-12 flex justify-center items-center xl:w-[23rem] md:w-[22rem]  sm:-mt-6 ">
          <Image
            src={"/images/about/vision.png"}
            width={350}
            height={200}
            alt="vision"
          />
          {/* <img src='/vision.png' className='justify-center' alt='visionn'/> */}
        </div>
      </div>

      <div className='xl:-mt-52 mt-6 text-center w-full  h-[5rem]  text-[#906953] font-["Khand"] xl:text-5xl md:text-3xl sm:text-2xl md:mt-12 font-semibold sm:mt-12'>
        OUR STORY
      </div>

      <div className="grid md:grid-cols-2 ">
        <div className=" -mt-8 xl:ml-40 xl:-mt-16 flex justify-center items-center">
          <Image
            src={"/images/about/story.png"}
            width={675}
            height={394}
            alt="story"
          />
          {/* <img src='/story.png' className='justify-center' alt='story'/> */}
        </div>

        <div className=" xl:ml-24 sm:mt-8  ">
          <div className='flex-auto w-full xl:h-[28rem] xl:w-[34rem] flex-col text-center shrink-0 text-black font-["Khand"] md:text-base font-medium xl:tracking-wider '>
            As aspiring event organizers immersed in the dynamic landscape of IT
            in 2023, Team OneZero observed a seismic shift in how individuals
            engage with experiences. The traditional methods of marketing and
            sales pitches were losing their effectiveness, drowned out by a
            discerning audience that had mastered the art of ignoring
            interruptions. Inspired by this shift, the vision for EventNow
            emerged—a platform founded on the principles of &quot;inbound&quot;
            for the event space. The fundamental belief that people no longer
            desired interruptions but sought genuine assistance in their event
            journeys became the cornerstone of EventNow. In the spirit of the
            inbound movement, EventNow empowers event organizers to cease
            interruption, embrace assistance, and refocus on the attendee.
            Through our platform, we aim to catalyze a movement where events
            become authentic, enriching experiences rather than interruptions in
            people&rdquo;s lives. EventNow—Empowering Events, Enhancing
            Experiences.
          </div>
        </div>
      </div>

      <div className='mt-6 text-center w-full  h-[5rem]  text-[#906953] font-["Khand"] xl:text-5xl md:text-3xl sm:text-2xl md:mt-12 font-semibold sm:mt-8 '>
        BEST EVENTS
      </div>

      <div className="grid xl:grid-cols-3 md:grid-cols-2  place-items-center -ml-12 flex justify-center items-center -mt-20 xl:mt-1">
        <BestEvent
          img="bestevent.png"
          eventname={"MEGA"}
          year={"2021"}
          description={
            "Darani, an extraordinary event, was held with unmatched grandeur and elegance. This remarkable gathering celebrated the fusion of culture and creativity, creating an unforgettable experience for all attendees. From captivating performances to delectable cuisine, Darani left a lasting impression on every guest. It was a momentous journey, where the vibrancy of tradition blended seamlessly with modernity. The event's success is a testament to the "
          }
        />

        <BestEvent
          img="bestevent.png"
          eventname={"MEGA"}
          year={"2021"}
          description={
            "Darani, an extraordinary event, was held with unmatched grandeur and elegance. This remarkable gathering celebrated the fusion of culture and creativity, creating an unforgettable experience for all attendees. From captivating performances to delectable cuisine, Darani left a lasting impression on every guest. It was a momentous journey, where the vibrancy of tradition blended seamlessly with modernity. The event's success is a testament to the "
          }
        />

        <BestEvent
          img="bestevent.png"
          eventname={"MEGA"}
          year={"2021"}
          description={
            "Darani, an extraordinary event, was held with unmatched grandeur and elegance. This remarkable gathering celebrated the fusion of culture and creativity, creating an unforgettable experience for all attendees. From captivating performances to delectable cuisine, Darani left a lasting impression on every guest. It was a momentous journey, where the vibrancy of tradition blended seamlessly with modernity. The event's success is a testament to the "
          }
        />
      </div>

      <div className="mt-52"></div>

      <Footer />
    </div>
  );
}
