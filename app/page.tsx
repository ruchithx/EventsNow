"use client";

import Footer from "@/components/Footer";
import {
  getAllOrganization,
  getAllUser,
} from "./admin/dashboard/[id]/FetchData";

export default function Home() {
  async function handleButton() {
    const res = await getAllOrganization();
    const data = await res.json();
    console.log(data);
  }

  async function handleuser() {
    const res = await getAllUser();
    const data = await res.json();
    console.log("user" + data);
  }
  return (
    <div>
      <button className="w-40 bg-black text-white" onClick={handleButton}>
        click the organization{" "}
      </button>
      <button className="w-40 bg-black text-white" onClick={handleuser}>
        click the User{" "}
      </button>
      <button className="w-40 bg-black text-white" onClick={handleButton}>
        click the event{" "}
      </button>
      <Footer />
    </div>
  );
}
