import NavBar from "../../layout/NavBar";
import FooterBar from "../../layout/footerbar";
import ProjectBodyBottom from "./ProjectBodyBottom";

export default function Service() {
  return (
    <>
      <div className=" bg-amber-500">
        <NavBar />
        <ProjectBodyBottom />
        <FooterBar />
      </div>
    </>
  );
}
