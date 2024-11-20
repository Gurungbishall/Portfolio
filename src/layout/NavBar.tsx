import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  function NavButton({ name, path }: { name: string; path: string }) {
    const location = useLocation();
    const isActive = location.pathname === path;

    return (
      <>
        <Link
          to={path}
          className={`p-2 text-center rounded-xl cursor-pointer sm:p-3 xl:rounded-2xl  ${
            isActive ? "bg-black text-white" : "bg-white text-black "
          }`}
        >
          {name}
        </Link>
      </>
    );
  }

  return (
    <>
      <nav className="p-1 h-11 top-0 right-0 left-0  sticky flex justify-between items-center bg-cyan-300 xl:p-3 xl:h-16">
        <div className="pl-1 font-bold text-sm text-black xl:pl-3 xl:text-2xl ">
          Bishal
        </div>
        <div className="flex gap-1 font-bold text-xs xl:gap-3 xl:text-xl ">
          <NavButton name="Home" path="/" />
          <NavButton name="About" path="/about" />
          <NavButton name="Project" path="/project" />
          <NavButton name="Contact" path="/contact" />
        </div>
      </nav>
    </>
  );
}
