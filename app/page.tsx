import Post from "@/components/Post";
import EventCardOrgDash from "@/components/EventCardOrgDash";
import EventCard from "@/components/EventCard";

export default function Home() {
  return (
    <div>
      <Post
        profilePic="profilpic"
        name="Ruchith Nusara"
        caption="Beautiful days"
        post="post"
      />
      <EventCardOrgDash
        img="image 1.png"
        name="NADA GAMA"
        location="KCC,Kandy Road,kandy."
        date="21st June 2023"
        time="16.00 to 22.00"
      />
      <EventCard
        img="image 3.png"
        name="Nadagama"
        location="Matara"
        date="2023-1-1"
        time="09.00"
      />
    </div>
  );
}
