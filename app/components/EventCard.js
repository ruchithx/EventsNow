import Image from "next/image";
import "../globals.css";
function EventCard(props) {
  return (
    <div className="height-394px bg-base rounded-[9px] w-64 shrink-0 drop-shadow-[4px_4px_4px_rgba(0,0,0,0.25)] fixed top-10 left-10 ">
      <Image src={"/image 3.png"} alt={"this"} width={256} height={301} />
      <div className="flex">
        <div className="text relative left-5 text-xl font-mono text-neutral-50 font-extrabold ">MEGA</div>
        <button>ashan</button>
      </div>
    </div>
  );
}

export default EventCard;
