// "use client";
// import React, { useState, useEffect } from "react";
// import { HiOutlineViewGrid, HiOutlineViewList } from "react-icons/hi";

// import EventCard from "@/components/EventCard";
// import Pagination from "@mui/material/Pagination";
// import { Event } from "@/app/admin/Type";
// import { formatDate } from "@/util/helper";
// import EventListView from "./EventListView";
// import { EventType } from "@/app/page";

// function getData() {
//   const response = fetch(
//     `${process.env.NEXT_PUBLIC_URL}/api/v1/event/getPublishedEvents`,
//     {
//       method: "GET",
//       mode: "cors",
//     }
//   );

//   return response;
// }

// const EventViewMode = ({ event }: { event: EventType }) => {
//   useEffect(() => {
//     const handleResize = () => {
//       setEventsPerPage(4);
//     };

//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   // const getEventsPerPage = () => {
//   //   if (window.innerWidth >= 1024) {
//   //     return 8;
//   //   } else if (window.innerWidth >= 768) {
//   //     return 4;
//   //   } else {
//   //     return 3;
//   //   }
//   // };

//   // document.addEventListener("DOMContentLoaded", function () {
//   //   getEventsPerPage();
//   //   // Now you can use getEventsPerPage() safely.
//   // });

//   const [eventarr, setEventarr] = useState<Event[]>([]);
//   const [viewMode, setViewMode] = useState("grid");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [sortBy, setSortBy] = useState("");
//   const [eventsPerPage, setEventsPerPage] = useState(4);

//   useEffect(() => {
//     getData().then((res) => {
//       res.json().then((data) => {
//         setEventarr(data);
//       });
//     });
//   }, []);

//   const handleSortByChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const selectedSortBy = e.target.value;
//     setSortBy(selectedSortBy);
//     if (selectedSortBy === "name") {
//       const sortedEvents = [...eventarr].sort((a, b) =>
//         a.eventName.localeCompare(b.eventName)
//       );
//       setEventarr(sortedEvents);
//     } else if (selectedSortBy === "location") {
//       const sortedEvents = [...eventarr].sort((a, b) =>
//         a.selectedTab.localeCompare(b.selectedTab)
//       );
//       setEventarr(sortedEvents);
//     } else if (selectedSortBy === "date") {
//       const sortedEvents = [...eventarr].sort((a, b) =>
//         a.eventStartDate.localeCompare(b.eventName)
//       );
//       setEventarr(sortedEvents);
//     }
//   };
//   const handleViewChange = (mode: React.SetStateAction<string>) => {
//     setViewMode(mode);
//   };
//   const paginate = (event: any, pageNumber: React.SetStateAction<number>) =>
//     setCurrentPage(pageNumber);

//   const indexOfLastEvent = currentPage * eventsPerPage;
//   const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
//   const currentEvents = eventarr.slice(indexOfFirstEvent, indexOfLastEvent);
//   return (
//     <div>
//       <div className="flex flex-col md:flex-row lg:flex-row justify-between">
//         <div className="font-bold text-[30px] md:text-[40px] lg:text-[60px] text-[#906953] drop-shadow-lg ms-8 ">
//           Upcoming Events
//         </div>
//         <div className="ms-12 sm:ms-0 flex flex-col md:flex-col lg:flex-row gap-2 md:gap-2 lg:gap-6 mr-0 md:mr-20 lg:mr-20 text-gray-600">
//           <div className=" mt-2 md:mt-6 lg:mt-10 flex flex-row">
//             Sort By
//             <div className="relative ml-4">
//               <select
//                 className="appearance-none bg-white border border-gray-300 px-4 py-1 rounded-md shadow-sm text-sm focus:outline-none focus:border-custom-brown items-center"
//                 value={sortBy}
//                 onChange={handleSortByChange}
//               >
//                 <option value="location">Location</option>
//                 <option value="name">Name</option>
//                 <option value="organization">Organization</option>
//                 <option value="date">Date</option>
//               </select>
//             </div>
//           </div>
//           <div className="mt-2 md:mt-2 lg:mt-10 flex flex-row gap-4 mr-20">
//             View As
//             <div className="mt-1 flex flex-row gap-3 cursor-pointer">
//               <HiOutlineViewGrid
//                 className={`cursor-pointer hover:bg-gray-400   ${
//                   viewMode === "grid" ? "" : ""
//                 }`}
//                 onClick={() => handleViewChange("grid")}
//               />
//               <HiOutlineViewList
//                 className={`cursor-pointer hover:bg-gray-400 ${
//                   viewMode === "list" ? "" : ""
//                 }`}
//                 onClick={() => handleViewChange("list")}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div
//         className={`flex ${
//           viewMode === "grid"
//             ? "flex-wrap ml-1"
//             : " flex-col gap-3 justify-center items-center"
//         }  `}
//       >
//         {/* <EventListView /> */}
//         {currentEvents.map((event, index) =>
//           viewMode === "grid" ? (
//             <EventCard
//               id={event._id}
//               key={index}
//               name={event.eventName}
//               img={event.postImageLink}
//               location={event.selectedTab}
//               date={formatDate(event.eventStartDate)}
//               time={event.eventTimeZone}
//             />
//           ) : (
//             <EventListView
//               id={event._id}
//               key={index}
//               name={event.eventName}
//               img={event.postImageLink}
//               location={event.selectedTab}
//               date={formatDate(event.eventStartDate)}
//               time={event.eventTimeZone}
//             />
//           )
//         )}{" "}
//       </div>

//       {/* Pagination */}
//       {eventarr.length > eventsPerPage && (
//         <Pagination
//           count={Math.ceil(eventarr.length / eventsPerPage)}
//           variant="outlined"
//           shape="rounded"
//           onChange={paginate}
//           className="flex justify-center mt-4"
//         />
//       )}
//     </div>
//   );
// };

// export default EventViewMode;

"use client";
import React, { useState, useEffect } from "react";
import { HiOutlineViewGrid, HiOutlineViewList } from "react-icons/hi";

import EventCard from "@/components/EventCard";
import Pagination from "@mui/material/Pagination";
import { Event } from "@/app/admin/Type";
import { formatDate } from "@/util/helper";
import EventListView from "./EventListView";
import { EventType } from "@/app/Type";
// import { EventType } from "@/app/page";

const EventViewMode = ({ event }: { event: EventType[] }) => {
  const [eventarr, setEventarr] = useState<EventType[]>(event);
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("");
  const [eventsPerPage, setEventsPerPage] = useState(4);

  // setEventarr(event);

  useEffect(() => {
    const handleResize = () => {
      setEventsPerPage(4);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // const getEventsPerPage = () => {
  //   if (window.innerWidth >= 1024) {
  //     return 8;
  //   } else if (window.innerWidth >= 768) {
  //     return 4;
  //   } else {
  //     return 3;
  //   }
  // };

  // document.addEventListener("DOMContentLoaded", function () {
  //   getEventsPerPage();
  //   // Now you can use getEventsPerPage() safely.
  // });

  const handleSortByChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSortBy = e.target.value;
    setSortBy(selectedSortBy);
    if (selectedSortBy === "name") {
      const sortedEvents = [...eventarr].sort((a, b) =>
        a.eventName.localeCompare(b.eventName)
      );
      setEventarr(sortedEvents);
    } else if (selectedSortBy === "location") {
      const sortedEvents = [...eventarr].sort((a, b) =>
        a.selectedTab.localeCompare(b.selectedTab)
      );
      setEventarr(sortedEvents);
    } else if (selectedSortBy === "date") {
      const sortedEvents = [...eventarr].sort((a, b) =>
        a.eventStartDate.localeCompare(b.eventStartDate)
      );
      setEventarr(sortedEvents);
    }
  };
  const handleViewChange = (mode: React.SetStateAction<string>) => {
    setViewMode(mode);
  };
  const paginate = (event: any, pageNumber: React.SetStateAction<number>) =>
    setCurrentPage(pageNumber);

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = eventarr.slice(indexOfFirstEvent, indexOfLastEvent);
  return (
    <div>
      <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between">
        <div className="font-bold text-[30px] md:text-[40px] lg:text-5xl text-[#906953] drop-shadow-lg ms-8 ">
          Upcoming Events
        </div>
        <div className="ms-12 sm:ms-0 justify-center items-center flex flex-col md:flex-col lg:flex-row gap-2 md:gap-2 lg:gap-6 mr-0 md:mr-20 lg:mr-20 text-gray-600">
          <div className=" mt-2 md:mt-6 lg:mt-10 flex flex-row">
            Sort By
            <div className="relative ml-4">
              <select
                className="appearance-none bg-white border border-gray-300 px-4 py-1 rounded-md shadow-sm text-sm focus:outline-none focus:border-custom-brown items-center"
                value={sortBy}
                onChange={handleSortByChange}
              >
                <option value="location">Location</option>
                <option value="name">Name</option>
                <option value="organization">Organization</option>
                <option value="date">Date</option>
              </select>
            </div>
          </div>
          <div className="mt-2 md:mt-2 lg:mt-10 flex flex-row gap-4 mr-20">
            View As
            <div className="mt-1 flex flex-row gap-3 cursor-pointer">
              <HiOutlineViewGrid
                className={`cursor-pointer hover:bg-gray-400   ${
                  viewMode === "grid" ? "" : ""
                }`}
                onClick={() => handleViewChange("grid")}
              />
              <HiOutlineViewList
                className={`cursor-pointer hover:bg-gray-400 ${
                  viewMode === "list" ? "" : ""
                }`}
                onClick={() => handleViewChange("list")}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`flex ${
          viewMode === "grid"
            ? "flex-wrap ml-1"
            : " flex-col gap-3 justify-center items-center"
        }  `}
      >
        {/* <EventListView /> */}
        {currentEvents.map((event, index) =>
          viewMode === "grid" ? (
            <EventCard
              id={event._id}
              key={index}
              name={event.eventName}
              img={event.dashboardImage}
              location={event.selectedTab}
              date={formatDate(event.eventStartDate)}
              time={event.startTime}
            />
          ) : (
            <EventListView
              id={event._id}
              key={index}
              name={event.eventName}
              img={event.dashboardImage}
              location={event.selectedTab}
              date={formatDate(event.eventStartDate)}
              time={event.startTime}
            />
          )
        )}{" "}
      </div>

      {/* Pagination */}
      {eventarr.length > eventsPerPage && (
        <Pagination
          count={Math.ceil(eventarr.length / eventsPerPage)}
          variant="outlined"
          shape="rounded"
          onChange={paginate}
          className="flex justify-center mt-4"
        />
      )}
    </div>
  );
};

export default EventViewMode;
