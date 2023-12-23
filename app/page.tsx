import Event_Dashboard_Nav_bar from "@/components/Event_Dashboard_Nav_bar";
import Upcoming_Events from "../components/Upcoming_Events";
import Org_RequestHandle from "../components/Org_RequestHandle";
import Available_Orgs from "@/components/Available_Orgs";
import View_Report from "@/components/View_Report";

export default function Home() {
  return (
    <div>
      {/* <Event_Dashboard_Nav_bar 
      first={"OVERVIEW"}
      second={"HOST PAGE"}
      third={"MY TEAM"}
      fourth={"REPORTS"}
      fifth={"CAMPAIGN"}
      sixth={"SETTINGS"}
      seventh={"TICKETS"}
      /> */}

      <Upcoming_Events 
        EventName={"NADAGAMA"} 
        Location={"KCC,Kandy Road,kandy."} 
        Time={"16.00 to 22.00"} 
        Date={"21st June 2023"} 
        Ratings={"RATING 4.6/5"}
        image={"image 3.png"}
        buttonDesc={"INFO"}
      />

      <Org_RequestHandle
        OrgName={"Stein Studio"}
        image={"image 1.png"}
      />
      
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
