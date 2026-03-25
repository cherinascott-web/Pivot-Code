const myName = "Leo";
const myPass = "123123";
// login function
function login() {
  // 1. Get user input
  const userName = document.getElementById("username").value;
  const userPass = document.getElementById("password").value;
  // 2. Compare values
  if (
    userName.toLowerCase() === myName.toLowerCase() 
    && userPass === myPass
  ) {
    // save if logged in
    localStorage.setItem("username", myName);
    localStorage.setItem("password", myPass);
    document.getElementById("result").textContent = "Login successful!";
  } else {
    document.getElementById("result").textContent = "Wrong name or password";
  }
}
// reload function
window.onload = function () {
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");
  if (
    savedUsername?.toLowerCase() === myName?.toLowerCase() &&
    savedPassword === myPass
  ) {
    document.getElementById("result").textContent = "Welcome back!";
  }
};
// delete everything in storage
function logout() {
  localStorage.clear();
  document.getElementById("result").textContent = "Logged out";
}