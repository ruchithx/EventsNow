import React from "react";
import NewUser from "./components/NewUser";
import { Suspense } from "react";

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
