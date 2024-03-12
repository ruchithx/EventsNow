import Image from "next/image";
import React, { memo, useEffect, useState } from "react";
import { MdPublish } from "react-icons/md";

import { IoClose } from "react-icons/io5";
import {
  CldUploadWidget,
  CloudinaryUploadWidgetInfo,
  CloudinaryUploadWidgetResults,
} from "next-cloudinary";
import { error, success } from "@/util/Toastify";
import Description from "@/app/event/host/[id]/components/Description";
import CoverPhoto from "@/app/event/host/[id]/components/CoverPhoto";
import PostTab from "./PostTab";
import SmallView from "@/app/event/host/[id]/components/SmallView";
import HostSideBar from "@/app/event/host/[id]/components/HostSideBar";
import { useParams } from "next/navigation";
import { AuthContext, useAuth } from "@/app/AuthContext";
type Props = {
  setIsTemplate1: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Template1({ setIsTemplate1 }: Props) {
  const params = useParams<{ id: string }>();
  const { setEventPublish } = useAuth() as AuthContext;

  const [activeComponent, setActiveComponent] = useState("CoverPhoto");
  const handleComponentChange = (component: string) => {
    setActiveComponent(component);
  };

  async function publishEvent() {
    const res = await fetch(`/api/v1/event/publishTemplate`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: params.id,
        template: "template1",
      }),
    });
    const data = await res.json();
    if (data.message === "No event found") {
      error("There was an error publishing the event");
      return;
    }
    setEventPublish(true);
    success("Event published successfully");
    setIsTemplate1(false);
  }
  return (
    <>
      <div
        style={{
          backgroundColor: "#D9D9D9CC",
        }}
        id="static-modal"
        data-modal-backdrop="static"
        aria-hidden="true"
        className=" overflow-y-auto overflow-x-hidden  fixed  z-50 justify-center items-center w-full inset-0 md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="border-[1px] divide-x-2 md:mb-10 mb-0  rounded-xl bg-white w-4/5 2xl:w-1/5 lg:w-11/12 md:w-11/12  relative top-10 left-10 md:top-[5%] md:left-[5%]   ">
          <div className="text-black p-3 text-xl ">
            <div className="flex justify-between">
              template 1
              <button
                onClick={() => setIsTemplate1(false)}
                className="bg-slate-300 hover:bg-slate-400  w-8 col-span-1 rounded-full p-2 flex justify-center items-center"
              >
                <IoClose />
              </button>
            </div>
          </div>

          <div>
            <div className="md:flex relative">
              {activeComponent === "CoverPhoto" && (
                <CoverPhoto
                  image={"/images/Event/HostPage/cover2.jpg"}
                  // image={"/images/ReusableComponents/PictureOfPost.jpg"}
                />
              )}

              {activeComponent === "PostTab" && <PostTab />}

              <div className="md:hidden">
                <SmallView
                  EventName={"'KUWENI'"}
                  Location={"Matara"}
                  Time={"12.00 to 14.00"}
                  Date={"21th April 2020"}
                />
              </div>

              <div className="md:absolute md:right-0 hidden md:block ">
                <HostSideBar
                  EventName={"'KUWENI'"}
                  Location={"Matara"}
                  Time={"12.00 to 14.00"}
                  Date={"21th April 2020"}
                  activeComponent={activeComponent}
                  handleComponentChange={handleComponentChange}
                />
              </div>
            </div>

            <Description description="In the heart of a bustling city, amidst the cacophony of sounds and the hustle of people, there lies a quaint little cafe. Its walls adorned with vintage photographs and the aroma of freshly brewed coffee wafting through the air, it's a haven for weary souls seeking solace. As the sunlight gently filters through the curtains, casting a warm glow upon the wooden tables, patrons engage in lively conversations or lose themselves in the pages of their favorite books. Here, time seems to stand still, and for a fleeting moment, all worries fade away, replaced by a sense of serenity and contentment." />
          </div>

          <div className="flex justify-end">
            <button onClick={publishEvent} className="button">
              <div className="bg-custom-orange flex gap-3 w-fit rounded-xl p-2 m-2 text-white ">
                <MdPublish size={25} />
                Publish the Event
              </div>
            </button>
          </div>

          {/* <div className="flex gap-5 mb-10 p-5">
            <button>
              <div className="flex flex-col justify-center items-center gap-3">
                <Image
                  src={"/images/createEvent/eventRegFormImg.png"}
                  alt="template1"
                  width={40}
                  height={40}
                />
                template 1
              </div>
            </button>
            <button>
              <div className="flex flex-col justify-center items-center gap-3">
                <Image
                  src={"/images/createEvent/eventRegFormImg.png"}
                  alt="template1"
                  width={40}
                  height={40}
                />
                template 2
              </div>
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
}
