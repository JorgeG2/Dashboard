const fetch = require("node-fetch");

async function getNewsData() {
  try {
    const response = await fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=61545ffdbb1d456984ac44523ea9dae3"
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
