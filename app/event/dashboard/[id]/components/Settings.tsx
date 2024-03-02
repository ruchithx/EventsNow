import React, { useState } from "react";
import Container from "./Container";
import Switch from "react-switch";
import ContainerWithStroke from "./ContainerWithStroke";
import { set } from "mongoose";
import Image from "next/image";

export default function Settings() {
  const [checked, setChecked] = useState(false);
  const handleChange = (checked: boolean) => {
    setChecked(checked);
  };

  const [eventname, setEventname] = useState("nada gama");
  const [eventLocation, setEventLocation] = useState("KCC,Kandy Road,kandy.");
  return (
    <Container>
      <div className=" ml-16 mb-5 grid gap-2 mt-8 mr-16 pb-20">
        <div className="">
          <div className="  flex content-center font-mono pb-4 ">
            <div className=" text-custom-orange font-medium text-3xl">
              SETTINGS
            </div>
            <div className="flex w-full gap-4 justify-end">
              <div className="grid  content-center text-[#666] text-lg">
                Event visibility
              </div>
              <Switch
                className="grid  self-center"
                onChange={handleChange}
                checked={checked}
                offColor="#E9E9E9"
                onColor="#D47151"
                offHandleColor="#D47151"
                onHandleColor="#E9E9E9"
                height={20}
                width={40}
              />
            </div>
          </div>
          <div className="text-[#666] ">
            <ContainerWithStroke>
              <div className="px-16 grid gap-2 pt-3 pb-5">
                <div className="w-full text-left text-lg ">Event Name</div>
                <div className="w-full flex justify-start ">
                  <input
                    type="text"
                    placeholder=""
                    onChange={(e) => {
                      setEventname(e.target.value);
                    }}
                    value={eventname}
                    className="focus:outline-custom-orange border-2 rounded-md pl-4 pr-16 placeholder:text-[#ABB7C2] placeholder:font-Inter placeholder:text-base placeholder:font-normal place-self-start w-full"
                  />
                </div>
              </div>
            </ContainerWithStroke>

            <ContainerWithStroke>
              <div className="px-16 grid gap-2 pt-3 pb-5">
                <div className="w-full text-left text-lg ">Event Type</div>
                <div className="w-full flex justify-start ">
                  <button className="">physical Event</button>
                  <div className="flex focus:outline-custom-orange border-2 rounded-md">
                    <Image
                      className="grid content-center"
                      src="/images/eventDash/Pin_fill.svg"
                      alt="event"
                      width={27}
                      height={27}
                    />
                    <input
                      type="text"
                      placeholder=""
                      onChange={(e) => {
                        setEventname(e.target.value);
                      }}
                      value={eventLocation}
                      className=" pl-4 pr-16 placeholder:text-[#ABB7C2] placeholder:font-Inter placeholder:text-base placeholder:font-normal place-self-start w-full border-none focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </ContainerWithStroke>
          </div>
        </div>
      </div>
    </Container>
  );
}
