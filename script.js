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
  });
});


sections.forEach((section) => (section.style.display = "none"));
footer.style.display = "none";

