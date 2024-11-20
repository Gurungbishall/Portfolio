import NavBar from "../../layout/NavBar";
import FooterBar from "../../layout/footerbar";
import AboutBodyTop from "./AboutBodyTop";
import AboutBodyBottom from "./AboutBodyBottom";

export default function About() {
  return (
    <>
      <div className=" bg-amber-500">
        <NavBar />
        <div className="pt-4 xl:pt-10">
          <AboutBodyTop />
          <AboutBodyBottom />
        </div>
        <FooterBar />
      </div>
    </>
  );
}
