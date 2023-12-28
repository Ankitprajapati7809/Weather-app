import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function infoBox({ weatherInfo }) {
  const HOT_URL = "https://assets.haspod.com/blog/health/sun.jpg";
  const COLD_URL = "https://www.ochd.org/wp-content/uploads/2018/03/wintry-2993370_640.jpg";
  const RAIN_URL = "https://www.grafuk.co.uk/wp-content/uploads/Rain-falling-on-umbrella.png";
  return (
    <div className="infobox">
      <div className="classContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              weatherInfo.humidity > 80
                ? RAIN_URL
                : weatherInfo.temp > 15
                  ? HOT_URL
                  : COLD_URL
            }

          />
          <CardContent className='cardContent'>
            <Typography gutterBottom variant="h5" component="div">
              {weatherInfo.city} {
                weatherInfo.humidity > 80
                  ? <ThunderstormIcon />
                  : weatherInfo.temp > 15
                    ? <WbSunnyIcon />
                    : <AcUnitIcon />
              }
            </Typography>
            <Typography variant="body2" color="text.secondary" component={"span"}>
              <div>Temperature: {weatherInfo.temp}&#8451;</div>
              <div>Humidity: {weatherInfo.humidity}&#37; </div>
              <div>Max-Temperature: {weatherInfo.temp_max}&#8451;</div>
              <div>Min-Temperature: {weatherInfo.temp_min}&#8451;</div>
              <div>The weather can be described as <i>{weatherInfo.weather}</i> and feels like {weatherInfo.feelslike}&#8451;</div>

            </Typography>
          </CardContent>

        </Card>
      </div>
    </div>
  )
}
