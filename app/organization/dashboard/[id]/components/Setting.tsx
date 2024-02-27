import React, { useState } from "react";
import { useOrg } from "../OrgContext";
import { error } from "@/util/Toastify";
import { success } from "@/util/Toastify";
import dynamic from "next/dynamic";
import { Organization } from "../Type";
import { IoSaveOutline } from "react-icons/io5";
import { FaRegWindowClose } from "react-icons/fa";
const ProfileSettings = dynamic(
  () => import("@/app/organization/dashboard/[id]/components/ProfileSettings")
);

interface contextProps {
  organization: Organization;
}

export default function Setting() {
  const { organization } = useOrg() as contextProps;
  const [bank, setBank] = useState(organization.bank || "");
  const [branch, setBranch] = useState(organization.branch || "");
  const [payout, setPayout] = useState(organization.payout || "");
  const [accountName, setAccountName] = useState(
    organization.accountName || ""
  );
  const [accountNumber, setAccountNumber] = useState(
    organization.accountNumber || ""
  );

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isEditingAdvanced, setIsEditingAdvanced] = useState<boolean>(false);

  async function handleSave() {
    if (!bank || !branch || !payout || !accountName || !accountNumber) {
      error("Please fill all the fields");
      return;
    }

    if (
      bank === organization.bank &&
      branch === organization.branch &&
      payout === organization.payout &&
      accountName === organization.accountName &&
      accountNumber === organization.accountNumber
    ) {
      error("No changes detected");
      return;
    }

    const data = { bank, branch, payout, accountName, accountNumber };

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
    setIsEditingAdvanced(false);
    success("Organization details updated successfully");
  }

  return (
    <div className="flex rounded-lg  shadow-3xl md:pl-10 md:ml-2 pl-5 bg-[#fff] pt-8 lg:pl-12 flex-col justify-start items-start gap-12">
      <div className="md:w-11/12 w-11/12  lg:w-full flex flex-col gap-3">
        <div className="lg:text-3xl text-2xl  sm:w-full lg:w-9/12 md:w-full flex justify-between font-semibold text-custom-orange	font-IBM">
          ACCOUNT DETAILS
          {!isEditing && (
            <button
              onClick={() => setIsEditing(true)}
              className=" text-white px-4 py-2 rounded-lg"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.2038 10.7959L18.9998 8.99994C19.545 8.45469 19.8176 8.18207 19.9634 7.88797C20.2407 7.32842 20.2407 6.67146 19.9634 6.11191C19.8176 5.81782 19.545 5.54519 18.9998 4.99994C18.4545 4.45469 18.1819 4.18207 17.8878 4.03633C17.3282 3.75905 16.6713 3.75905 16.1117 4.03633C15.8176 4.18207 15.545 4.45469 14.9998 4.99994L13.1811 6.8186C14.145 8.4692 15.5311 9.84476 17.2038 10.7959ZM11.7267 8.27305L4.85615 15.1436C4.43109 15.5686 4.21856 15.7812 4.07883 16.0422C3.93909 16.3033 3.88015 16.5981 3.76226 17.1875L3.14686 20.2645C3.08034 20.5971 3.04708 20.7634 3.14168 20.858C3.23629 20.9526 3.4026 20.9194 3.73521 20.8529L6.81219 20.2375C7.40164 20.1196 7.69637 20.0606 7.95746 19.9209C8.21856 19.7812 8.43109 19.5686 8.85615 19.1436L15.7456 12.2542C14.1239 11.2385 12.7522 9.87622 11.7267 8.27305Z"
                  fill="#666666"
                />
              </svg>
            </button>
          )}
        </div>
        <div className="md:w-full mt-2 lg:w-3/4 text-[#525252]">
          {/* <div className="border-[1px] border-[#848484] flex items-center gap-3 px-2 py-1 rounded-lg">
            Organization Name -:
            <input
              required
              type="text"
              name="firstName"
              id="firstName"
              // value={accountName}
              // onChange={(e) => setAccountName(e.target.value)}
              className=" focus:outline-none   block flex-1  bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6 rounded-[12px]"
            />
          </div> */}
          <ProfileSettings
            setIsEditing={setIsEditing}
            isEditing={isEditing}
            organizationName={organization.organizationName}
            organizationID={organization._id}
            name={"Organization name"}
          />
        </div>
      </div>
      <div className="w-11/12 lg:w-full ">
        <div className="flex font-semibold	 justify-between lg:text-3xl text-2xl sm:w-full lg:w-9/12 md:w-full  text-custom-orange	font-IBM">
          ADVANCED DETAILS
          {!isEditingAdvanced && (
            <button
              onClick={() => setIsEditingAdvanced(true)}
              className=" text-white px-4 py-2 rounded-lg"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.2038 10.7959L18.9998 8.99994C19.545 8.45469 19.8176 8.18207 19.9634 7.88797C20.2407 7.32842 20.2407 6.67146 19.9634 6.11191C19.8176 5.81782 19.545 5.54519 18.9998 4.99994C18.4545 4.45469 18.1819 4.18207 17.8878 4.03633C17.3282 3.75905 16.6713 3.75905 16.1117 4.03633C15.8176 4.18207 15.545 4.45469 14.9998 4.99994L13.1811 6.8186C14.145 8.4692 15.5311 9.84476 17.2038 10.7959ZM11.7267 8.27305L4.85615 15.1436C4.43109 15.5686 4.21856 15.7812 4.07883 16.0422C3.93909 16.3033 3.88015 16.5981 3.76226 17.1875L3.14686 20.2645C3.08034 20.5971 3.04708 20.7634 3.14168 20.858C3.23629 20.9526 3.4026 20.9194 3.73521 20.8529L6.81219 20.2375C7.40164 20.1196 7.69637 20.0606 7.95746 19.9209C8.21856 19.7812 8.43109 19.5686 8.85615 19.1436L15.7456 12.2542C14.1239 11.2385 12.7522 9.87622 11.7267 8.27305Z"
                  fill="#666666"
                />
              </svg>
            </button>
          )}
        </div>

        <div className="w-full  lg:w-3/4">
          <select
            {...(!isEditingAdvanced && { disabled: true })}
            id="countries"
            value={bank}
            onChange={(e) => setBank(e.target.value)}
            className="mt-3 focus:outline-custom-orange w-full  block flex-1  bg-transparent py-1.5 pl-1 text-gray-600  placeholder:text-gray-400  sm:text-sm sm:leading-6 border-2 rounded-[12px]"
          >
            <option selected>Bank</option>
            <option value="Sampath">Sampath</option>
            <option value="BOC">BOC</option>
            <option value="peoples">peoples</option>
            <option value="NSB">NSB</option>
          </select>
          <select
            id="countries"
            {...(!isEditingAdvanced && { disabled: true })}
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            className=" mt-3 text-gray-600  focus:outline-custom-orange w-full  block flex-1  bg-transparent py-1.5 pl-1  placeholder:text-gray-400  sm:text-sm sm:leading-6 border-2 rounded-[12px]"
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
              {...(!isEditingAdvanced && { disabled: true })}
              id="firstName"
              value={accountName}
              onChange={(e) => setAccountName(e.target.value)}
              className=" focus:outline-custom-orange w-full  block flex-1  bg-transparent py-1.5 pl-1 text-gray-600  placeholder:text-gray-600  focus:ring-0 sm:text-sm sm:leading-6 border-2 rounded-[12px]"
              placeholder=" Account Name  "
            />
            <input
              required
              {...(!isEditingAdvanced && { disabled: true })}
              type="text"
              name="firstName"
              id="firstName"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              className="focus:outline-custom-orange  w-full  block flex-1  bg-transparent py-1.5 pl-1  placeholder:text-gray-600  text-gray-600 focus:ring-0 sm:text-sm sm:leading-6 border-2 rounded-[12px]"
              placeholder="Account Number "
            />
          </div>
          <select
            id="countries"
            {...(!isEditingAdvanced && { disabled: true })}
            value={payout}
            onChange={(e) => setPayout(e.target.value)}
            className="focus:outline-custom-orange text-gray-600  w-full  block flex-1  bg-transparent py-1.5 pl-1  placeholder:text-gray-400  sm:text-sm sm:leading-6 border-2 rounded-[12px]"
          >
            <option selected>payout frequency</option>
            <option value="1 week">1 week</option>
            <option value="2 week">2 week</option>
            <option value="3 week">3 week</option>
            <option value="4 week">4 week</option>
          </select>
          {isEditingAdvanced && (
            <div className="w-full mt-4 gap-2  flex justify-end">
              <button
                onClick={() => handleSave()}
                className="bg-custom-orange button flex justify-center items-center gap-2  text-white px-4 py-1 rounded-lg"
              >
                {" "}
                <IoSaveOutline size={18} />
                save
              </button>
              <button
                onClick={() => setIsEditingAdvanced(false)}
                className="button flex justify-center items-center gap-2 bg-custom-orange button  text-white px-4 py-1 rounded-lg"
              >
                <FaRegWindowClose size={18} />
                close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
