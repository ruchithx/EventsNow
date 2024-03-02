import React from "react";
import Container from "./Container";
import ContainerWithStroke from "./ContainerWithStroke";
import Image from "next/image";
export default function Hostpage() {
  return (
    <div>
      <Container>
        <div className="mt-5">
          <div className="pl-10 mb-5 grid gap-2 mt-3 ">
            <div className=" font-mono text-custom-orange font-medium text-3xl ">
              Host page
            </div>
            <div className=" text-[#848484] font-mono">
              You can upload host page or design your own host page
            </div>
          </div>
          <div className="bg-[#D9D9D9] w-full font-Inter text-base grid gap-8 py-16 font-semibold text-custom-orange rounded-lg px-24 mb-20 ">
            <ContainerWithStroke>
              <button className="w-full">
                <div className=" py-1 flex justify-between  mx-10">
                  <div className="  ">UPLOAD EVENT PAGE</div>
                  <Image
                    className="mt-1"
                    src="/images/eventDash/Arrow_left.svg"
                    alt="arrow"
                    width={25}
                    height={25}
                  />
                </div>
              </button>
            </ContainerWithStroke>
            <ContainerWithStroke>
              <button className="w-full">
                <div className=" py-1 flex justify-between  mx-10">
                  <div className="  ">EDIT EVENT PAGE BY USING TEMPLATE</div>
                  <Image
                    className="mt-1"
                    src="/images/eventDash/Arrow_left.svg"
                    alt="arrow"
                    width={25}
                    height={25}
                  />
                </div>
              </button>
            </ContainerWithStroke>
            <ContainerWithStroke>
              <button className="w-full">
                <div className=" py-1 flex justify-between  mx-10">
                  <div className="  "> PAGE BUILDER</div>
                  <Image
                    className="mt-1"
                    src="/images/eventDash/Arrow_left.svg"
                    alt="arrow"
                    width={25}
                    height={25}
                  />
                </div>
              </button>
            </ContainerWithStroke>
          </div>
        </div>
      </Container>
    </div>
  );
}
