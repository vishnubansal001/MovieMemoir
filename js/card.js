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
  } else if (name == "update") {
    let movies = JSON.parse(localStorage.getItem("movies")) || [];
    if (cardId >= 0 && cardId < movies.length) {
      let movieAtIndex = movies[cardId];
      let cardContentElement = document.getElementById("card-content");
      if (movieAtIndex) {
        cardContentElement.innerHTML = `
                <div>
                  <img src="https://image.tmdb.org/t/p/w500/${
                    movieAtIndex.poster
                  }" alt="${movieAtIndex.title.toLowerCase()}" />
                </div>
                <form>
                  <h1>Fill the Review for ${movieAtIndex.title}</h1>
                  <textarea name="review" cols="30" rows="10" id="r${cardId}${name}" required>${movieAtIndex.review}</textarea>
                  <button>Submit</button>
                </form>
            `;
        cardContentElement
          .querySelector("button")
          .addEventListener("click", function (event) {
            event.preventDefault();
            submitReview1(movieAtIndex, cardId, name);
          });
      } else {
        cardContentElement.innerHTML = "<p>Card not found</p>";
      }
    } else {
      console.log("Invalid index");
    }
  }
});
function submitReview(card, cardId, name) {
  const review = document.getElementById(`r${cardId}${name}`);

  let movies = JSON.parse(localStorage.getItem("movies")) || [];

  const reviewObj = {
    title: card.title,
    id: cardId,
    poster: card.poster_path,
    review: review.value,
  };

  movies.push(reviewObj);

  localStorage.setItem("movies", JSON.stringify(movies));

  review.value = "";
  alert("Review submitted successfully!");
}

function submitReview1(card, cardId, name) {
  const review = document.getElementById(`r${cardId}${name}`);

  let movies = JSON.parse(localStorage.getItem("movies")) || [];

  movies.splice(cardId, 1);
  localStorage.setItem('movies', JSON.stringify(movies));


  const reviewObj = {
    title: card.title,
    id: card.id,
    poster: card.poster,
    review: review.value,
  };

  movies.push(reviewObj);

  localStorage.setItem("movies", JSON.stringify(movies));

  console.log(localStorage.getItem("movies"))

  review.value = "";
  alert("Review submitted successfully!");
}