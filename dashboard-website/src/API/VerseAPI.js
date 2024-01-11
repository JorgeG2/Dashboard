const fetch = require("node-fetch");

const bibleApiKey = process.env.REACT_APP_BIBLE_API_KEY;

const API_KEY = "80507ab8dcb312bef4bcbdd4805808a1";
const BIBLE_ID = "592420522e16049f-01";
const VERSE_ID = [
  `JER.29.11`,
  `PSA.23`,
  `1COR.4.4-8`,
  `PHP.4.13`,
  `JHN.3.16`,
  `ROM.8.28`,
  `ISA.41.10`,
  `PSA.46.1`,
  `GAL.5.22-23`,
  `HEB.11.1`,
  `2TI.1.7`,
  `1COR.10.13`,
  `PRO.22.6`,
  `ISA.40.31`,
  `JOS.1.9`,
  `HEB.12.2`,
  `MAT.11.28`,
  `ROM.10.9-10`,
  `PHP.2.3-4`,
  `MAT.5.43-44`,
];

async function getRandomVerse() {
  const verseIndex = Math.floor(Math.random() * VERSE_ID.length);
  const NEW_ID = VERSE_ID[verseIndex];

  try {
    const response = await fetch(
      `https://api.scripture.api.bible/v1/bibles/${BIBLE_ID}/search?query=${NEW_ID}`,
      {
        headers: { "api-key": API_KEY },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const dataResponse = await response.json();
    const htmlPassage = dataResponse.data.passages[0].content;

    const bookReference = dataResponse.data.passages[0].reference;
    return { bookReference, textPassage: htmlPassage };
  } catch (error) {
    console.error("Error:", error);
  }
} // Added closing curly brace here

getRandomVerse().then((result) => {
  if (result) {
    console.log(result.bookReference, result.textPassage);
  }
});
