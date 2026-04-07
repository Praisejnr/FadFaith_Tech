const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".navBar");
const modeBtn = document.querySelector(".modeToggleBtn");
const modal = document.querySelector(".modal_wrapper");
const acceptCookie = document.getElementById("acceptCookie");
const declineCookie = document.getElementById("declineCookie");
const close_btn = document.getElementById("close_btn");

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

function closeModal() {
  modal.style.display = "none";
  document.body.classList.remove("modal_open");
}

window.addEventListener("DOMContentLoaded", () => {
  if (!localStorage.getItem("cookieAccepted")) {
    modal.style.display = "flex";
    document.body.classList.add("modal_open");
  } else {
    closeModal();
  }
});

acceptCookie.addEventListener("click", () => {
  localStorage.setItem("cookieAccepted", "true");
});

  