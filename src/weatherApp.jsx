import { useState } from "react";
import InfoBox from "./infoBox"
import SearchBox from "./Searchbox"

export default function weatherApp() {
  let [info, setInfo] = useState({
    city: "Heaven",
    feelslike: 14.12,
    humidity: 22,
    temp: 14.05,
    temp_max: 14.05,
    temp_min: 14.05,
    weather: "cold",
  });

  let updateInfo = (newInfo) => {
    setInfo(newInfo);
  }

  return (<>
    <SearchBox updateInfo={updateInfo} />
    <InfoBox weatherInfo={info} />
  </>
  )
}
