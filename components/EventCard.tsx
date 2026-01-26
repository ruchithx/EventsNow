import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface EventCardProps {
  name: string;
  img: string;
  location: string;
  date: string;
  time: string;
  id: string;
}

function EventCard({ name, img, location, date, time, id }: EventCardProps) {
  return (
    <Card className="w-64 shrink-0 overflow-hidden m-4 bg-[#906953] text-neutral-50 border-none shadow-lg">
      <div className="h-[301px] w-full overflow-hidden relative">
        <Image
          className="object-cover transition-transform hover:scale-105 duration-300"
          src={`${img}`}
          alt={"event-img"}
          fill
        />
      </div>
      <CardContent className="p-4 grid grid-cols-3 gap-2">
        <div className="col-span-2 text-xl font-mono font-extrabold truncate">
          {name}
        </div>
        <div className="col-span-1 flex justify-end">
             <Button
                asChild
                className="w-full h-8 text-xs font-mono bg-[#526595] hover:bg-[#3e4e75]"
              >
                  <Link href={`/event/host/${id}`}>INFO</Link>
             </Button>
        </div>
      </CardContent>
      <Separator className="bg-white/30 mx-4 w-auto mb-2" />
      <CardFooter className="p-4 pt-0 grid grid-cols-12 gap-1 items-center">
        <div className="flex col-span-5 items-center">
          <Image
            src={"/images/organization/location1.svg"}
            alt={"pin-fill"}
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <div className="text-xs font-khand font-semibold ml-1 truncate">
            {location}
          </div>
        </div>
        <div className="col-span-1 h-8 w-px bg-white/50 mx-auto"></div>
        <div className="flex col-span-6 items-center pl-2">
           <Image
            src={"/images/reusableComponents/Date.svg"}
            alt={"time-fill"}
            width={24}
            height={24}
            className="w-6 h-6"
          />
          <div className="flex flex-col ml-2">
            <div className="text-xs font-khand font-semibold whitespace-nowrap">
              {date}
            </div>
            <div className="text-xs font-khand font-semibold whitespace-nowrap">
              {time}
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

export default EventCard;
