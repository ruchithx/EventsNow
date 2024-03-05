"use client";
import Footer from "@/components/Footer";
import HostSideBar from "./components/HostSideBar";
import CoverPhoto from "./components/CoverPhoto";
import Description from "./components/Description";
import PostTab from "./components/PostTab";
import React, { useState } from 'react'; 
import SmallView from "./components/SmallView";


export default function Home() {
  const [activeComponent, setActiveComponent] = useState("CoverPhoto");

  const handleComponentChange = (component: string) => {
    setActiveComponent(component);
};

  return (
    <div>
      <div className="md:flex relative">

        
        {activeComponent === "CoverPhoto" && (
                    <CoverPhoto 
                        image={"/images/Event/HostPage/cover2.jpg"}
                        // image={"/images/ReusableComponents/PictureOfPost.jpg"}
                    />
                )}
        
     
      {activeComponent === "PostTab" && <PostTab/>}
     
        
        
          <div className="md:hidden">
            <SmallView 
            EventName={"'KUWENI'"}
            Location={"Matara"}
            Time={"12.00 to 14.00"}
            Date={"21th April 2020"}/>
          </div>
        

        <div className="md:absolute md:right-0 hidden md:block ">
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
