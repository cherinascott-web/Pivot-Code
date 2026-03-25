const form = document.getElementById("loginForm");
const errorMessage = document.getElementById("errorMessage");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  // put error message above button

  // if its blank
  if (username === "" || password === "") {
    errorMessage.textContent = "Username and password cannot be empty.";
    return;
  }
  // if password is less than 8 character
  if (password.length < 8) {
    errorMessage.textContent = "Password must be at least 8 characters.";
    return;
  }


  // if they can login
  errorMessage.textContent = ""; // clears the message if valid

  console.log("Username:", username);
  console.log("Password:", password);
});