import Image from "next/image";
import Link from "next/link";

interface EventCard {
  name: string;
  img: string;
  location: string;
  date: string;
  time: string;
  id: string;
}

function EventCard({ name, img, location, date, time, id }: EventCard) {
  return (
    <div className="text-neutral-50  bg-myBrown rounded-[9px] w-64 shrink-0 drop-shadow-[4px_4px_4px_rgba(0,0,0,0.25)]  m-10">
      <div className="styleQ h-[301px] overflow-hidden">
        <Image
          className="rounded-t-[9px]"
          src={`${img}`}
          alt={"event-img"}
          width={256}
          height={301}
        />
      </div>

      <div className="grid grid-cols-3 ">
        <div className="text ml-5 col-span-2  text-xl font-mono  font-extrabold ">
          {name}
        </div>
        <button className="hover:bg-[#526595] button col-span-1 w-63 h-22 mr-4 rounded-[10px]   text-center text-sm font-mono bg-custom-blue">
          <Link href={`/event/host/${id}`}> INFO</Link>
        </button>
      </div>
      <div>
        <hr className="w-52 ml-5 mt-1"></hr>
      </div>

      <div className=" grid grid-cols-12 ">
        <div className="flex col-span-5">
          <Image
            className="mt-1"
            src={"/images/organization/location1.svg"}
            alt={"pin-fill"}
            width={47}
            height={47}
          />
          <div className="text-xs font-khand font-semibold my-auto ">
            {location}
          </div>
        </div>
        <div className="col-span-1 ml-4 border-r-[1px] border-solid border-white h-10 w-1"></div>
        <div className=" ml-1 flex col-span-6">
          <Image
            src={"/images/reusableComponents/Date.svg"}
            alt={"time-fill"}
            width={30}
            height={24}
          />
          <div className="flex flex-col mr-auto my-auto ml-3">
            <div className="text-xs font-khand font-semibold mt-1 mb-0 ">
              {date}
            </div>
            <div className="text-xs font-khand font-semibold mt-0 ">{time}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
