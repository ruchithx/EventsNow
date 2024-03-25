"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
const DynamicPayment = dynamic(() => import("./PaymentTest"), {
  ssr: false,
});
export default function TestNew() {
  const [showPayment, setShowPayment] = useState(false);

  const handleShowPayment = () => {
    setShowPayment(true);
  };
  return (
    <div>
      <button className="text-black" onClick={handleShowPayment}>
        Make Test Payment
      </button>
      {showPayment && <DynamicPayment />}
    </div>
  );
}
