const sections = document.querySelectorAll("main section");
const navLinks = document.querySelectorAll("nav a");
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
  backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
