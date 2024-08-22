import NavBar from "../../layout/NavBar";
import FooterBar from "../../layout/footerbar";
import HomeBodyTop from "./HomeBodyTop";
import HomeBodyBottom from "./HomeBodyBottom";

export default function Home() {
  return (
    <>
      <div className="h-screen w-screen  bg-amber-500">
        <NavBar />
        <div className="flex flex-col pt-20 justify-center items-center gap-36">
          <HomeBodyTop />
          <HomeBodyBottom />
        </div>
        <FooterBar />
      </div>
    </>
  );
}
