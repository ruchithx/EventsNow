"use client";
import EventRegisterFormBasic from "@/app/registerevent/EventRegisterFormBasic";
import NavBar from "@/components/NavBar";
import ProfileSideNavBar from "@/components/ProfileSideNavBar";
export default function Home() {
  return (
    <div>
      <NavBar />
      <div>
        <div>
          <EventRegisterFormBasic />
        </div>
      </div>
    </div>
  );
}
