import React, { useState } from "react";
import { useOrg } from "../OrgContext";
// import ProfileSettings from "@/app/organization/dashboard/[id]/components/ProfileSettings";
import AdvanceDetails from "./AdvanceDetails";
import { error } from "@/util/Toastify";
import { success } from "@/util/Toastify";
import dynamic from "next/dynamic";

const ProfileSettings = dynamic(
  () => import("@/app/organization/dashboard/[id]/components/ProfileSettings")
);

export default function Setting() {
  const { organization } = useOrg();
  const [bank, setBank] = useState("");
  const [branch, setBranch] = useState("");
  const [payout, setPayout] = useState("");
  const [accountName, setAccountName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");

  async function handleSave() {
    const data = { bank, branch, payout, accountName, accountNumber };
    console.log(
      bank,
      branch,
      payout,
      accountName,
      accountNumber,
      organization._id
    );
    const res = await fetch(
      `/api/v1/organization/updateOrganization/${organization._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!res.ok) {
      error("Failed to update organization details");
      return;
    }
    success("Organization details updated successfully");
  }

  return (
    <div className="flex rounded-lg  shadow-3xl md:pl-10 md:ml-2 pl-5 bg-[#fff] pt-8 lg:pl-12 flex-col justify-start items-start gap-12">
      <div className="md:w-11/12 w-11/12  lg:w-full flex flex-col gap-3">
        <div className="text-3xl font-semibold text-custom-orange	font-IBM">
          ACCOUNT DETAILS
        </div>
        <div className="md:w-full lg:w-3/4 text-[#666666]">
          <ProfileSettings
            organizationName={organization.fullName}
            organizationID={organization._id}
            name={"Organization name"}
          />
        </div>
      </div>
      <div className="w-11/12 lg:w-full ">
        <div className="text-3xl font-semibold text-custom-orange	font-IBM">
          ADVANCED DETAILS
        </div>

        <div className="w-full  lg:w-3/4">
          <select
            id="countries"
            value={bank}
            onChange={(e) => setBank(e.target.value)}
            className="mt-3  w-full h-8 block flex-1  bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6 border-2 rounded-[12px]"
          >
            <option selected>Bank</option>
            <option value="Sampath">Sampath</option>
            <option value="BOC">BOC</option>
            <option value="peoples">peoples</option>
            <option value="NSB">NSB</option>
          </select>
          <select
            id="countries"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            className=" mt-3 w-full h-8 block flex-1  bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6 border-2 rounded-[12px]"
          >
            <option selected>Branch</option>
            <option value="matara">matara</option>
            <option value="colombo">colombo</option>
            <option value="gampaha">gampaha</option>
            <option value="kandy">kandy</option>
          </select>

          <div className="my-5 flex gap-1">
            <input
              required
              type="text"
              name="firstName"
              id="firstName"
              value={accountName}
              onChange={(e) => setAccountName(e.target.value)}
              className="  w-full h-8 block flex-1  bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 border-2 rounded-[12px]"
              placeholder=" Account Name  "
            />
            <input
              required
              type="text"
              name="firstName"
              id="firstName"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              className="  w-full h-8 block flex-1  bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 border-2 rounded-[12px]"
              placeholder="Account Number "
            />
          </div>

          <select
            id="countries"
            value={payout}
            onChange={(e) => setPayout(e.target.value)}
            className="  w-full  block flex-1  bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6 border-2 rounded-[12px]"
          >
            <option selected>payout frequency</option>
            <option value="1 week">1 week</option>
            <option value="2 week">2 week</option>
            <option value="3 week">3 week</option>
            <option value="4 week">4 week</option>
          </select>

          <div className="w-full mt-2  flex justify-end">
            <button
              onClick={() => handleSave()}
              className="bg-custom-orange button  text-white px-4 py-1 rounded-lg"
            >
              save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
