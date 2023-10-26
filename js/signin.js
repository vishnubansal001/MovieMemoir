function signIn() {
  let email = document.getElementById("login-email").value;
  let password = document.getElementById("login-password").value;

  let storedUser = localStorage.getItem(email);
  if (storedUser) {
    let user = JSON.parse(storedUser);
    if (user.password === password) {
      showSuccessMessage("Login successful!");
      let ema = document.getElementById("login-email");
      let pass = document.getElementById("login-password");
      ema.value = "";
      pass.value = "";
      document.getElementById("login-error").style.display = "none";
      localStorage.setItem('loggedInUser', email);
      window.location.href = "../index.html";
      // Hide error message
    } else {
      displayErrorMessage("login-error", "Incorrect password.");
      let ema = document.getElementById("login-email");
      let pass = document.getElementById("login-password");
      ema.value = "";
      pass.value = "";
    }
  } else {
    displayErrorMessage("login-error", "Email not found.");
    let ema = document.getElementById("login-email");
    let pass = document.getElementById("login-password");
    ema.value = "";
    pass.value = "";
  }
}

function signUp() {
  let username = document.getElementById("signup-username").value;
  let email = document.getElementById("signup-email").value;
  let password = document.getElementById("signup-password").value;

  let storedUser = localStorage.getItem(email);
  if (storedUser) {
    displayErrorMessage("signup-error", "Email already in use.");
    let use = document.getElementById("signup-username");
    let ema = document.getElementById("signup-email");
    let pass = document.getElementById("signup-password");
    use.value = "";
    ema.value = "";
    pass.value = "";
  } else {
    let user = {
      username: username,
      password: password,
    };
    localStorage.setItem(email, JSON.stringify(user));
    showSuccessMessage("Sign up successful!");
    localStorage.setItem('loggedInUser', email);
    localStorage.setItem('loggedInUserName', username);
    let use = document.getElementById("signup-username");
    let ema = document.getElementById("signup-email");
    let pass = document.getElementById("signup-password");
    use.value = "";
    ema.value = "";
    pass.value = "";
    document.getElementById("signup-error").style.display = "none"; // Hide error message
    window.location.href = "../index.html";
  }
}

function displayErrorMessage(elementId, message) {
  let errorElement = document.getElementById(elementId);
  errorElement.innerText = message;
  errorElement.style.display = "block";
  setTimeout(function () {
    errorElement.style.display = "none";
  }, 3000);
}

function showSuccessMessage(message) {
  let successElement = document.getElementById("success-message");
  successElement.innerText = message;
  successElement.style.display = "block";
  setTimeout(function () {
    successElement.style.display = "none";
  }, 3000);
}
