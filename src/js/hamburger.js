const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".navCelContainer");

document.addEventListener("click", (e) => {
  if (e.target.closest(".hamburger")) {
    nav.classList.toggle("visible");
  }
});
