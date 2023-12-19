import EventDashBoard_Overview_btn from "@/components/EventDashBoard_Overview_btn";

export default function Home() {
  return (
    <div>
      <EventDashBoard_Overview_btn
        description={"Total attendence"}
        image={"Vector.svg"}
      />
      <EventDashBoard_Overview_btn
        description={"Total ticket sale"}
        image={"emojione_admission-tickets.svg"}
      />
    </div>
  );
}
