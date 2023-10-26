document.addEventListener("DOMContentLoaded", function () {
  let loggedInUser = localStorage.getItem("loggedInUser");
  console.log(loggedInUser);
  if (!loggedInUser) {
    window.location.href = "./views/signin.html";
  }
});

const apiKey = "020b12e5bb22832016d443f1a8f63af0";
document.addEventListener("DOMContentLoaded", function () {
  const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
  const slider1 = document.querySelector(".slider1");

  function createMovieCard(movie, index) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("slide1");
    card.innerHTML = `
    <div class="slide1">
      <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}" width="400px" height="400px" />
      <h3>${movie.title}</h3>
      <p>${movie.release_date}</p>
      </div>
    `;
    card.addEventListener("click", function () {
      redirectToCardPage(index);
    });
    return card;
  }

  function redirectToCardPage(index) {
    window.location.href = `card.html?id=${index}&cardName=popular`;
  }

  function fetchMovies() {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const movies = data.results;
        movies.forEach((movie, index) => {
          const card = createMovieCard(movie, index);
          slider1.appendChild(card);
        });
      })
      .catch((error) => console.error("Error:", error));
  }

  fetchMovies();
});

document.addEventListener("DOMContentLoaded", function () {
  const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=2`;
  const slider1 = document.querySelector(".slider2");

  function createMovieCard(movie, index) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}" width="400px" height="400px" />
      <h3>${movie.title}</h3>
      <p>${movie.release_date}</p>
    `;
    card.addEventListener("click", function () {
      redirectToCardPage(index);
    });
    return card;
  }

  function redirectToCardPage(index) {
    window.location.href = `card.html?id=${index}&cardName=trending`;
  }

  function fetchMovies() {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const movies = data.results;
        movies.forEach((movie, index) => {
          const card = createMovieCard(movie, index);
          slider1.appendChild(card);
        });
      })
      .catch((error) => console.error("Error:", error));
  }

  fetchMovies();
});

document.addEventListener("DOMContentLoaded", function () {
  const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;
  const slider1 = document.querySelector(".slider3");

  function createMovieCard(movie, index) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}" width="400px" height="400px" />
      <h3>${movie.title}</h3>
      <p>${movie.release_date}</p>
    `;
    card.addEventListener("click", function () {
      redirectToCardPage(index);
    });
    return card;
  }

  function redirectToCardPage(index) {
    window.location.href = `card.html?id=${index}&cardName=top`;
  }

  function fetchMovies() {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const movies = data.results;
        movies.forEach((movie, index) => {
          const card = createMovieCard(movie, index);
          slider1.appendChild(card);
        });
      })
      .catch((error) => console.error("Error:", error));
  }

  fetchMovies();
});

var index = 0;
var slides = document.querySelectorAll(".slides");
var dot = document.querySelectorAll(".dot");

function changeSlide() {
  if (index < 0) {
    index = slides.length - 1;
  }

  if (index > slides.length - 1) {
    index = 0;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dot[i].classList.remove("active");
  }

  slides[index].style.display = "block";
  dot[index].classList.add("active");

  index++;

  setTimeout(changeSlide, 2000);
}

changeSlide();

var container = document.getElementById("container");
var slider = document.querySelector(".slider1");
var slidee = document.querySelectorAll("slide1");
var buttons = document.getElementsByClassName("btn");
var cnt1 = 0;

function slideRight1() {
  if (cnt1 >= -7000) {
    cnt1 = 0;
    slider.style.transform = `translateX(${cnt1}px)`;
    console.log(slider.getBoundingClientRect());
  } else {
    cnt1 += 400;
    slider.style.transform = `translateX(${cnt1}px)`
  }
}

function slideLeft1() {
  if (cnt1 <= -7000) {
    cnt1 = 0;
    slider.style.transform = `translateX(${cnt1}px)`;
    console.log(slider.getBoundingClientRect());
  } else {
    cnt1 += -400;
    slider.style.transform = `translateX(${cnt1}px)`
  }
}

var slider12 = document.querySelector(".slider2");
var slidee = document.querySelectorAll("slide1");
var buttons = document.getElementsByClassName("btn1");
var cnt2 = 0;

function slideRight2() {
  if (cnt2 >= -7000) {
    cnt2 = 0;
    slider12.style.transform = `translateX(${cnt2}px)`;
    console.log(slider.getBoundingClientRect());
  } else {
    cnt2 += 400;
    slider12.style.transform = `translateX(${cnt2}px)`
  }
}

function slideLeft2() {
  if (cnt2 <= -7000) {
    cnt2 = 0;
    slider12.style.transform = `translateX(${cnt2}px)`;
    console.log(slider.getBoundingClientRect());
  } else {
    cnt2 += -400;
    slider12.style.transform = `translateX(${cnt2}px)`
  }
}

var overlay = document.querySelector(".overlay");
var close = document.querySelector(".close");
var popup = document.querySelector(".popup");

overlay.addEventListener("click", () => {
  close.click();
});

popup.addEventListener("click", (event) => {
  event.stopPropagation();
});

var slider111 = document.querySelector(".slider3");
var slidee = document.querySelectorAll("slide1");
var buttons = document.getElementsByClassName("btn2");
var cnt2 = 0;

function slideRight3() {
  if (cnt2 >= -7000) {
    cnt2 = 0;
    slider111.style.transform = `translateX(${cnt2}px)`;
    console.log(slider.getBoundingClientRect());
  } else {
    cnt2 += 400;
    slider111.style.transform = `translateX(${cnt2}px)`
  }
}

function slideLeft3() {
  if (cnt2 <= -7000) {
    cnt2 = 0;
    slider111.style.transform = `translateX(${cnt2}px)`;
    console.log(slider.getBoundingClientRect());
  } else {
    cnt2 += -400;
    slider111.style.transform = `translateX(${cnt2}px)`
  }
}

function debounce(func, delay) {
  let timeoutId;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

const searchInput = document.getElementById("search");
const resultsElement = document.getElementById("results");

searchInput.addEventListener(
  "input",
  debounce(function () {
    const query = this.value;
    if (query.length >= 3) {
      fetchMovies(query);
    } else {
      resultsElement.innerHTML = "";
    }
  }, 500)
);

function fetchMovies(query) {
  const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;

  function redirectToCardPage(index) {
    window.location.href = `card.html?id=${index}&cardName=search&query=${query}`;
  }

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const movies = data.results;
      resultsElement.innerHTML = "";
      movies.forEach((movie, index) => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("basic-card");
        cardElement.classList.add("basic-card-light");
        cardElement.innerHTML = `
                  <div class="card-content">
                    <h2 class="card-title">${movie.title}</h2>
                    <p class="card-text">${movie.overview}</p>
                  </div>
                  <div class="card-link">
                    <a href="#" title="Review"><span>Review</span></a>
                </div>
              `;
        cardElement.addEventListener("click", function () {
          redirectToCardPage(index);
        });
        resultsElement.appendChild(cardElement);
      });
    })
    .catch((error) => console.error("Error:", error));
}
