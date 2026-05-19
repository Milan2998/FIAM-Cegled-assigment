const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

// Toggle menu and hamburger animation
hamburger.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevents the document click from instantly closing it
  menu.classList.toggle("active");
  hamburger.classList.toggle("active");
  
  // Accessibility update
  const isExpanded = hamburger.getAttribute("aria-expanded") === "true";
  hamburger.setAttribute("aria-expanded", !isExpanded);
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (menu.classList.contains("active") && !menu.contains(e.target)) {
    menu.classList.remove("active");
    hamburger.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
  }
});