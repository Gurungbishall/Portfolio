import CurrentTime from "../features/time/Time";
import CurrentDate from "../features/date/CurrentDate";
import Location from "../features/location/Location";

export default function FooterBar() {
  return (
    <>
      <footer className="h-11 bottom-0 right-0 left-0 fixed flex xl:justify-between items-center text-xs font-bold text-black bg-cyan-300">
        <Location />
        <div className="flex flex-wrap ">
          <CurrentTime />
          <CurrentDate />
        </div>
      </footer>
    </>
  );
}