"use client";

import EmptyStateComponent from "@/components/EmptyStateComponent";
import NavBar from "@/components/NavBar";
import OrganizationRequestPending from "@/components/OrganizationRequestPending";



export default function Home() {
  return (<div className="">
    <NavBar/>
    
    <div className="grid grid-cols-2">
  
      <EmptyStateComponent message="No organization found" />
      
        <OrganizationRequestPending 
        message="decision pending " />
        
        
    E</div>
    </div>
  );
}
