import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState} from 'react';

import "./Searchbox.css";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

   const API_URL = "https://api.openweathermap.org/data/2.5/weather";
   const API_KEY = import.meta.env.VITE_API_KEY;
   console.log(API_KEY);
   

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let jsonResponse = await response.json();
      console.log(jsonResponse);

      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        temp_max: jsonResponse.main.temp_max,
        temp_min: jsonResponse.main.temp_min,
        humidity: jsonResponse.main.humidity,
        feelslike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,

      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }

  }
  let handelSearchInput = (event) => {
    setCity(event.target.value);

  }

  let handelSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log(city);
      setCity("");
      setError(false);
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch (err) {
      setError(true);
    }

  }
  return (
    <div className='searchBox'>
      <h2>Search for the Weather </h2>
      <form onSubmit={handelSubmit}>
        <TextField id="city" label="City name" variant="outlined" required value={city} onChange={handelSearchInput} /> <br /> <br />
        <Button variant="contained" color="success" type='submit'>
          Search
        </Button>
        {error && <p style={{ color: "red" }}>No such place exists!</p>}

      </form>
    </div>
  )

}
