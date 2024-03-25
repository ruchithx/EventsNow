"use client";
import React, { useState } from "react";
import Payment from "payhere-embed-sdk";

const PaymentTest = () => {
  const [paymentConfig, setPaymentConfig] = useState({
    merchantId: "1226118", // Replace with your Sandbox Business ID
    appId: "Mjk3NjYwMjU4MzIzNjcxODIzMTIyNTY5ODAzMTg1MjEzNjE5NDQzNw==", // Replace with your Sandbox API Key
    currency: "LKR", // Sri Lankan Rupee (or your desired currency)
    amount: 1000, // Amount in cents (replace with your test amount)
    statementDescription: "Test Payment", // Description for the transaction
    // ... other optional configuration options
  });

  return <Payment config={paymentConfig} />;
};

export default PaymentTest;
