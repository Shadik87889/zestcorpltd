function page2Anim() {
  // GSAP Opening Animation for Page1
  gsap.from(".background-display-image", {
    opacity: 0,
    scale: 1.2,
    duration: 1.5,
    ease: "power2.out",
  });

  gsap.from(".nav", {
    y: -50,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: "power2.out",
  });

  gsap.from(".hero-texts .pt-one h1", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 1,
    ease: "power2.out",
  });

  gsap.from(".hero-texts .pt-two p", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 1.2,
    ease: "power2.out",
  });

  gsap.from(".hero-texts .pt-three a", {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1,
    delay: 1.4,
    ease: "power2.out",
  });

  gsap.registerPlugin(ScrollTrigger);
  gsap.from(".title-slogan h1", {
    scrollTrigger: {
      trigger: ".title-slogan",
      start: "top 80%",
      end: "top 50%",
      scrub: 2,
    },
    opacity: 0,
    y: 80,
    duration: 1.5,
    ease: "power3.out",
  });
  gsap.utils
    .toArray(".some-products-display .product")
    .forEach((product, i) => {
      gsap.from(product, {
        scrollTrigger: {
          trigger: product,
          start: "top 90%",
          end: "top 50%",
          scrub: 2,
        },
        opacity: 0,
        y: 100,
        scale: 0.9,
        duration: 1.5,
        ease: "power3.out",
        delay: i * 0.2,
      });

      let img = product.querySelector(".product-img img");

      product.addEventListener("mouseenter", () => {
        gsap.to(img, {
          scale: 1.1,
          rotate: 3,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      product.addEventListener("mouseleave", () => {
        gsap.to(img, {
          scale: 1,
          rotate: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });
}
page2Anim();
