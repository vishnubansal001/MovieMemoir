document.addEventListener("DOMContentLoaded", function () {
  let loggedInUser = localStorage.getItem("loggedInUser");
  console.log(loggedInUser);
  if (!loggedInUser) {
    window.location.href = "./signin.html";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Get user data from localStorage
  const loggedInUserName = localStorage.getItem("loggedInUser");
  const movies = JSON.parse(localStorage.getItem("movies")) || [];

  // Populate user data
  const userDataElement = document.getElementById("user-data");
  userDataElement.innerHTML = `
        <h1>Welcome, ${loggedInUserName}</h1>
    `;

  // Populate cards
  const cardsElement = document.getElementById("cards");
  cardsElement.classList.add("card-grid");

  movies.forEach((movie, index) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.innerHTML = `
            <h2>${movie.title}</h2>
            <p>${movie.review}</p>
        `;
    cardElement.addEventListener("click", function () {
      redirectToCardPage(index);
    });
    cardsElement.appendChild(cardElement);
  });
});

function redirectToCardPage(index) {
  window.location.href = `card.html?id=${index}&cardName=update`;
}
