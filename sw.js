async function fetchCharacters(page) {
  const url = `https://swapi.dev/api/people?page=${page}`;
  const dados = await fetch(url);
  const characters = await dados.json();

  const list = document.getElementById("list");
  for (const character of characters.results) {
    const listItem = document.createElement("li");
    // add an class to the list item
    listItem.classList.add("list-item");

    const link = document.createElement("a");
    link.href = `./pages/character.html?url=${character.url}`;
    link.textContent = `${character.name} - ${character.birth_year}`;
    listItem.appendChild(link);
    list.appendChild(listItem);
  }

  //If next page exists, create a button to fetch it.
  if (characters.next) {
    const nextPage = page + 1;
    const button = document.createElement("button");
    button.textContent = "Load More";
    button.onclick = () => fetchCharacters(nextPage);
    list.appendChild(button);
  }
}

async function fetchCharacterData() {
  const urlParams = new URLSearchParams(window.location.search);
  const url = urlParams.get("url");
  const dados = await fetch(url);
  const character = await dados.json();

  const name = document.getElementById("name");
  name.textContent = character.name;

  const height = document.getElementById("height");
  height.textContent = `Height: ${character.height}`;

  const mass = document.getElementById("mass");
  mass.textContent = `Mass: ${character.mass}`;

  const hair_color = document.getElementById("hair_color");
  hair_color.textContent = `Hair Color: ${character.hair_color}`;

  const skin_color = document.getElementById("skin_color");
  skin_color.textContent = `Skin Color: ${character.skin_color}`;

  const eye_color = document.getElementById("eye_color");
  eye_color.textContent = `Eye Color: ${character.eye_color}`;

  const birth_year = document.getElementById("birth_year");
  birth_year.textContent = `Birth Year: ${character.birth_year}`;

  const gender = document.getElementById("gender");
  gender.textContent = `Gender: ${character.gender}`;

  //   <ul id="films"></ul>
  // <ul id="species"></ul>
  // <ul id="vehicles"></ul>
  // <ul id="starships"></ul>
  // <ul id="homeworld"></ul>

  const films = document.getElementById("films");

  for (const film of character.films) {
    const dados = await fetch(film);
    const filmData = await dados.json();

    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = `./pages/film.html?url=${filmData.title}`;
    link.textContent = filmData.title;
    listItem.appendChild(link);
    films.appendChild(listItem);
  }

  const species = document.getElementById("species");
  for (const specie of character.species) {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = `./pages/specie.html?url=${specie}`;
    link.textContent = specie;
    listItem.appendChild(link);
    species.appendChild(listItem);
  }

  const vehicles = document.getElementById("vehicles");
  for (const vehicle of character.vehicles) {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = `./pages/vehicle.html?url=${vehicle}`;
    link.textContent = vehicle;
    listItem.appendChild(link);
    vehicles.appendChild(listItem);
  }

  const starships = document.getElementById("starships");
  for (const starship of character.starships) {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = `./pages/starship.html?url=${starship}`;
    link.textContent = starship;
    listItem.appendChild(link);
    starships.appendChild(listItem);
  }

  const homeworld = document.getElementById("homeworld");
  const listItem = document.createElement("li");
  const link = document.createElement("a");
  link.href = `./pages/planet.html?url=${character.homeworld}`;
  link.textContent = character.homeworld;
  listItem.appendChild(link);
}
