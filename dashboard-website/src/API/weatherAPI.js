const fetch = require("node-fetch");

async function getWeatherData() {
  try {
    const url =
      "https://api.openweathermap.org/data/2.5/weather?lat=39.46381&lon=-74.51205&appid=0efff71c6e567b425f7def73acf43a25";
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}

getWeatherData().then((data) => {
  if (data) {
    console.log(data);
  }
});
