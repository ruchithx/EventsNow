import React from "react";
import ContainerWithStroke from "./ContainerWithStroke";
interface TeamMemberCardProps {
  name: string;
  email: string;
}

export default function TeamMemberCard({ name, email }: TeamMemberCardProps) {
  return (
    <div>
      <ContainerWithStroke>
        <div className="lg:flex mx-auto py-1 md:justify-around md:pr-10 lg:pl-10 max-sm:text-sm ">
          <div className="">{name}</div>
          {email}
        </div>
      </ContainerWithStroke>
    </div>
  );
}
