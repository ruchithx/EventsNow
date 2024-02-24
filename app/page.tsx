"use client";

import Footer from "@/components/Footer";
import { getAllOrganization } from "./admin/dashboard/[id]/FetchData";

export default function Home() {
  async function handleButton() {
    const res = await getAllOrganization();
    const data = await res.json();
    console.log(data);
  }
  return (
    <div>
      <button className="w-40 bg-black text-white" onClick={handleButton}>
        click the button{" "}
      </button>
      <Footer />
    </div>
  );
}
