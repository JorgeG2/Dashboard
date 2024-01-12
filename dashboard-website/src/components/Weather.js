import React, { useState, useEffect } from "react";
import { getWeatherData } from "../API/weatherAPI"; // Ensure this path matches your file structure

const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getWeatherData()
      .then((data) => {
        setWeatherData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        setError(error);
        setLoading(false);
      });
  }, []);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading weather data</div>;

  const currentWeather = weatherData?.list[0];
  const upcomingWeather = weatherData?.list.slice(1, 5);

  return (
    <div className="bg-blue-100 p-4 rounded-lg">
      <h2 className="text-2xl font-bold mb-2">
        Weather in {weatherData?.city?.name}
      </h2>
      <div className="mb-4">
        <h3 className="font-semibold">Current Weather</h3>
        <p>
          {formatDate(currentWeather.dt)} - {currentWeather.weather[0].main}
        </p>
        <p>
          Low: {currentWeather.main.temp_min}° | High:{" "}
          {currentWeather.main.temp_max}°
        </p>
      </div>
      <div>
        <h3 className="font-semibold">Upcoming Days</h3>
        {upcomingWeather.map((day, index) => (
          <div key={index} className="mb-2">
            <p>
              {formatDate(day.dt)} - {day.weather[0].main}
            </p>
            <p>
              Low: {day.main.temp_min}° | High: {day.main.temp_max}°
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherWidget;
