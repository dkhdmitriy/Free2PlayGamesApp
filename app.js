document.querySelector(".btn").addEventListener("click", () => {
  let gameTitle = document.querySelector(".game-title");
  let gameThumbnail = document.querySelector("img");
  let gameLink = document.querySelector("a");
  let gameDescription = document.querySelector(".game-description");
  let gamePlatfrom = document.querySelector(".game-platform");
  let randomGame = Math.floor(Math.random() * 365);

  const proxy = "https://cors-anywhere.herokuapp.com/";
  fetch(`${proxy}https://www.freetogame.com/api/games?platform=all`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      gameTitle.textContent = data[randomGame].title;
      gameThumbnail.src = data[randomGame].thumbnail;
      gameLink.href = data[randomGame].game_url;
      gameDescription.textContent = data[randomGame].short_description;
      gamePlatfrom.textContent = `Platform: ${data[randomGame].platform}`;
    });
});

// made by dkhdmitriy 24.09.2021
