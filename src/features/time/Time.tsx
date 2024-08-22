import { useState, useEffect } from "react";

export default function CurrentTime() {
  const [currentTime, setCurrenttime] = useState(new Date());

  useEffect(() => {
    const intervalid = setInterval(() => {
      setCurrenttime(new Date());
    }, 1000);

    return () => clearInterval(intervalid);
  }, [currentTime]);

  const formateTime = (date: Date) => {
    let hour = date.getHours();
    let minutes = date.getMinutes();

    let meridiem = "AM";

    if (hour > 12) {
      hour = hour - 12;
      meridiem = "PM";
    } else if (hour === 0) {
      hour = 12;
    }

    let gethour = hour.toString().padStart(2, "0");
    let getMinutes = minutes.toString().padStart(2, "0");

    return <>{`Time: ${gethour}:${getMinutes}:${meridiem}`}</>;
  };
  return (
    <>
      <div>{formateTime(currentTime)}</div>
    </>
  );
}
