"use client";

import Footer from "@/components/Footer";
import {
  getAllOrganization,
  getAllUser,
} from "./admin/dashboard/[id]/FetchData";

export default function Home() {
  async function handleClickIt() {
    const res = await getAllUser();
    const data = await res.json();
    console.log("Organization data", data);
  }
  return (
    <div>
      <button onClick={handleClickIt}> click it </button>

      <div>Hero section</div>
      <div>Event</div>
      <div>Out dated Event</div>
      <Footer />
    </div>
  );
}
