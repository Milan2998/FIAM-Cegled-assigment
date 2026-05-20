const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", (e) => {
  e.stopPropagation(); 
  menu.classList.toggle("active");
  hamburger.classList.toggle("active");
  
  const isExpanded = hamburger.getAttribute("aria-expanded") === "true";
  hamburger.setAttribute("aria-expanded", !isExpanded);
});

document.addEventListener("click", (e) => {
  if (menu.classList.contains("active") && !menu.contains(e.target)) {
    menu.classList.remove("active");
    hamburger.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
  }
});