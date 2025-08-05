const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".navBar");
const modeBtn = document.querySelector(".modeToggleBtn");

hamburger.addEventListener("click", () => {
  navBar.classList.toggle("active");
});

modeBtn.addEventListener("click", () => {
  const isDarkMode = document.body.classList.toggle("dark_theme");
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  if (isDarkMode) {
    modeBtn.innerHTML = `<i class="fa-solid fa-toggle-on"></i>`;
  } else {
    modeBtn.innerHTML = `<i class="fa-solid fa-toggle-off"></i>`;
  }
});

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark_theme");
  }
});
