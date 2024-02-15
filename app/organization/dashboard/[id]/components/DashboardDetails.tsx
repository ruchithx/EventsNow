import Image from "next/image";
import React, { memo } from "react";
import { useOrg } from "../OrgContext";
import { Organization } from "../Type";

interface contextProps {
  organization: Organization;
}

const DashboardDetails = memo(function DashboardDetails() {
  const { organization } = useOrg() as contextProps;

  return (
    <div>
      <div className="bg-[#D9D9D9] rounded-lg items-center  h-full py-3 px-4 flex flex-col  ">
        <div className="flex flex-col items-start gap-3 justify-start">
          <Image
            src={`${organization.postImageLink}`}
            alt="organization dp"
            width={226}
            className="rounded-lg"
            height={300}
          />
          <div className="md:text-lg lg:text-2xl  gap-2   items-center  flex text-[#353535]">
            {organization.organizationName}
          </div>
          <div className="md:text-base lg:text-base flex justify-center items-center  gap-2">
            <Image
              src="/images/Organization/TeamOfUsers.svg"
              alt="user count"
              width={30}
              height={30}
            />
            User Count - 8
          </div>
          <div className="md:text-base lg:text-base flex justify-center items-center gap-3">
            <Image
              src="/images/Organization/Bookmark_light.svg"
              alt="user count"
              width={26}
              height={26}
            />
            Event Count - 2
          </div>
        </div>
      </div>
    </div>
  );
});

// export default function DashboardDetails() {}
export default DashboardDetails;
