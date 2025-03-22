document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileNav = document.querySelector(".mobile-nav");
  const body = document.body;
  let heroText = document.querySelector(".hero-texts");

  menuToggle.addEventListener("click", function () {
    menuToggle.classList.toggle("active");
    body.classList.toggle("menu-open");

    // Change the heroText position on menu toggle
    if (body.classList.contains("menu-open")) {
      gsap.to(mobileNav, {
        left: 0,
        visibility: "visible",
        duration: 0.5,
        ease: "power3.out",
      });
      heroText.style.display = "none"; // Hide hero text when menu opens
    } else {
      setTimeout(() => {
        heroText.style.display = "block";
      }, 500);

      gsap.to(mobileNav, {
        left: "-100%",
        // visibility: "hidden",
        duration: 0.5,
        ease: "power3.in",
      });
    }
  });
});
