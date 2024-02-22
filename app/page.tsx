"use client";
import Image from "next/image";
import Footer from "@/components/Footer";
import HostSideBar from "./Host/components/HostSideBar";
import CoverPhoto from "./Host/components/CoverPhoto";


export default function Home() {
  return (
    <div>
      <div className="flex">
        <CoverPhoto 
          image={"https://example.com/images/Event/HostPage/Paper_fill.svg"}
        />
       
          <HostSideBar
            EventName={"KUWENI"}
            Location={"Matara"}
            Time={"12.00 to 14.00"}
            Date={"21th April 2020"} 
          />
    +
        
      </div>
     
      <Footer />
    </div>
  );

}
