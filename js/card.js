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
            cardContentElement.innerHTML = `
                    <div>
                      <img src="https://image.tmdb.org/t/p/w500/${
                        card.poster_path
                      }" alt="${card.title.toLowerCase()}" />
                    </div>
                    <form>
                      <h1>Fill the Review for ${card.title}</h1>
                      <textarea name="review" cols="30" rows="10" id="r${cardId}${name}" required></textarea>
                      <button>Submit</button>
                    </form>
                `;
            cardContentElement
              .querySelector("button")
              .addEventListener("click", function (event) {
                event.preventDefault();
                submitReview(card, cardId, name);
              });
          } else {
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
            cardContentElement.innerHTML = `
                    <h1>${card.title}</h1>
                `;
          } else {
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
            cardContentElement.innerHTML = `
                    <h1>${card.title}</h1>
                `;
          } else {
            cardContentElement.innerHTML = "<p>Card not found</p>";
          }
        })
        .catch((error) => console.error("Error:", error));
    }

    fetchMovies();
  }
});
function submitReview(card, cardId, name) {
  // console.log(card, cardId, name);

  const review = document.getElementById(`r${cardId}${name}`);

  let movies = JSON.parse(localStorage.getItem("movies")) || [];

  const reviewObj = {
    title: card.title,
    id: card.id,
    review: review.value,
  };

  movies.push(reviewObj);

  localStorage.setItem("movies", JSON.stringify(movies));

  // console.log(localStorage.getItem("movies"));

  review.value = ""
  alert("Review submitted successfully!");
}
