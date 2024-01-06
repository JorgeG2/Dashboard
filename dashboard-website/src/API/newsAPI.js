const fetch = require("node-fetch");
fetch(
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=61545ffdbb1d456984ac44523ea9dae3"
)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .then((error) => console.error("Error:", error));
