const body = document.querySelector("body");
body.style.backgroundColor = "grey";

const parent = document.getElementById("parent");
parent.addEventListener("click", (e) => {
  body.style.backgroundColor = e.target.textContent;
});
