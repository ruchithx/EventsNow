import React, { useState } from "react";
import Container from "./Container";
import Switch from "react-switch";
import ContainerWithStroke from "./ContainerWithStroke";
import Image from "next/image";
import { Button } from "@material-tailwind/react";
import { UseEventContext, EventContextType } from "../EventDashContext";
import { error, success } from "@/util/Toastify";
import {
  CldUploadWidget,
  CloudinaryUploadWidgetInfo,
  CloudinaryUploadWidgetResults,
} from "next-cloudinary";
import { FaCloudUploadAlt } from "react-icons/fa";
export default function Settings() {
  const {
    id,

    eventname,
    eventLocation,
    eventType,
    eventDate,
    eventStartTime,

    endTime,
    eventVisibility,
    setEventVisibility,
    setEventname,
    setEventLocation,
    setEventType,
    setEventDate,
    setEventStartTime,

    setEndTime,

    setEventEndDate,
    eventEndDate,

    eventDashboardImage,
    eventCoverImage,
    setEventDashboardImage,
    setEventCoverImage,
  } = UseEventContext() as EventContextType;

  //event visibility switch
  const handleChange = (checked: boolean) => {
    setEventVisibility(checked);
  };

  const handleUpdate = async () => {
    // console.log({
    //   eventType,
    //   eventname,
    //   eventLocation,
    //   eventDate,
    //   eventStartTime,
    //   duration,
    //   endTime,
    //   eventVisibility,
    // });

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/v1/event/updateEvent`,
        {
          method: "PUT",
          body: JSON.stringify({
            id: id,
            eventName: eventname,
            selectedTab: eventType,
            eventStartedDate: eventDate,
            startTime: eventStartTime,

            eventDashboardImage: eventDashboardImage,
            eventCoverImage: eventCoverImage,
            eventEndDate,

            eventVisibility: eventVisibility,
          }),
        }
      );
      if (!res.ok) {
        error("Error updating event");
        return;
      }

      success("Event updated successfully");
    } catch (e) {
      error(e);
    }
  };

  return (
    <Container>
      <div className=" lg:ml-16 mb-5 grid gap-2 lg:px-6 mt-8 lg:mr-16 pb-20">
        <div className="">
          <div className="  xl:flex content-start  font-mono pb-4 ">
            <div className=" text-custom-orange font-medium text-3xl">
              SETTINGS
            </div>
            <div className="flex w-full gap-4 xl:justify-end">
              <div className="grid  content-center text-[#666] text-lg">
                Event visibility
              </div>
              <Switch
                className="grid  self-center"
                onChange={handleChange}
                checked={eventVisibility}
                offColor="#E9E9E9"
                onColor="#D47151"
                offHandleColor="#D47151"
                onHandleColor="#E9E9E9"
                height={20}
                width={40}
              />
            </div>
          </div>
          <div className="text-[#666] grid gap-6 ">
            <ContainerWithStroke>
              <div className="md:px-8 xl:px-16 grid gap-2 pt-3 pb-8 max-md:px-3 ">
                <div className="w-full text-left text-lg ">Event Name</div>
                <div className="w-full flex justify-start ">
                  <input
                    type="text"
                    placeholder=""
                    onChange={(e) => {
                      setEventname(e.target.value);
                    }}
                    value={eventname as string}
                    className="focus:outline-custom-orange border-2 rounded-md pl-4 pr-16 placeholder:text-[#ABB7C2] placeholder:font-Inter placeholder:text-base placeholder:font-normal place-self-start w-full"
                  />
                </div>
              </div>
            </ContainerWithStroke>

            <ContainerWithStroke>
              <div className="lg:px-8 grid gap-2 pt-3 pb-8 max-md:px-3 md:px-8">
                <div className="w-full text-left text-lg ">Event Type</div>
                <div className="w-full sm:max-md:flex 2xl:flex  justify-between  ">
                  <div className="flex  2xl:shadow-lg mb-3 sm:mb-0 md:mb-3  2xl:mb-0 ">
                    <button
                      onClick={() => setEventType("Onsite")}
                      className={`${
                        eventType === "Onsite"
                          ? "bg-custom-orange text-white rounded-l-md"
                          : "bg-white text-custom-orange rounded-l-md  border-custom-orange border-2"
                      } px-2  content-center grid `}
                    >
                      Physical Event
                    </button>
                    <button
                      onClick={() => setEventType("Online")}
                      className={`${
                        eventType === "Online"
                          ? "bg-custom-orange text-white rounded-r-md"
                          : "bg-white text-custom-orange rounded-r-md  border-custom-orange border-2"
                      } px-2  content-center grid `}
                    >
                      Online Event
                    </button>
                  </div>
                  <div className="flex focus:outline-custom-orange border-2 my-auto rounded-md">
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
                        setEventLocation(e.target.value);
                      }}
                      value={eventLocation as string}
                      className=" pl-4 xl:pr-16 placeholder:text-[#ABB7C2] placeholder:font-Inter placeholder:text-base placeholder:font-normal place-self-start w-full border-none focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </ContainerWithStroke>

            <ContainerWithStroke>
              <div className="sm:grid grid-cols-2 md:grid-cols-1 xl:grid-cols-2 max-md:gap-3 max-md:px-3 py-4">
                <div className="md:px-8 l xl:px-6 grid md:gap-2 pt-3 pb-5 ">
                  <div className="w-full text-left text-lg ">
                    Event Start Date
                  </div>
                  <div className="w-full flex justify-start ">
                    <input
                      type="text"
                      placeholder=""
                      onChange={(e) => {
                        setEventDate(e.target.value);
                      }}
                      value={eventDate.substring(0, 10) as string}
                      className="focus:outline-custom-orange border-2 rounded-md pl-4 pr-16 placeholder:text-[#ABB7C2] placeholder:font-Inter placeholder:text-base placeholder:font-normal place-self-start w-full"
                    />
                  </div>
                </div>
                <div className="md:px-8 l xl:px-6 grid md:gap-2 pt-3 pb-5 ">
                  <div className="w-full text-left text-lg ">
                    Event End Date
                  </div>
                  <div className="w-full flex justify-start ">
                    <input
                      type="text"
                      placeholder=""
                      onChange={(e) => {
                        setEventEndDate(e.target.value);
                      }}
                      value={eventEndDate.substring(0, 10) as string}
                      className="focus:outline-custom-orange border-2 rounded-md pl-4 pr-16 placeholder:text-[#ABB7C2] placeholder:font-Inter placeholder:text-base placeholder:font-normal place-self-start w-full"
                    />
                  </div>
                </div>
                <div className="md:px-8 xl:px-6 grid gap-2 pt-3 pb-5">
                  <div className="w-full text-left text-lg ">Start Time</div>
                  <div className="w-full flex justify-start ">
                    <input
                      type="text"
                      placeholder=""
                      onChange={(e) => {
                        setEventStartTime(e.target.value);
                      }}
                      value={eventStartTime as string}
                      className="focus:outline-custom-orange border-2 rounded-md pl-4 pr-16 placeholder:text-[#ABB7C2] placeholder:font-Inter placeholder:text-base placeholder:font-normal place-self-start w-full"
                    />
                  </div>
                </div>

                <div className=" xl:px-6 md:px-8 grid gap-2 pt-3 pb-5">
                  <div className="w-full text-left text-lg ">End Time</div>
                  <div className="w-full flex justify-start ">
                    <input
                      type="text"
                      placeholder=""
                      onChange={(e) => {
                        setEndTime(e.target.value);
                      }}
                      value={endTime as string}
                      className="focus:outline-custom-orange border-2 rounded-md pl-4 pr-16 placeholder:text-[#ABB7C2] placeholder:font-Inter placeholder:text-base placeholder:font-normal place-self-start w-full"
                    />
                  </div>
                </div>

                <div className=" xl:px-6 md:px-8 grid gap-2 pt-3 pb-5">
                  <div className="w-full text-left text-lg ">
                    Set cover image
                  </div>
                  <div className="w-full   ">
                    <div>
                      <CldUploadWidget
                        uploadPreset="events"
                        onOpen={() => {
                          console.log("isPhotographer");
                        }}
                        onSuccess={(results: CloudinaryUploadWidgetResults) => {
                          const uploadedResult =
                            results.info as CloudinaryUploadWidgetInfo;
                          const profileImageURL = {
                            image: uploadedResult.secure_url,
                          };
                          setEventCoverImage(profileImageURL.image);
                        }}
                        options={{
                          tags: ["events image"],
                          // publicId: `${organizationName}/${Date.now()}`,
                          // publicId: "b2c",

                          sources: ["local"],
                          googleApiKey: "<image_search_google_api_key>",
                          showAdvancedOptions: false,
                          // cropping: true,
                          multiple: false,
                          showSkipCropButton: false,
                          croppingAspectRatio: 0.75,
                          croppingDefaultSelectionRatio: 0.75,
                          croppingShowDimensions: true,
                          croppingCoordinatesMode: "custom",
                          // maxImageHeight: 100,
                          // croppingValidateDimensions: true,
                          defaultSource: "local",
                          resourceType: "image",
                          folder: "events",

                          styles: {
                            palette: {
                              window: "#ffffff",
                              sourceBg: "#f4f4f5",
                              windowBorder: "#90a0b3",
                              tabIcon: "#000000",
                              inactiveTabIcon: "#555a5f",
                              menuIcons: "#555a5f",
                              link: "#000000",
                              action: "#000000",
                              inProgress: "#464646",
                              complete: "#000000",
                              error: "#cc0000",
                              textDark: "#000000",
                              textLight: "#fcfffd",
                              theme: "white",
                            },
                          },
                        }}
                      >
                        {({ open }) => {
                          return (
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                open();
                              }}
                            >
                              <div className="p-1 text-white font-semibold flex items-center justify-center gap-2 bg-slate-400 rounded-2xl">
                                <FaCloudUploadAlt />
                                upload image
                              </div>
                            </button>
                          );
                        }}
                      </CldUploadWidget>
                    </div>

                    {eventCoverImage.length > 0 && (
                      <div className=" mt-5 border-2 w-auto border-solId rounded-xl   ">
                        <Image
                          className=" p-4"
                          src={eventCoverImage}
                          width={500}
                          height={500}
                          alt="event cover image"
                        />
                      </div>
                    )}
                  </div>
                </div>

                <div className=" xl:px-6 md:px-8 grid gap-2 pt-3 pb-5">
                  <div className="w-full text-left text-lg ">
                    Set dashboard image
                  </div>
                  <div className="w-full  ">
                    <div>
                      <CldUploadWidget
                        uploadPreset="events"
                        onOpen={() => {
                          console.log("isPhotographer");
                        }}
                        onSuccess={(results: CloudinaryUploadWidgetResults) => {
                          const uploadedResult =
                            results.info as CloudinaryUploadWidgetInfo;
                          const profileImageURL = {
                            image: uploadedResult.secure_url,
                          };
                          setEventDashboardImage(profileImageURL.image);
                        }}
                        options={{
                          tags: ["events image"],
                          // publicId: `${organizationName}/${Date.now()}`,
                          // publicId: "b2c",

                          sources: ["local"],
                          googleApiKey: "<image_search_google_api_key>",
                          showAdvancedOptions: false,
                          // cropping: true,
                          multiple: false,
                          showSkipCropButton: false,
                          croppingAspectRatio: 0.75,
                          croppingDefaultSelectionRatio: 0.75,
                          croppingShowDimensions: true,
                          croppingCoordinatesMode: "custom",
                          // maxImageHeight: 100,
                          // croppingValidateDimensions: true,
                          defaultSource: "local",
                          resourceType: "image",
                          folder: "events",

                          styles: {
                            palette: {
                              window: "#ffffff",
                              sourceBg: "#f4f4f5",
                              windowBorder: "#90a0b3",
                              tabIcon: "#000000",
                              inactiveTabIcon: "#555a5f",
                              menuIcons: "#555a5f",
                              link: "#000000",
                              action: "#000000",
                              inProgress: "#464646",
                              complete: "#000000",
                              error: "#cc0000",
                              textDark: "#000000",
                              textLight: "#fcfffd",
                              theme: "white",
                            },
                          },
                        }}
                      >
                        {({ open }) => {
                          return (
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                open();
                              }}
                            >
                              <div className="p-1 text-white font-semibold flex items-center justify-center gap-2 bg-slate-400 rounded-2xl">
                                <FaCloudUploadAlt />
                                upload image
                              </div>
                            </button>
                          );
                        }}
                      </CldUploadWidget>
                    </div>

                    {eventDashboardImage.length > 0 && (
                      <div className=" mt-5 border-2 w-auto border-solId rounded-xl   ">
                        <Image
                          className=" p-4"
                          src={eventDashboardImage}
                          width={500}
                          height={500}
                          alt="event cover image"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </ContainerWithStroke>
          </div>
        </div>

        <div className="flex justify-start">
          <button
            className="mt-8 bg-custom-orange text-white rounded-md items-center flex px-4 py-2 gap-2 "
            onClick={handleUpdate}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18ZM13.7682 6.64018C14.1218 6.21591 14.0645 5.58534 13.6402 5.23178C13.2159 4.87821 12.5853 4.93554 12.2318 5.35982L8.63383 9.67736C8.28711 10.0934 8.09219 10.3238 7.93658 10.4653L7.93063 10.4707L7.92422 10.4659C7.75643 10.339 7.54146 10.1272 7.1585 9.74428L5.70711 8.29289C5.31658 7.90237 4.68342 7.90237 4.29289 8.29289C3.90237 8.68342 3.90237 9.31658 4.29289 9.70711L5.74428 11.1585L5.78511 11.1993L5.78512 11.1993C6.11161 11.526 6.4257 11.8402 6.71794 12.0611C7.0453 12.3087 7.47402 12.5415 8.02343 12.5165C8.57284 12.4916 8.97872 12.221 9.28233 11.9448C9.55337 11.6983 9.83772 11.3569 10.1333 11.0021L10.1333 11.0021L10.1703 10.9577L13.7682 6.64018Z"
                fill="white"
              />
            </svg>
            Update
          </button>
        </div>
      </div>
    </Container>
  );
}
