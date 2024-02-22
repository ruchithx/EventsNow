import React from "react";
// import NewUser from "./components/NewUser";
import { Suspense } from "react";
import dynamic from "next/dynamic";

const NewUser = dynamic(() => import("./components/NewUser"));

function SearchBarFallback() {
  return <>placeholder</>;
}

export default function Page() {
  return (
    <div>
      <Suspense fallback={<SearchBarFallback />}>
        <NewUser />
      </Suspense>
    </div>
  );
}
