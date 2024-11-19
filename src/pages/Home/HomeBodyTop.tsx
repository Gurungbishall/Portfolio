import { Link } from "react-router-dom";
import MyImg from "../../images/coder.jpg";

export default function HomeBodyTop() {
  return (
    <>
      <div className="grid justify-center grid-cols-2 gap-2 ">
        <div className="font-bold text-3xl">
          <span className="text-xl">Hello, I'm</span>
          <br />
          Bishal <br />
          Gurung
        </div>

        <div className="row-span-2">
          <img src={MyImg} alt="My image" className="rounded-2xl" />
        </div>
      </div>
      <div >
          <Link to="/contact"  className="p-2 text-white bg-black rounded-lg">Hire me</Link>
      </div>
    </>
  );
}
