import React from "react";

interface HasDataProps {
  message: string;
}

export default function HasData({ message }: HasDataProps) {
  return (
    <div className="flex justify-center italic text-2xl text-[#dc2626]">
      {message}
    </div>
  );
}
