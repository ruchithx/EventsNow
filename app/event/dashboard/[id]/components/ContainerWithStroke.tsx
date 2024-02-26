import React from "react";

export default function ContainerWithStroke({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full hover:shadow-xl ease-in-out duration-300 rounded-xl shadow-md">
      <div className="  w-full  text-center content-center  rounded-xl border-solid border-t-2 border-custom-orange shadow-[0px_4px_4px_0px_rgba(212,113,81,0.25)_inset] hover:border-opacity-90 border-opacity-60 ease-out duration-100 bg-white" >
        {children}
      </div>
    </div>
  );
}
