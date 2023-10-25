const apiKey = "020b12e5bb22832016d443f1a8f63af0";
document.addEventListener("DOMContentLoaded", function () {
  let params = new URLSearchParams(window.location.search);
  let cardId = params.get("id");
  let name = params.get("cardName");

  if (name == "top") {
    const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;

    let cardData;

    function fetchMovies() {
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          const movies = data.results;
          cardData = movies;
          let card = cardData[cardId];
          let cardContentElement = document.getElementById("card-content");
          if (card) {
            // Display card content
            cardContentElement.innerHTML = `
                    <h1>${card.title}</h1>
                `;
          } else {
            // Handle case where card data is not found
            cardContentElement.innerHTML = "<p>Card not found</p>";
          }
        })
        .catch((error) => console.error("Error:", error));
    }

    fetchMovies();
  } else if (name == "trending") {
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=2`;

    let cardData;

    function fetchMovies() {
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          const movies = data.results;
          cardData = movies;
          let card = cardData[cardId];
          let cardContentElement = document.getElementById("card-content");
          if (card) {
            // Display card content
            cardContentElement.innerHTML = `
                    <h1>${card.title}</h1>
                `;
          } else {
            // Handle case where card data is not found
            cardContentElement.innerHTML = "<p>Card not found</p>";
          }
        })
        .catch((error) => console.error("Error:", error));
    }

    fetchMovies();
  } else if (name == "popular") {
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

    let cardData;

    function fetchMovies() {
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          const movies = data.results;
          cardData = movies;
          let card = cardData[cardId];
          let cardContentElement = document.getElementById("card-content");
          if (card) {
            // Display card content
            cardContentElement.innerHTML = `
                    <h1>${card.title}</h1>
                `;
          } else {
            // Handle case where card data is not found
            cardContentElement.innerHTML = "<p>Card not found</p>";
          }
        })
        .catch((error) => console.error("Error:", error));
    }

    fetchMovies();
  }
});
