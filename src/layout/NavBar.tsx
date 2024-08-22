import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav className="top-0 right-0 left-0 sticky z-10 flex justify-between items-center text-white  bg-cyan-300">
        <div className="py-4 pl-20 font-bold text-2xl text-black">
          Bishal Gurung
        </div>

        <div className="py-4 pr-20  flex gap-8 font-bold text-xl ">
          <div className="py-2 px-4 rounded-xl bg-black">
            <Link  to="/">Home</Link>
          </div>
          <div className="py-2 px-4 rounded-xl bg-black">
            <Link to="/about">About</Link>
          </div>
          <div className="py-2 px-4 rounded-xl bg-black">
            <Link to="/service">Service</Link>
          </div>
          <div className="py-2 px-4 rounded-xl bg-black">
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </nav>
    </>
  );
}
