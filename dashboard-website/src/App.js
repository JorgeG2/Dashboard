import Header from "./components/Header";
import NewsWidget from "./components/News";
import WeatherWidget from "./components/Weather"; // Adjust the path based on your file structure

import "./App.css"; // If you have global styles

function App() {
  return (
    //anything in app will be shown on website
    <div className="App">
      <Header /> {/*This is the top header class*/}
      <NewsWidget /> {/*This is the news class*/}
      <WeatherWidget />
    </div>
  );
}

export default App;
