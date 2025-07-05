const sections = document.querySelectorAll("main section");
const navLinks = document.querySelectorAll("nav a");
const footer = document.querySelector("footer");

function showSection(id) {
  sections.forEach((section) => {
    section.style.display = "none";
    if (section.id === id) {
      section.style.display = "block";
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });

  if (id === "lets-work") {
    footer.style.display = "block";
  } else {
    footer.style.display = "none";
  }
}

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    showSection(targetId);

    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");

    // Fecha o menu no mobile após clicar
    if (window.innerWidth <= 600) {
      document.getElementById("menu").classList.remove("show");
    }
  });
});

// Oculta todas as seções e o footer no carregamento
sections.forEach((section) => (section.style.display = "none"));
footer.style.display = "none";

// Menu hambúrguer (mobile)
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.getElementById("menu");

  if (menuToggle && menu) {
    menuToggle.addEventListener("click", function () {
      menu.classList.toggle("show");
    });
  }
});
