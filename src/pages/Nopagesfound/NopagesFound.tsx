import { Link } from "react-router-dom";

export default function NoPageFound() {
  return (
    <>
      <div className="h-screen w-screen flex flex-col justify-center items-center gap-4 bg-amber-500">
        <span className="font-mono font-bold text-4xl text-white">
          404 Not found
        </span>
        <button className="p-2 text-sm text-white font-bold bg-black rounded-md xl:text-2xl">
          <Link to="/">Home</Link>
        </button>
      </div>
    </>
  );
}
