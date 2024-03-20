'use client'
import React from "react";
import Html5QrcodeScanner from "html5-qrcode";
import { useRef, useEffect } from 'react';

export default function QRcodeScanner() {
    const scannerRef = useRef();
    useEffect(() => {
      const html5QrCodeScanner = new Html5QrcodeScanner(
        'qr-code-reader',
        {
          fps: 10,
          qrbox: 250,
        },
        result => {
          console.log('QR Code detected:', result);
          // Handle the QR code result as needed
        }
      );
      scannerRef.current = html5QrCodeScanner;
  
      return () => {
        if (scannerRef.current) {
          scannerRef.current.stop();
        }
      };
    }, []);


      

  return <div>
        <div id="qr-code-reader"></div>
  </div>;
}
