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

  if (movies.length == 0) {
    const cardElement = document.createElement("div");
    cardElement.innerHTML = `
      <h1 style="color:white;">No Movie is Reviewed Yet</h1>
    `;
    cardsElement.appendChild(cardElement);
  }

  movies.forEach((movie, index) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("basic-card");
    cardElement.classList.add("basic-card-dark");
    cardElement.innerHTML = `
            <div class="card-content">
              <h2>${movie.title}</h2>
              <p>${movie.review}</p>
            </div>
            <div class="card-link">
              <a href="#" class="update-button" title="Update"><span>Update</span></a>
            </div>
            <div class="card-link">
              <a href="#" class="delete-button" title="Delete"><span>Delete</span></a>
            </div>
        `;
    const updateButton = cardElement.querySelector(".update-button");

    // Add an event listener to the update button
    updateButton.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default behavior of the link
      redirectToCardPage(index);
    });

    const deleteButton = cardElement.querySelector(".delete-button");

    // Add an event listener to the update button
    deleteButton.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default behavior of the link
      deleteItemByIndex("movies", index);
    });
    cardsElement.appendChild(cardElement);
  });
});

function redirectToCardPage(index) {
  window.location.href = `card.html?id=${index}&cardName=update`;
}

function deleteItemByIndex(arrayKey, index) {
  // Retrieve the array from localStorage
  let items = JSON.parse(localStorage.getItem(arrayKey)) || [];

  // Check if the index is valid
  if (index >= 0 && index < items.length) {
    // Use splice to remove the item at the specified index
    items.splice(index, 1);

    // Update the array in localStorage
    localStorage.setItem(arrayKey, JSON.stringify(items));

    window.location.href = "profile.html";
    console.log(`Item at index ${index} deleted successfully.`);
  } else {
    console.log("Invalid index.");
  }
}
