import NavBar from "../../layout/NavBar";
import FooterBar from "../../layout/footerbar";
import ContactBody from "./ContactBody";

export default function Contact(){

   return(
    <>
      <div className="h-screen w-screen  bg-amber-500">
        <NavBar />
        <ContactBody />
        <FooterBar />
      </div>
    </>
   )    
}