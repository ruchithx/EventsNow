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
        <div className="flex py-1 justify-between pl-10 pr-48">
          <div className="">{name}</div>
          <div className=""></div>
          {email}
        </div>
      </ContainerWithStroke>
    </div>
  );
}
