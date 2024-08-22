import NavBar from "../../layout/NavBar";
import FooterBar from "../../layout/footerbar";
import ServiceTop from "./ServiceTop";
import ServiceBodyBottom from "./ServiceBodyBottom";

export default function Service() {
  return (
    <>
      <div className=" bg-amber-500">
        <NavBar />
        <div className="flex flex-col pb-20">
          <ServiceTop />
          <ServiceBodyBottom />
        </div>
        <FooterBar />
      </div>
    </>
  );
}
