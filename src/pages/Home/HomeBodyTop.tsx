import { Link } from "react-router-dom";
import MyImg from "../../images/coder.jpg";
import Button from "../../component/ui/Button";

export default function HomeBodyTop() {
  return (
    <>
      <div>
        <div className="grid justify-center grid-cols-2 gap-4 ">
          <div className="font-bold text-8xl">
            <span className="text-xl">Hello, I'm</span>
            <br />
            Bishal <br />
            Gurung
          </div>

          <div className="row-span-2">
            <img src={MyImg} alt="My image" className="rounded-2xl" />
          </div>
        </div>
        <div className="ml-28 -mt-16">
          <Button textSize="2xl">
            <Link to="/contact">Hire me</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
