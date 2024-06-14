const signUp = document.querySelector("#signUp");

const username = signUp.querySelector("#username");
const password = signUp.querySelector("#password");

signUp.addEventListener("submit", register);

function register(e) {
  e.preventDefault();

  localStorage.setItem("username", username.value);
  localStorage.setItem("password", password.value);

  const getUser = localStorage.getItem("username")
  const getPass = localStorage.getItem("password")

  if (getUser && getPass) {
    window.location.href = "signin.html"
  }
}