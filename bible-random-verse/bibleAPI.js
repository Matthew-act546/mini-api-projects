const verseContainer = document.getElementById("verse-container");

function getVerse() {
  fetch("https://bible-api.com/data/web/random")
  .then(response => response.json())
  .then(data => {
    const verse = data.random_verse;

    const verseText = document.createElement("p");
    verseText.textContent = `${verse.text.trim()}`;

    const reference = document.createElement("h5");
    reference.textContent = `${verse.book} ${verse.chapter}:${verse.verse}`;

    verseContainer.innerHTML = ""; 
    verseContainer.appendChild(reference);
    verseContainer.appendChild(verseText);
  })
  .catch(err => {
    verseContainer.textContent = "Failed to load verse ";
    console.error("Error:", err);
  });
  
}
