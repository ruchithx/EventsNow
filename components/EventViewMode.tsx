"use client";
import React, { useState, useEffect } from "react";
import { HiOutlineViewGrid, HiOutlineViewList } from "react-icons/hi";
import EventCard from "@/components/EventCard";
import { formatDate } from "@/util/helper";
import EventListView from "./EventListView";
import { EventType } from "@/app/Type";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";

const EventViewMode = ({ event }: { event: EventType[] }) => {
  const [eventarr, setEventarr] = useState<EventType[]>(event);
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("");
  const [eventsPerPage, setEventsPerPage] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        if (document.documentElement.clientWidth >= 1448) {
          setEventsPerPage(4);
        } else if (document.documentElement.clientWidth >= 1024) {
          setEventsPerPage(3); // Large screens
        } else if (document.documentElement.clientWidth >= 768) {
          setEventsPerPage(2); // Medium screens
        } else {
          setEventsPerPage(1); // Small screens
        }
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSortByChange = (value: string) => {
    const selectedSortBy = value;
    setSortBy(selectedSortBy);
    const sortedEvents = [...eventarr];
    
    if (selectedSortBy === "name") {
      sortedEvents.sort((a, b) => a.eventName.localeCompare(b.eventName));
    } else if (selectedSortBy === "location") {
      sortedEvents.sort((a, b) => a.selectedTab.localeCompare(b.selectedTab));
    } else if (selectedSortBy === "date") {
      sortedEvents.sort((a, b) =>
        a.eventStartDate.localeCompare(b.eventStartDate)
      );
    }
    setEventarr(sortedEvents);
  };

  const handleViewChange = (mode: string) => {
    setViewMode(mode);
  };

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = eventarr.slice(indexOfFirstEvent, indexOfLastEvent);
  const totalPages = Math.ceil(eventarr.length / eventsPerPage);

  return (
    <div>
      <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between px-8 py-4">
        <div className="font-bold text-[30px] md:text-[40px] lg:text-5xl text-[#906953] drop-shadow-lg">
          Upcoming Events
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 md:mt-0">
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Sort By</span>
            <Select value={sortBy} onValueChange={handleSortByChange}>
              <SelectTrigger className="w-[180px] bg-white">
                <SelectValue placeholder="Select..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="location">Location</SelectItem>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="organization">Organization</SelectItem>
                <SelectItem value="date">Date</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-gray-600">View As</span>
            <div className="flex items-center gap-1 bg-white border rounded-md p-1">
              <Button
                variant={viewMode === "grid" ? "secondary" : "ghost"}
                size="icon"
                className="h-8 w-8"
                onClick={() => handleViewChange("grid")}
              >
                <HiOutlineViewGrid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "secondary" : "ghost"}
                size="icon"
                className="h-8 w-8"
                onClick={() => handleViewChange("list")}
              >
                <HiOutlineViewList className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`flex ${
          viewMode === "grid"
            ? "flex-wrap justify-center gap-6 p-4"
            : "flex-col gap-4 items-center p-4"
        }`}
      >
        {currentEvents.map((event, index) =>
          viewMode === "grid" ? (
            <EventCard
              id={event._id}
              key={event._id || index}
              name={event.eventName}
              img={event.dashboardImage}
              location={event.selectedTab}
              date={formatDate(event.eventStartDate)}
              time={event.startTime}
            />
          ) : (
            <EventListView
              id={event._id}
              key={event._id || index}
              name={event.eventName}
              img={event.dashboardImage}
              location={event.selectedTab}
              date={formatDate(event.eventStartDate)}
              time={event.startTime}
            />
          )
        )}
      </div>

      {eventarr.length > eventsPerPage && (
        <div className="mt-8 mb-8">
           <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if(currentPage > 1) paginate(currentPage - 1);
                  }}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                 <PaginationItem key={number}>
                   <PaginationLink
                     href="#"
                     isActive={currentPage === number}
                     onClick={(e) => {
                        e.preventDefault();
                        paginate(number);
                     }}
                   >
                     {number}
                   </PaginationLink>
                 </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext 
                  href="#"
                   onClick={(e) => {
                    e.preventDefault();
                    if(currentPage < totalPages) paginate(currentPage + 1);
                  }}
                   className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
};

export default EventViewMode;
