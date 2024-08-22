import { useState, useEffect, createContext } from "react";
import TodayWeather from "../weather/Weather";

export const LocalityContext = createContext("");

export default function Location() {
  const [locality, setLocality] = useState("");

  useEffect(() => {
    fetch(
      "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=XXXXXXXXXXXX&longitude=XXXXXXXXXXXX&localityLanguage=en"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error respones");
        }
        return response.json();
      })
      .then((data) => {
        const location = data.locality;
        setLocality(location);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <LocalityContext.Provider value={locality}>
        <TodayWeather />
      </LocalityContext.Provider>
    </>
  );
}
