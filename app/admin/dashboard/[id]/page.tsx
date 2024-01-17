
import React from "react";
import AdminDashboard from "../../components/AdminDashboard";

import Profile from "@/components/Profile";

export default function page() {
  return (
    <div>
      <div>
        <div className="p-4 bg-gray-200 w-full">
          <div className="flex justify-end">
            <Profile picture={"User_cicrle"} name="Ashan dilz" />
          </div>
        </div>
        <AdminDashboard />
      </div>
    </div>
  );
}
