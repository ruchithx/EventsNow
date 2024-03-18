"use client";
import React, { useEffect } from "react";

import md5 from "crypto-js/md5";
import Head from "next/head";
import axios from "axios";
import Script from "next/script";

declare global {
  interface Window {
    payhere: any;
  }
}

const PaymentModal = (props: any): JSX.Element | null => {
  // initial setup

  // const key = "updatable";
  // const orderId = props.orderId;
  // const name = props.item;
  // const amount = props.amount;
  // const merchantId = "1226118";
  // const merchantSecret =
  //   "Mjk3NjYwMjU4MzIzNjcxODIzMTIyNTY5ODAzMTg1MjEzNjE5NDQzNw==";

  // const hashedSecret = md5(merchantSecret).toString().toUpperCase();
  // let amountFormated = parseFloat(amount)
  //   .toLocaleString("en-us", { minimumFractionDigits: 2 })
  //   .replaceAll(",", "");
  // const currency = props.currency || "LKR";

  // const hash = md5(
  //   merchantId + orderId + amountFormated + currency + hashedSecret
  // )
  //   .toString()
  //   .toUpperCase();

  // var payment = {
  //   sandbox: true, // if the account is sandbox or real
  //   merchant_id: merchantId, // Replace your Merchant ID
  //   return_url: "http://localhost:3000/",
  //   cancel_url: "http://localhost:3000/",
  //   notify_url: "http://localhost:3000/",
  //   order_id: orderId,
  //   items: name,
  //   amount: amount,
  //   currency: currency,
  //   first_name: props.first_name,
  //   last_name: props.last_name,
  //   email: props.email,
  //   phone: props.phone,
  //   address: props.address,
  //   city: props.city,
  //   country: props.country,
  //   hash: hash,
  // };

  // 1st way to initialize the payhere sdk

  // // Called when user completed the payment. It can be a successful payment or failure
  // window.payhere.onCompleted = function onCompleted(paymentId: string) {
  //   console.log("-----------befoe");
  //   // axios
  //   //   .post("http://localhost:8000/api/postpaymentStatus", {
  //   //     status: "Success",
  //   //   })
  //   //   .then((res) => {
  //   //     console.log("Payment completed.");
  //   //   })
  //   //   .catch((error) => {
  //   //     console.log(error);
  //   //     console.log(`-------error is ${error}`);
  //   //   });
  //   console.log("-----------After");
  // };

  // // Called when user closes the payment without completing
  // window.payhere.onDismissed = function onDismissed() {
  //   //Note: Prompt user to pay again or show an error page
  //   console.log("Payment dismissed");
  // };

  // // Called when error happens when initializing payment such as invalid parameters
  // window.payhere.onError = function onError(error: string) {
  //   // Note: show an error page
  //   console.log("Error:" + error);
  // };

  // function pay() {
  //   console.log("before");
  //   window.payhere.startPayment(payment);
  //   console.log("after");
  // }

  // 2nd way to initialize the payhere sdk

  // useEffect(() => {
  //   // Initialize PayHere SDK
  //   const script = document.createElement("script");
  //   script.src = "https://www.payhere.lk/lib/payhere.js";
  //   script.async = true;
  //   script.onload = () => {
  //     // Initialize PayHere SDK after the script has been loaded
  //     window.payhere.init({
  //       sandbox: true, // if the account is sandbox or real
  //       merchant_id: merchantId, // Replace your Merchant ID
  //       return_url: "http://localhost:3000/",
  //       cancel_url: "http://localhost:3000/",
  //       notify_url: "http://localhost:3000/",
  //     });

  //     // Event handlers
  //     if (window.payhere) {
  //       window.payhere.onCompleted = function onCompleted(paymentId: string) {
  //         alert("Payment completed");
  //         console.log("Payment completed");
  //         // Handle payment completion
  //       };

  //       window.payhere.onDismissed = function onDismissed() {
  //         alert("Payment dismissed");
  //         console.log("Payment dismissed");
  //         // Handle payment dismissal
  //       };

  //       window.payhere.onError = function onError(error: string) {
  //         alert("Error: " + error);
  //         console.log("Paym");
  //         // Handle payment error
  //       };
  //     }

  //     document.body.appendChild(script);

  //     // Clean up function to remove the script when the component unmounts
  //     return () => {
  //       document.body.removeChild(script);
  //     };
  //   };
  // }, [merchantId]);

  // function pay() {
  //   if (window.payhere) {
  //     window.payhere.startPayment(payment);
  //   } else {
  //     console.error("PayHere SDK is not initialized.");
  //   }
  // }

  return (
    <>
      {/* <div>
        <Script src="https://www.payhere.lk/lib/payhere.js"></Script>
      </div>

      <button onClick={pay}>Pay with Payhere</button> */}
    </>
  );
};

export default PaymentModal;
