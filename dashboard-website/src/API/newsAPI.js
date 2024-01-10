const fetch = require("node-fetch");
const newsApiKey = process.env.REACT_APP_NEWS_API_KEY;
// testing
// const rata = await response.json();

// let randomIndex = Math.floor(Math.random() * );

async function getNewsData() {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${newsApiKey}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data.articles[0];
  } catch (error) {
    console.error("Error:", error);
  }
}
getNewsData().then((data) => console.log(data));

export { getNewsData };
