"use client";
import React, { useState } from "react";
import { HiOutlineViewGrid, HiOutlineViewList } from "react-icons/hi";
import { initialEventArr } from "./page";
import EventCard from "@/components/EventCard";
import Pagination from "@mui/material/Pagination";

const EventViewMode = () => {
  const [eventarr, setEventarr] = useState(initialEventArr);
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("");
  const eventsPerPage = 8;

  const handleSortByChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSortBy = e.target.value;
    setSortBy(selectedSortBy);
    if (selectedSortBy === "name") {
      const sortedEvents = [...eventarr].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setEventarr(sortedEvents);
    } else if (selectedSortBy === "location") {
      const sortedEvents = [...eventarr].sort((a, b) =>
        a.location.localeCompare(b.location)
      );
      setEventarr(sortedEvents);
    } else if (selectedSortBy === "date") {
      const sortedEvents = [...eventarr].sort((a, b) =>
        a.date.localeCompare(b.date)
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
      <div className="flex flex-col md:flex-row lg:flex-row justify-between">
        <div className="font-bold text-[30px] md:text-[40px] lg:text-[60px] text-[#906953] drop-shadow-lg ms-8 ">
          Upcoming Events
        </div>
        <div className="ms-12 sm:ms-0 flex flex-col md:flex-col lg:flex-row gap-2 md:gap-2 lg:gap-6 mr-0 md:mr-20 lg:mr-20 text-gray-600">
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
      <div className=" flex flex-wrap ms-12">
        {currentEvents.map((event, index) =>
          viewMode === "grid" ? (
            <EventCard
              key={index}
              name={event.name}
              img={event.img}
              location={event.location}
              date={event.date}
              time={event.time}
            />
          ) : (
            <div key={index}>abcd</div>
          )
        )}{" "}
      </div>

      {/* Pagination */}
      {eventarr.length > eventsPerPage && (
        <Pagination
          count={Math.ceil(initialEventArr.length / eventsPerPage)}
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
