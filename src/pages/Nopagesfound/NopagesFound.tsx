import { Link } from "react-router-dom";
import Button from "../../component/ui/Button";

export default function NoPageFound() {
  return (
    <>
      <div className="h-screen w-screen flex flex-col justify-center items-center gap-4 bg-amber-500">
        <span className="font-mono font-bold text-4xl text-white">
          404 Not found
        </span>
        <Button textSize="xl">
          <Link to="/">Home</Link>
        </Button>
      </div>
    </>
  );
}
