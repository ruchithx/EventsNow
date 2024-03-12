import React from "react";
import Footer from "@/components/Footer";
import Image from "next/image";
import BestEvent from "./components/BestEvent";
import { Metadata } from "next";
// import BestEvent from "./components/BestEvent";

export const metadata: Metadata = {
  title: " About",
  description: "This is the about page of the website.",
};

export default function page() {
  return (
    <div>
      <div className="xl:h-[600px] md:h-[400px] w-full bg-[url('/images/about/mainphoto.png')] bg-no-repeat bg-cover bg-center">
        <div className="flex-auto w-full h-[213px] flex-col shrink-0 text-white text-center xl:text-6xl md:text-4xl sm:text-2xl md:py-40 xl:pt-56 py-20 px-20 font-['Khand'] font-semibold">
          &ldquo;Creating memorable moments through expert event
          management.&rdquo;
        </div>
      </div>

      <div className="grid md:grid-cols-2 md:mx-16 xl:mx-40 xl:my-14 md:place-items-center place-items-center ">
        <div>
          <div className='mt-2 md:mt-8 py-4 md:text-left xl:mb-4 sm:text-3xl flex-auto w-full md:h-[5rem] flex-col text-center justify-center shrink-0 text-[#906953] font-["Khand"] md:text-4xl xl:text-5xl  sm:mt-10  font-semibold'>
            OUR MISSION
          </div>
          <div className='sm:px-6 sm:-mb-20 md:px-0 px-4 xl:mb-4  md:text-left flex-auto w-full h-[13rem] text-center flex-col shrink-0 text-black font-["Khand"] md:text-base  font-medium tracking-wider '>
            At EventNow our mission is to connect people through exceptional
            event experiences. We are committed to providing a seamless and
            user-friendly platform that empowers event organizers to create,
            promote, and manage their events effortlessly. By fostering a
            vibrant community of organizers and attendees, we aim to enhance the
            way people discover, share, and participate in events, fostering
            memorable moments and lasting connections.
          </div>
        </div>

        <div className=" xl:mt-8 md:mt-36 px-8 mb-4 mt-12  xl:ml-40 md:ml-12 md:px-6 place-items-center flex justify-center items-center w-full  xl:px-0 xl:w-[23rem] md:w-[22rem] ">
          <Image
            src={"/images/about/mission.png"}
            width={360}
            height={200}
            alt="mission"
            // className="w-auto h-auto"
          />

          {/* <img src="/mission.png" className="justify-center" alt="mission"  /> */}
        </div>
      </div>

      <div className="grid md:grid-cols-2 md:mx-16 xl:mx-40 xl:my-14 md:-mt-4 md:place-items-center place-items-center">
        <div>
          <div className='md:mt-28 xl:-mt-2 py-4 md:text-left xl:mb-4 sm:text-3xl flex-auto w-full md:h-[5rem] flex-col text-center justify-center shrink-0 text-[#906953] font-["Khand"]  md:text-4xl xl:text-5xl  sm:mt-8  font-semibold'>
            OUR VISION
          </div>
          <div className='sm:px-6 md:px-0  px-4 mb-12 md:text-left flex-auto w-full h-[13rem] flex-col text-center shrink-0 text-black font-["Khand"] md:text-base font-medium tracking-wider'>
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

        <div className=" xl:mt-0 md:mt-24 px-8 mt-6  xl:ml-40  md:ml-12 flex justify-center items-center xl:w-[23rem] xl:px-0 md:px-6 md:w-[22rem]  sm:-mt-16 ">
          <Image
            src={"/images/about/vision.png"}
            width={360}
            height={200}
            alt="vision"
            // className="w-auto h-auto"
          />
          {/* <img src='/vision.png' className='justify-center' alt='visionn'/> */}
        </div>
      </div>

      <div className='sm:my-2  mt-6 text-center w-full  h-[5rem]  text-[#906953] font-["Khand"] md:text-4xl xl:text-5xl sm:text-3xl md:mt-12 font-semibold sm:mt-12'>
        OUR STORY
      </div>

      <div className="grid md:grid-cols-2 ">
        <div className="w-full flex justify-center items-center md:px-4 md:ml-4 xl:-mt-24 px-6 sm:px-0">
          <Image
            src={"/images/about/story.png"}
            width={500}
            height={300}
            alt="story"
            // className="w-auto h-auto"
          />
        </div>

        <div className=" sm:mt-8 xl:mx-12 md:mt-0 ">
          <div className='sm:px-10 sm:text-center px-4 md:px-14 xl:px-0 mt-6 flex-auto xl:h-[28rem] xl:w-[34rem] flex-col md:text-left shrink-0 text-black font-["Khand"] md:text-base font-medium xl:tracking-wider '>
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

      <div className='mt-6 text-center w-full  h-[5rem]  text-[#906953] font-["Khand"] md:text-4xl xl:text-5xl sm:text-3xl md:mt-12 font-semibold sm:my-10 '>
        BEST EVENTS
      </div>

      <div className="m-10 grid xl:grid-cols-3  md:grid-cols-3     justify-center items-center place-items-center -mt-20 xl:mt-1">
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
