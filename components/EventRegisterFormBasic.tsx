import React from "react";

export default function EventRegisterFormBasic() {
  function sendEventData() {
    console.log("event Data send success");
  }
  return (
    <div className="mx-auto   justify-center">
      <div className=" mt-8 leading-none	 text-center text-[#455273] font-khand text-[40px] sm:text-[64px] font-semibold">
        Create Event
      </div>
      <form action="sendEventData" onSubmit={sendEventData} className="px-8">
        <label
          htmlFor="eventName"
          className=" mt-6 font-khand text-[#455273 flex text-basic font-normal m-0"
        >
          Event Name <div className="text-red-500 font-">*</div>
        </label>
        <input
          required
          type="text"
          name="eventName"
          id="eventName"
          className=" my-1 w-full h-8 block flex-1  bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 border-2 rounded-[12px]"
        ></input>

        
      </form>
    </div>
  );
}
