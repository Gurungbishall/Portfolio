import { useState, useEffect, useContext } from "react";
import { LocalityContext } from "../location/Location";

export default function TodayWeather() {
  const [weather, setWeather] = useState({ temperature: "", wind: "" });

  const location = useContext(LocalityContext);
  useEffect(() => {
    if (location) {
      fetch(`https://goweather.herokuapp.com/weather/${location}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error response");
          }
          return response.json();
        })
        .then((data) => {
          setWeather({
            temperature: data.temperature,
            wind: data.wind,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [location]);

  return (
    <>
      <div className="flex flex-wrap gap-1">
        <div>{`Location : ${location}`}</div>
        <div>{`Temperature: ${weather.temperature}`}</div>
        <div>{`Wind: ${weather.wind}`}</div>
      </div>
    </>
  );
}
