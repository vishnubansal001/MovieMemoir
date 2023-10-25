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
var slider = document.getElementById("slider1");
var slidee = document.getElementsByClassName("slide").length;
var buttons = document.getElementsByClassName("btn");

var currentPosition = 0;
var currentMargin = 0;
var slidesPerPage = 0;
var slidesCount = slidee - slidesPerPage;
var containerWidth = container.offsetWidth;
var prevKeyActive = false;
var nextKeyActive = true;

window.addEventListener("resize", checkWidth);

function checkWidth() {
  containerWidth = container.offsetWidth;
  setParams(containerWidth);
}

function setParams(w) {
  if (w < 551) {
    slidesPerPage = 1;
  } else {
    if (w < 901) {
      slidesPerPage = 2;
    } else {
      if (w < 1101) {
        slidesPerPage = 3;
      } else {
        slidesPerPage = 4;
      }
    }
  }
  slidesCount = slidee - slidesPerPage;
  if (currentPosition > slidesCount) {
    currentPosition -= slidesPerPage;
  }
  currentMargin = -currentPosition * (100 / slidesPerPage);
  slider.style.marginLeft = currentMargin + "%";
  if (currentPosition > 0) {
    buttons[0].classList.remove("inactive");
  }
  if (currentPosition < slidesCount) {
    buttons[1].classList.remove("inactive");
  }
  if (currentPosition >= slidesCount) {
    buttons[1].classList.add("inactive");
  }
}

setParams();

function slideRight() {
  if (currentPosition != 0) {
    slider.style.marginLeft = currentMargin + 300 + "px"; // Change here
    currentMargin += 300; // Change here
    currentPosition--;
  }
  if (currentPosition === 0) {
    buttons[0].classList.add("inactive");
  }
  if (currentPosition < slidesCount) {
    buttons[1].classList.remove("inactive");
  }
}

function slideLeft() {
  if (currentPosition != slidesCount) {
    slider.style.marginLeft = currentMargin - 300 + "px"; // Change here
    currentMargin -= 300; // Change here
    currentPosition++;
  }
  if (currentPosition == slidesCount) {
    buttons[1].classList.add("inactive");
  }
  if (currentPosition > 0) {
    buttons[0].classList.remove("inactive");
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

document.addEventListener("DOMContentLoaded", function () {
  let loggedInUser = localStorage.getItem("loggedInUser");
  if (!loggedInUser) {
    window.location.href = "./signin.html";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const apiKey = "020b12e5bb22832016d443f1a8f63af0";
  const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
  const slider1 = document.querySelector(".slider1");

  function createMovieCard(movie) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <div>
      <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}" width="400px" height="400px" />
      <h3>${movie.title}</h3>
      <p>${movie.release_date}</p>
      </div>
    `;
    return card;
  }

  function fetchMovies() {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const movies = data.results;
        movies.forEach((movie) => {
          const card = createMovieCard(movie);
          slider1.appendChild(card);
        });
      })
      .catch((error) => console.error("Error:", error));
  }

  fetchMovies();
});
