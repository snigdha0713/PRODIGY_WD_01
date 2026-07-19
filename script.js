const header = document.getElementById("header");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const form = document.getElementById("contactForm");
const message = document.getElementById("message");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 40);
});

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  menuBtn.textContent = navLinks.classList.contains("show") ? "×" : "☰";
});

document.querySelectorAll("#navLinks a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
    menuBtn.textContent = "☰";
  });
});

form.addEventListener("submit", e => {
  e.preventDefault();
  message.textContent = "Thank you! This is a demo form for the project.";
  form.reset();

  setTimeout(() => {
    message.textContent = "";
  }, 3500);
});

document.getElementById("year").textContent = new Date().getFullYear();
