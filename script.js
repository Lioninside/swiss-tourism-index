const places = [
  {
    name: "Thun",
    blurb: "Strong lake-and-mountain base with easy day-trip potential.",
    lake: 9,
    nature: 9,
    museums: 6,
    dining: 7,
  },
  {
    name: "Murten",
    blurb: "Smaller town feel with lake access and a relaxed old-town base.",
    lake: 8,
    nature: 6,
    museums: 5,
    dining: 6,
  },
  {
    name: "Baden",
    blurb: "Good hidden-base profile near culture, food, and transport links.",
    lake: 4,
    nature: 6,
    museums: 8,
    dining: 8,
  },
];

function totalScore(place) {
  return place.lake * 0.25 + place.nature * 0.35 + place.museums * 0.2 + place.dining * 0.2;
}

const grid = document.getElementById("places-grid");

places
  .sort((a, b) => totalScore(b) - totalScore(a))
  .forEach((place) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <h3>${place.name}</h3>
      <p>${place.blurb}</p>
      <p class="meta">Lake ${place.lake}/10 · Nature ${place.nature}/10 · Museums ${place.museums}/10 · Dining ${place.dining}/10</p>
      <span class="score">Score ${totalScore(place).toFixed(1)}/10</span>
    `;
    grid.appendChild(card);
  });
