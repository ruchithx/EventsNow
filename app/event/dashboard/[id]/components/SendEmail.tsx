import React, { useEffect, useState } from "react";
import Container from "./Container";
import Image from "next/image";
import CreatePost from "./post/CreatePost";
import { User } from "@/app/organization/dashboard/[id]/Type";
import { getSession } from "next-auth/react";
import { EventContextType, UseEventContext } from "../EventDashContext";
import { MdArrowBack } from "react-icons/md";
import GeneralUpdate from "./GeneralUpdate";

export default function SendEmail() {
  const [createPost, setCreatePost] = useState(false);
  const [user, setUser] = useState<unknown>(null);
  const [generalUpdate, setGenaralUpdate] = useState(false);
  const { setStatus } = UseEventContext() as EventContextType;

  // useEffect(() => {
  //   const getUser = async () => {
  //     const user = await getSession();
  //     console.log(user);
  //     if (user) {
  //       setUser(user);
  //     }
  //   };
  //   getUser();
  // }, []);

  return (
    <Container>
      <button className="button mt-5" onClick={() => setStatus("campaign")}>
        <div className="text-white rounded-full bg-custom-orange p-1 w-8 flex justify-center">
          <MdArrowBack size={20} />
        </div>
      </button>
      <div className="lg:pl-10 mb-5 grid gap-2  md:mr-10 pb-8">
        <div className=" font-mono gap-3 flex text-custom-orange font-medium text-3xl ">
          Email Campaign
        </div>
        <div className=" text-[#455273] font-mono mr-8">
          You can send the emails to registerd users.
        </div>
      </div>
      <div className="h-[20rem] overflow-auto">
        <div className="xl:pr-64 2xl:pr-32 grid place-content-center text-center ">
          <div className="text-lg py-2 font-semibold">General update.</div>
          <div className=" text-sm pb-4">
            You can use this page for send email for registers to the event
          </div>
          <button
            onClick={() => setGenaralUpdate(true)}
            className="bg-custom-orange rounded-md py-1 m-auto text-white font-mono text-base font-normal pr-7 drop-shadow-md flex "
          >
            <Image
              className="my-auto mx-2"
              src="/images/eventDash/Subtract.svg"
              alt="print"
              width={20}
              height={20}
            />
            general update
          </button>
        </div>
        <div className="xl:pr-64 mt-6 2xl:pr-32 grid place-content-center text-center ">
          <div className="text-lg py-2 font-semibold">
            Event changes and updates.
          </div>
          <div className=" text-sm pb-4">
            You can use this page for send email for registers to inform about
            event changing and updates
          </div>
          <button
            onClick={() => setGenaralUpdate(true)}
            className="bg-custom-orange rounded-md py-1 m-auto text-white font-mono text-base font-normal pr-7 drop-shadow-md flex "
          >
            <Image
              className="my-auto mx-2"
              src="/images/eventDash/Subtract.svg"
              alt="print"
              width={20}
              height={20}
            />
            Event changes
          </button>
        </div>
        {generalUpdate && <GeneralUpdate setGenaralUpdate={setGenaralUpdate} />}
      </div>
    </Container>
    // <Container>
    //   <div className="pl-10 mb-5 grid gap-2 mt-8 mr-10 pb-20">
    //     <div className=" font-mono text-custom-orange font-medium text-3xl pb-4 ">
    //       UPDATES
    //     </div>
    // <div className="xl:pr-64 2xl:pr-32 grid place-content-center text-center ">
    //   <div className="text-lg py-2 font-semibold">General update.</div>
    //   <div className=" text-sm pb-4">
    //     You can use this page for send email for registers to the event
    //   </div>
    //   <button
    //     onClick={() => setCreatePost(true)}
    //     className="bg-custom-orange rounded-md py-1 m-auto text-white font-mono text-base font-normal pr-7 drop-shadow-md flex "
    //   >
    //     <Image
    //       className="my-auto mx-2"
    //       src="/images/eventDash/Subtract.svg"
    //       alt="print"
    //       width={20}
    //       height={20}
    //     />
    //     general update
    //   </button>
    // </div>

    // <div className="xl:pr-64 2xl:pr-32 grid place-content-center text-center ">
    //   <div className="text-lg py-2 font-semibold">
    //     Event changes and updates.
    //   </div>
    //   <div className=" text-sm pb-4">
    //     You can use this page for send email for registers to inform about
    //     event changing and updates
    //   </div>
    //   <button
    //     onClick={() => setStatus("editpost")}
    //     className="bg-custom-orange rounded-md py-1 m-auto text-white font-mono text-base font-normal pr-7 drop-shadow-md flex "
    //   >
    //     <Image
    //       className="my-auto mx-2"
    //       src="/images/eventDash/Subtract.svg"
    //       alt="print"
    //       width={20}
    //       height={20}
    //     />
    //     Event changes
    //   </button>
    // </div>

    //     {createPost && <CreatePost setCreatePost={setCreatePost} user={user} />}
    //   </div>
    // </Container>
  );
}
