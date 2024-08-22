import CurrentTime from "../features/time/Time";
import CurrentDate from "../features/date/CurrentDate";
import Location from "../features/location/Location";

export default function FooterBar() {
  return (
    <>
      <footer className="bottom-0 right-0 left-0 fixed py-4 pl-20 pr-20 flex justify-between items-center text-xl font-bold text-black bg-cyan-300">
        <Location />
        <div className="flex gap-4">
          <CurrentTime />
          <CurrentDate />
        </div>
      </footer>
    </>
  );
}
