"use client";
import Image from "next/image";
import Footer from "@/components/Footer";
import HostSideBar from "./Host/components/HostSideBar";
import CoverPhoto from "./Host/components/CoverPhoto";
import Description from "./Host/components/Description";
import PostTab from "./Host/components/PostTab";
import React, { useState } from 'react'; 


export default function Home() {
  const [activeComponent, setActiveComponent] = useState("CoverPhoto");

  const handleComponentChange = (component: string) => {
    setActiveComponent(component);
};

  return (
    <div>
      <div className="flex relative">

        
        {activeComponent === "CoverPhoto" && (
                    <CoverPhoto 
                        image={"/images/Event/HostPage/cover1.jpg"}
                        // image={"/images/ReusableComponents/PictureOfPost.jpg"}
                    />
                )}
        

        {activeComponent === "PostTab" && <PostTab/>}
        

        <div className="absolute right-0">
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

      <Description />
     
      <Footer />
      
    </div>
    
  );

}
