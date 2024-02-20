"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function Page() {
  const router = useSearchParams();
  const organizationId = router.get("organizationId");
  const data = router.get("data");

  console.log(data, organizationId);
  return <div>welcom</div>;
}
