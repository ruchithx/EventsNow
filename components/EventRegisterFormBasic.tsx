import React from "react";

export default function EventRegisterFormBasic() {
  const [selectedTab, setSelectedTab] = React.useState("Onsite");
  function sendEventData() {
    // e.preventDefault();
    console.log("event Data send success");
  }
  return (
    <div className="mx-auto   justify-center">
      <div className=" mt-8 leading-none	 text-center text-[#455273] font-khand text-[40px] sm:text-[64px] font-semibold">
        Create Event
      </div>
      <form
        action={sendEventData}
        onSubmit={() => sendEventData}
        className="px-8"
      >
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
        <div className=" mt-6 font-khand text-[#455273 flex text-basic font-normal m-0">
          Select the event type <div className="text-red-500 font-">*</div>
        </div>
        <div className="pb-4 pt-1 pr-32 ">
          <div className="border-l-2 border-b-2 border-r-2 border-solid rounded-xl pb-4">
            <div className="flex   rounded-[10px] place-content-center bg-[#F9EBE9] mb-1">
              <button
                className={`w-full p-1 rounded-[10px] ${
                  selectedTab === "Onsite"
                    ? "bg-[#D47151] text-white"
                    : "hover:bg-gray-200 text-[#D47151] bg-[#F9EBE9]"
                }`}
                onClick={() => {
                  setSelectedTab("Onsite");
                }}
              >
                Onsite
              </button>
              <button
                className={`w-full p-1 rounded-[10px] ${
                  selectedTab === "Online"
                    ? "bg-[#D47151] text-white"
                    : "hover:bg-gray-200 text-[#D47151] bg-[#F9EBE9]"
                }`}
                onClick={() => {
                  setSelectedTab("Online");
                }}
              >
                Online
              </button>
            </div>
            <div className="pl-4 text-custom-orange font-khand">
              Select venue
            </div>
          </div>
        </div>
        <div className="mt-1 font-khand text-[#455273 flex text-basic font-normal m-0">
          Event data and time <div className="text-red-500 font-">*</div>
        </div>
<div className="border-solid border-2 rounded-xl grid grid-cols-2 gap-2 px-2 pb-4">
  <div ><label
          htmlFor="eventDate"
          className="  font-khand text-[#455273 flex text-basic font-normal m-0"
        >
          Date <div className="text-red-500 font-">*</div>
        </label>
        <input
          required
          type="text"
          name="eventDate"
          id="eventDate"
          className=" my-1 w-full h-8 block flex-1  bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 border-2 rounded-xl"
        ></input></div>

<div ><label
          htmlFor="eventTime"
          className="  font-khand text-[#455273 flex text-basic font-normal m-0"
        >
          Start time  <div className="text-red-500 font-">*</div>
        </label>
        <input
          required
          type="text"
          name="eventTime"
          id="eventTime"
          className=" my-1 w-full h-8 block flex-1  bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 border-2 rounded-xl"
        ></input></div>

<div ><label
          htmlFor="duration"
          className="  font-khand text-[#455273 flex text-basic font-normal m-0"
        >
          Duration 
        </label>
        <input
          
          type="text"
          name="duration"
          id="duration"
          className=" my-1 w-full h-8 block flex-1  bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 border-2 rounded-xl"
        ></input></div>

<div ><label
          htmlFor="eventTimezone"
          className="  font-khand text-[#455273 flex text-basic font-normal m-0"
        >
          Timezone <div className="text-red-500 font-">*</div>
        </label>
        <input
          required
          type="text"
          name="eventTimezone"
          id="eventTimezone"
          className=" my-1 w-full h-8 block flex-1  bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 border-2 rounded-xl"
        ></input></div>

</div>
<label
          htmlFor="description"
          className="  font-khand text-[#455273 flex text-basic font-normal mt-5"
        >
          Description 
        </label>

<textarea name="description" id="description" className=" mt-1 w-full h-24 bg-transparent  pl-1 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6 border-2 rounded-xl " cols={30}></textarea>
<div className=" mt-5 font-khand text-[#455273 flex text-basic font-normal m-0">
          Cover photo <div className="text-red-500 font-">*</div>
        </div>

        <div className="width-full h-24 border-2 border-solod rounded-xl">
          <input type="image" src="" alt="" />
        </div>






        <button
          type="submit"
          className="flex text-center p-1 justify-center w-full bg-custom-orange text-white font-semibold rounded-lg  text-base font-mono"
        >
          form submission{" "}
        </button>
      </form>
    </div>
  );
}
