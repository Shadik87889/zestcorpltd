// Get the current page URL path
let currentPage = window.location.pathname.split("/").pop();

// Find all navigation links
let navLinks = document.querySelectorAll(".nav .part-1 a");
// Loop through links and add 'active' class to the matching link
navLinks.forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});
