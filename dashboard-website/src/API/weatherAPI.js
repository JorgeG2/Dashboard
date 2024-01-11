const fetch = require("node-fetch");

async function getWeatherData() {
  try {
    const url = "";
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
