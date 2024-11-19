import { Link, useLocation } from "react-router-dom";

export default function NavBar() {

  function NavButton({ name, path }: { name: string; path: string }) {

    const location = useLocation();
    const isActive = location.pathname === path;

    return (
      <>
        <Link to={path} className={`p-2 text-center rounded-xl ${isActive ? "bg-black text-white":"bg-white text-black "}`}>
          {name}
        </Link>
      </>
    );
  }

  return (
    <>
      <nav className="p-1 h-11 top-0 right-0 left-0  sticky flex justify-between items-center bg-cyan-300">
        <div className="pl-1 font-bold text-sm text-black">Bishal</div>
        <div className="flex gap-1 font-bold text-xs ">
          <NavButton name="Home" path="/" />
          <NavButton name="About" path="/about" />
          <NavButton name="Service" path="/service" />
          <NavButton name="Contact" path="/contact" />
        </div>
      </nav>
    </>
  );
}
