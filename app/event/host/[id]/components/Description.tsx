import React from "react";

export default function Description({ description }: { description: string }) {
  return (
    <div className="xl:mx-24 mt-16 md:mx-12 mx-8">
      <div className="text-left  text-[rgb(69,82,115)] md:text-3xl text-2xl  font-bold ">
        ABOUT EVENT
      </div>
      <div className='mb-16 text-black font-["Roboto"] md:text-xl text-lg font-normal leading-7 py-10'>
        {description}
      </div>
    </div>
  );
}
