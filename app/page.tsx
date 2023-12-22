import BUyAdd from "@/components/BUyAdd";
import CreateAccount from "@/components/CreateAccount";
import Footer from "@/components/Footer";
import InviteButton from "@/components/InviteButton";
import Login from "@/components/Login";
import Searchbar from "@/components/Searchbar";

export default function Home() {
  return (
    <div>
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
        imagelogo={"nav-logo.svg"}
      />
    </div>
  );
}
