import React from "react";
import Container from "./Container";
import ContainerWithStroke from "./ContainerWithStroke";
export default function Hostpage() {
  return (
    <div>
      <Container>
        <div className="pl-10 mb-5 grid gap-2 mt-3">
          <div className=" font-mono text-custom-orange font-medium text-3xl ">
            Host page
          </div>
          <div className=" text-[#848484] font-mono">
            You can upload host page or design your own host page
          </div>
        </div>
        <div className="bg-[#D9D9D9] w-full font-Inter font-semibold text-custom-orange rounded-lg px-24 ">
          <ContainerWithStroke>
            <div className=" py-1 flex justify-between ">
              <div className="  ">UPLOAD EVENT PAGE</div>
              <div className="ASHAN">ashna</div>
            </div>
          </ContainerWithStroke>
        </div>
      </Container>
    </div>
  );
}
