import React, { useState, useEffect } from "react";
import { getNewsData } from "../API/newsAPI";

function NewsWidget() {
  const [newsData, setNewsData] = useState(null);

  useEffect(() => {
    getNewsData().then((data) => setNewsData(data));
  }, []);

  if (!newsData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-white p-4 rounded-md shadow-md news-widget">
      <h2 className="text-lg font-bold mb-4">Breaking News</h2>
      <div>
        <h3 className="text-md font-bold mb-2">{newsData.title}</h3>
        <img src={newsData.urlToImage} alt="news" />
        <p className="text-sm">{newsData.description}</p>
      </div>
    </div>
  );
}

export default NewsWidget;
