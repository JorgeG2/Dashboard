require("dotenv").config();
const fetch = require("node-fetch");
const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY;

async function getWeatherData() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=39.46381&lon=-74.51205&appid=555b4fc98e7f1a772a3f5708fe8b4184`
    );
    if (!response.ok) {
      throw new Error("Network response was not we ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}

getWeatherData().then((data) => console.log(data));
