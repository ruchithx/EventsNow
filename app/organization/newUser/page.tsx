import React from "react";
// import NewUser from "./components/NewUser";
import { Suspense } from "react";
import dynamic from "next/dynamic";

function SearchBarFallback() {
  return <>placeholder</>;
}

export default function Page() {
  const NewUser = dynamic(() => import("./NewUser"));
  return (
    <div>
      <Suspense fallback={<SearchBarFallback />}>
        <NewUser />
      </Suspense>
    </div>
  );
}
