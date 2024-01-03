"use client";
import EventRegisterFormBasic from "@/components/EventRegisterFormBasic";
import NavBar from "@/components/NavBar";
import ProfileSideNavBar from "@/components/ProfileSideNavBar";
export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="grid ">
        <div>
          <EventRegisterFormBasic />
        </div>
      </div>
    </div>
  );
}
