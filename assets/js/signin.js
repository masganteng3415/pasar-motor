const signIn = document.querySelector("#signIn");


signIn.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = signIn.querySelector("#username").value;
  const password = signIn.querySelector("#password").value;

  const getUser = localStorage.getItem("username");
  const getPass = localStorage.getItem("password");

  if (getUser === "" && getPass === "") {
    alert("user tidak ada");
  } else {
    if (username === getUser && password === getPass) {
      window.location.href = "/"
    } else {
      alert("login gagal");
    }
  }
});
