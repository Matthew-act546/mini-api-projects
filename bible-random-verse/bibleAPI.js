const verseContainer = document.getElementById("verse-container");

async function getVerse() {
  try {
    const response = await fetch("https://bible-api.com/data/web/random");
    const verseJson = await response.json();
    const verse = verseJson.random_verse;

    const verseText = document.createElement("p");
    verseText.textContent = `${verse.text.trim()}`;

    const reference = document.createElement("h5");
    reference.textContent = `${verse.book} ${verse.chapter}:${verse.verse}`;

    verseContainer.innerHTML = "";
    verseContainer.appendChild(reference);
    verseContainer.appendChild(verseText);

    console.log(verseJson);
  } catch (err) {
    verseContainer.textContent = "Failed to load verse 😢";
    console.error("Error:", err);
  }
}
