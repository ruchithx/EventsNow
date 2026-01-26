"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function HeroSection() {
  const info = () => {
    console.log("clicked info");
  };

  const images = [
    "/images/heroSection/Frame1.png",
    "/images/heroSection/Frame2.png",
    "/images/heroSection/Frame3.png",
    "/images/heroSection/Frame4.png",
  ];

  return (
    <div>
      <div className="grid lg:grid-cols-2 ">
        <div className=" bg-[#D7CFC7] h-[500px] md:h-[565px] xl:h-[836px] ">
          <div className=" text-[#906953] text-center font-khand text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl md:py-16 xl:pt-32 xl:px-12 font-semibold py-16 sm:py-12 md:px-6">
            “Where Moments Become Memories”
          </div>
          <div className="sm:hidden text-[#4A4A4A] text-center font-khand text-sm  font-medium px-8 pb-12 ">
            "Welcome to EVENTNOW! Discover and attend unforgettable events that
            create cherished memories. From concerts to conferences and cultural
            celebrations, we provide access to extraordinary experiences. Join
            us in embracing the joy of the moment!"
          </div>

          <div className="hidden sm:grid  text-[#4A4A4A] text-center font-khand text-sm  font-medium px-4  pb-10 lg:pb-4 md:px-12 lg:px-4 sm:mx-8">
            Welcome to EVENTNOW, where we believe that every event is an
            opportunity to create cherished memories. We're your dedicated
            platform for discovering and attending a wide range of exciting
            events that will leave you with lasting impressions. Whether it's a
            concert that fills your heart with music, a conference that ignites
            your passion, or a cultural celebration that brings communities
            together, our mission is to provide you with access to unforgettable
            experiences. Join us in embracing the joy of the moment and let us
            be your guide to the world of extraordinary events.
          </div>

          <div className="justify-center items-center pb-10 mx-10 flex flex-nowrap gap-2 md:py-8 xl:py-8">
            <Button
              onClick={() => info()}
              className="md:w-48 w-12 md:h-11 h-8 rounded-l-full bg-[#D47151] hover:bg-[#b05d42] flex items-center justify-center p-0"
            >
              <Image
                className=""
                src={"/images/heroSection/search.png"}
                width={20}
                height={20}
                alt="search"
              />

              <div className="hidden md:block font-mono text-white text-lg ml-2">
                search events
              </div>
            </Button>

            <div className="relative w-full max-w-sm">
              <Input
                className="w-full md:h-11 bg-white border-slate-300 shadow-sm focus-visible:ring-custom-orange"
                placeholder="Title, Venue, Organizer..."
                type="text"
                name="search"
              />
            </div>
          </div>
        </div>

        <div className="-z-10 overflow-hidden rounded-none hidden lg:grid h-[500px] md:h-[565px] xl:h-[836px]">
          <Carousel
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            opts={{
              loop: true,
            }}
            className="w-full h-full"
          >
            <CarouselContent className="h-full ml-0">
              {images.map((src, index) => (
                <CarouselItem key={index} className="pl-0 h-full">
                  <div className="relative w-full h-full">
                    <Image
                      src={src}
                      alt={`Hero Image ${index + 1}`}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Show arrows if needed, usually hero carousels might just autoplay */}
            {/* <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" /> */}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

