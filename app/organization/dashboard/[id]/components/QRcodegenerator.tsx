import React from "react";
import QRCode from "react-qr-code";
interface QRtype{
  eventId:string,
  userId:string
}
export default function QRcodeGenerator({eventId,userId}:QRtype) {
  return (
    <div>
      <QRCode value={`eventid:${eventId},userid:${userId}`} />
    </div>
  );
}
