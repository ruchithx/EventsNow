import React from 'react'

export default function TicketDetails({id}:{id:string;}) {
  return (
    <div key={id}>
      <div className="grid grid-cols-2 gap-2 pt-2">
        <div>
            <label
              htmlFor="eventDate"
              className="  font-khand text-[#455273] flex text-basic font-normal m-0"
            >
              Ticket Class 
            </label>
            <input
              
              type="text"
              name="eventDate"
              id="eventDate"
              className=" my-1 w-full h-8 block flex-1  bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 border-2 rounded-xl focus:outline-custom-orange "
            ></input>
          </div>

          <div>
            <label
              htmlFor="eventTime"
              className="  font-khand text-[#455273] flex text-basic font-normal m-0"
            >
              Price 
            </label>
            <input
              
              type="text"
              name="eventTime"
              id="eventTime"
              className=" my-1 w-full h-8 block flex-1  bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 border-2 rounded-xl focus:outline-custom-orange "
            ></input>
          </div>
        </div>
    </div>
  )
}
