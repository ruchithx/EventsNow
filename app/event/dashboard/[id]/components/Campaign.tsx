import React from "react";
import Container from "./Container";
import Image from "next/image";

export default function Campaign() {
  return (
    <Container>
      <div className="pl-10 mb-5 grid gap-2 mt-8 mr-10 pb-20">
        <div className=" font-mono text-custom-orange font-medium text-3xl pb-4 ">
          CAMPAIGN
        </div>
        <div className="xl:pr-64 2xl:pr-32 grid place-content-center text-center ">
          <div className="text-lg py-2 font-semibold">
            Use Event’s Community page .
          </div>
          <div className=" text-sm pb-4">
            You can use event’s community page for marketings
          </div>
          <button className="bg-custom-orange rounded-md py-1 m-auto text-white font-mono text-base font-normal pr-7 drop-shadow-md flex ">
            <Image
              className="my-auto mx-2"
              src="/images/eventDash/Subtract.svg"
              alt="print"
              width={20}
              height={20}
            />
            Create a post
          </button>
        </div>

        <div className="xl:pr-64 2xl:pr-32 grid place-content-center text-center">
          <div className="text-lg py-2 font-semibold">
            Send Emails to your Attendees.
          </div>
          <div className="text-sm pb-4">
            Click on button below to create your first email campaign. Send
            event invitations, event reminders and more
          </div>
          <button className="bg-custom-orange rounded-md py-1 m-auto text-white font-mono text-base font-normal pr-7 drop-shadow-md flex ">
            <Image
              className="my-auto mx-2"
              src="/images/eventDash/Subtract.svg"
              alt="print"
              width={20}
              height={20}
            />
            Create a campaign
          </button>
        </div>
      </div>
    </Container>
  );
}
