document.addEventListener("DOMContentLoaded", function () {
  let loggedInUser = localStorage.getItem("loggedInUser");
  if (!loggedInUser) {
    window.location.href = "./signin.html";
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
// var slider = document.querySelector(".slider1");
var slidee = document.querySelectorAll("slide1");
console.log(slidee);
// var slidee = document.getElementsByClassName("slide").length;
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

// function setParams(w) {
//   if (w < 551) {
//     slidesPerPage = 1;
//   } else {
//     if (w < 901) {
//       slidesPerPage = 2;
//     } else {
//       if (w < 1101) {
//         slidesPerPage = 3;
//       } else {
//         slidesPerPage = 4;
//       }
//     }
//   }
//   slidesCount = slidee - slidesPerPage;
//   if (currentPosition > slidesCount) {
//     currentPosition -= slidesPerPage;
//   }
//   currentMargin = -currentPosition * (100 / slidesPerPage);
//   slider.style.marginLeft = currentMargin + "%";
//   if (currentPosition > 0) {
//     buttons[0].classList.remove("inactive");
//   }
//   if (currentPosition < slidesCount) {
//     buttons[1].classList.remove("inactive");
//   }
//   if (currentPosition >= slidesCount) {
//     buttons[1].classList.add("inactive");
//   }
// }

// setParams();

function slideRight1() {
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

function slideLeft1() {
  const parentElement = document.querySelector(".slider1"); // Replace 'parent' with the actual ID of your parent element
  const numberOfChildren = parentElement.children.length;
  if (currentPosition <= numberOfChildren) {
    slider.style.marginLeft = currentMargin - 300 + "px"; // Change here
    currentMargin -= 300; // Change here
    currentPosition++;
  }
  if (currentPosition == numberOfChildren) {
    buttons[1].classList.add("inactive");
  }
  if (currentPosition > 0) {
    buttons[0].classList.remove("inactive");
  }
}

var currentPosition1 = 0;
var currentMargin1 = 0;
var slidesPerPage1 = 0;
var slidesCount1 = slidee - slidesPerPage;
var containerWidth1 = container.offsetWidth;
var prevKeyActive1 = false;
var nextKeyActive1 = true;

var slider1 = document.querySelector(".slider2");
// var slider = document.querySelector(".slider1");
// var slidee = document.querySelectorAll("slide1");
// var slidee = document.getElementsByClassName("slide").length;
var buttons1 = document.getElementsByClassName("btn1");

function slideRight2() {
  if (currentPosition1 != 0) {
    slider1.style.marginLeft = currentMargin1 + 300 + "px"; // Change here
    currentMargin1 += 300; // Change here
    currentPosition1--;
  }
  if (currentPosition1 === 0) {
    buttons1[0].classList.add("inactive");
  }
  if (currentPosition1 < slidesCount1) {
    buttons1[1].classList.remove("inactive");
  }
}

function slideLeft2() {
  const parentElement = document.querySelector(".slider2"); // Replace 'parent' with the actual ID of your parent element
  const numberOfChildren = parentElement.children.length;
  if (currentPosition1 <= numberOfChildren) {
    slider1.style.marginLeft = currentMargin1 - 300 + "px"; // Change here
    currentMargin1 -= 300; // Change here
    currentPosition1++;
  }
  if (currentPosition1 == numberOfChildren) {
    buttons1[1].classList.add("inactive");
  }
  if (currentPosition1 > 0) {
    buttons1[0].classList.remove("inactive");
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

var currentPosition2 = 0;
var currentMargin2 = 0;
var slidesPerPage2 = 0;
var slidesCount2 = slidee - slidesPerPage;
var containerWidth1 = container.offsetWidth;
var prevKeyActive1 = false;
var nextKeyActive1 = true;

var slider2 = document.querySelector(".slider3");
// var slider = document.querySelector(".slider2");
// var slidee = document.querySelectorAll("slide1");
// var slidee = document.getElementsByClassName("slide").length;
var buttons2 = document.getElementsByClassName("btn2");

function slideRight3() {
  if (currentPosition2 != 0) {
    slider2.style.marginLeft = currentMargin2 + 300 + "px"; // Change here
    currentMargin2 += 300; // Change here
    currentPosition2--;
  }
  if (currentPosition2 === 0) {
    buttons2[0].classList.add("inactive");
  }
  if (currentPosition2 < slidesCount2) {
    buttons2[1].classList.remove("inactive");
  }
}

function slideLeft3() {
  const parentElement = document.querySelector(".slider2"); // Replace 'parent' with the actual ID of your parent element
  const numberOfChildren = parentElement.children.length;
  if (currentPosition2 <= numberOfChildren) {
    slider2.style.marginLeft = currentMargin2 - 300 + "px"; // Change here
    currentMargin2 -= 300; // Change here
    currentPosition2++;
  }
  if (currentPosition2 == numberOfChildren) {
    buttons2[1].classList.add("inactive");
  }
  if (currentPosition2 > 0) {
    buttons2[0].classList.remove("inactive");
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
      movies.forEach((movie,index) => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.innerHTML = `
                  <h2>${movie.title}</h2>
                  <p>${movie.overview}</p>
              `;
        cardElement.addEventListener("click", function () {
          redirectToCardPage(index);
        });
        resultsElement.appendChild(cardElement);
      });
    })
    .catch((error) => console.error("Error:", error));
}
