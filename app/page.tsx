"use client";

import Footer from "@/components/Footer";
import Event from "./event/dashboard/[id]/components/Event";

export default function Home() {
  return (
    <div className="p-12">
      {/* <Footer /> */}
      <Event 
        EventName={"NadaGama"}
        Location={"Anuradhapura"}
        Date={"21st June 2024"}
        Time={"16.00 t0 22.00"}
        buttonDesc={"Stein Studio"}

      />
    </div>
  );
}
