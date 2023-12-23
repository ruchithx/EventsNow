import BUyAdd from "@/components/BUyAdd";
import CreateAccount from "@/components/CreateAccount";
import Footer from "@/components/Footer";
import InviteButton from "@/components/InviteButton";
import Login from "@/components/Login";
import Searchbar from "@/components/Searchbar";

import Post from "@/components/Post";
import EventCardOrgDash from "@/components/EventCardOrgDash";
import EventCard from "@/components/EventCard";

import Event_Dashboard_Nav_bar from "@/components/Event_Dashboard_Nav_bar";
import Upcoming_Events from "../components/Upcoming_Events";
import Org_RequestHandle from "../components/Org_RequestHandle";
import Available_Orgs from "@/components/Available_Orgs";
import View_Report from "@/components/View_Report";

export default function Home() {
  return (
    <div>
      <Login
        bgcolors={"bg-custom-orange"}
        titleOfbutton={"LOGOUT"}
        image={"Subtract.svg"}
      />

      <CreateAccount
        bgcolors={"bg-custom-orange"}
        Description={"Create Account"}
      />
      <InviteButton bgcolors={"bg-custom-green"} Description={"Invite"} />
      <BUyAdd
        image1={"Check_fill.svg"}
        image2={"Paper_fill.svg"}
        Description1={"Buy Tickets"}
        Description2={"Add to wishlist"}
        bgcolors0={"bg-custom-orange"}
        bgcolors1={"bg-custom-blue"}
      />
      <Searchbar image={"Search.svg"} />
      <Footer
        image1={"facebook.svg"}
        image2={"instergram.svg"}
        image3={"google.svg"}
        image4={"youtube.svg"}
        image5={"messenger.svg"}
        imagelogo={"nav-logo.svg"}
      />
      <Post
        profilePic="profilpic"
        name="Ruchith Nusara"
        caption="Beautiful days"
        post="post"
      />
      <EventCardOrgDash
        img="image 1.png"
        name="NADA GAMA"
        location="KCC,Kandy Road,kandy."
        date="21st June 2023"
        time="16.00 to 22.00"
      />
      <EventCard
        img="image 3.png"
        name="Nadagama"
        location="Matara"
        date="2023-1-1"
        time="09.00"
      />

      <Event_Dashboard_Nav_bar
        first={"OVERVIEW"}
        second={"HOST PAGE"}
        third={"MY TEAM"}
        fourth={"REPORTS"}
        fifth={"CAMPAIGN"}
        sixth={"SETTINGS"}
        seventh={"TICKETS"}
      />

      <Upcoming_Events
        EventName={"NADAGAMA"}
        Location={"KCC,Kandy Road,kandy."}
        Time={"16.00 to 22.00"}
        Date={"21st June 2023"}
        Ratings={"RATING 4.6/5"}
        image={"image 3.png"}
        buttonDesc={"INFO"}
      />

      <Org_RequestHandle OrgName={"Stein Studio"} image={"image 1.png"} />

      <Available_Orgs
        OrgName={"Stein Studios"}
        image={"image 1.png"}
        noOfEvents={"45"}
        noOfMembers={"35"}
      />

      <View_Report
        discription1={"Attendence Report"}
        img={"Chart_alt_fill.svg"}
      />
    </div>
  );
}
