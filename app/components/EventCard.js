import Image from "next/image";
import "../globals.css";
function EventCard(props) {
  return (
    <div className="card-container bg-blue-900">
      <Image src={"/image 3.png"} alt={"this"} width={256} height={301} />
    </div>
  );
}

export default EventCard;
