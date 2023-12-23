
import ProfileCard from '@/components/ProfileCard';
import EventCardEventDash from '../components/EventCardEventDash'
import BUyAdd from "@/components/BUyAdd";
import CreateAccount from "@/components/CreateAccount";
import Footer from "@/components/Footer";
import InviteButton from "@/components/InviteButton";
import Login from "@/components/Login";
import Searchbar from "@/components/Searchbar";

// import Post from "@/components/Post";
import EventCardOrgDash from "@/components/EventCardOrgDash";
import EventCard from "@/components/EventCard";


export default function Home() {
  return (
    <div>
        <EventCard
        img="image 3.png"
        name="MEGA"
        location="MATARA    "
        date="21st MAY "
        time="21.00"

      />

<EventCardOrgDash
        img="image 1.png"
        name="NADA GAMA "
        location="KCC,Kandy Road,kandy."
        date="21st June 2023"
        time="16.00 to 22.00"
      />
    

      <EventCardEventDash 
      img="image 1.png"
      name="NADA GAMA "
      location="KCC,Kandy Road,kandy."
      date="21st June 2023"
      time="16.00 to 22.00"
      buttonName="Stein Studios"/>

      <ProfileCard 
        profilePic="profile.jpg"
        name="A-shan Dilz"
        accountType='Organization account'
        email='ashandilsara8@gmail.com'/>

      
{/* 
      <Login
        bgcolors={"bg-custom-orange"}
        titleOfbutton={"LOGOUT"}
        image={"Subtract.svg"}
      />

      <CreateAccount
        bgcolors={"bg-custom-orange"}
        Description={"Create Account"}
      />
      <InviteButton bgcolors={"bg-custom-green"} Description={"Invite"} />
      <BUyAdd
        image1={"Check_fill.svg"}
        image2={"Paper_fill.svg"}
        Description1={"Buy Tickets"}
        Description2={"Add to wishlist"}
        bgcolors0={"bg-custom-orange"}
        bgcolors1={"bg-custom-blue"}
      />
      <Searchbar image={"Search.svg"} />
      <Footer
        image1={"facebook.svg"}
        image2={"instergram.svg"}
        image3={"google.svg"}
        image4={"youtube.svg"}
        image5={"messenger.svg"}
        imagelogo={"nav-logo.svg"}/> */}

      {/* <Post
        profilePic="profilpic"
        name="Ruchith Nusara"
        caption="Beautiful days"
        post="post"
      /> */}
 



    </div>
  );
}
