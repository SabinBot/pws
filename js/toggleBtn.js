const bars = document.getElementById("toggleBtn");
const container = document.querySelector(".toggleContainer");

bars.addEventListener("click", function () {
  container.classList.toggle("active");
  bars.classList.toggle("fa-x");
});
document.addEventListener("click", function (event) {
  if (
    container.classList.contains("active") &&
    !container.contains(event.target) &&
    event.target !== bars
  ) {
    container.classList.remove("active");
    bars.classList.remove("fa-x");
  }
});
window.addEventListener("resize", function () {
  const windowWidth = window.innerWidth;
  const mediaQuery = window.matchMedia("(max-width: 800px)");
  if (windowWidth > mediaQuery.matches) {
    container.classList.remove("active");
    bars.classList.remove("fa-x");
  }
});
