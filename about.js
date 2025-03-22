function page2Anim() {
  // GSAP Opening Animation for Page1
  gsap.from(".about-display-image", {
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
function aboutPage2Anim() {
  // First Image Parallax & Opacity Effect
  gsap.from(".first-img-container img", {
    scale: 1.3,
    opacity: 0,
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".first-img-container",
      start: "top 80%",
      end: "top 20%",
      scrub: 0.5,
    },
  });

  // Heading & Paragraph Fade In with Slide Up Effect
  gsap.from(".misson", {
    y: 100,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".misson",
      start: "top 85%",
      end: "top 30%",
      scrub: 0.5,
    },
  });

  gsap.from(".part2-first-text", {
    y: 50,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".part2-first-text",
      start: "top 85%",
      end: "top 30%",
      scrub: 0.5,
    },
  });

  // Second Image Slide In from Left
  gsap.from(".second-img", {
    x: -200,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".second-img",
      start: "top 90%",
      end: "top 30%",
      scrub: 0.5,
    },
  });

  // Text Box Slide Up Effect
  gsap.from(".page2-second-img-text", {
    y: 80,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".page2-second-img-text",
      start: "top 90%",
      end: "top 30%",
      scrub: 0.5,
    },
  });

  // Contact Button Pop Effect
  gsap.from(".con-btn", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    ease: "elastic.out(1, 0.5)",
    scrollTrigger: {
      trigger: ".con-btn",
      start: "top 90%",
      end: "top 30%",
      scrub: 0.5,
    },
  });

  // Third Image Slide In from Right
  gsap.from(".third-img", {
    x: 200,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".third-img",
      start: "top 90%",
      end: "top 30%",
      scrub: 0.5,
    },
  });

  // Fourth Image Scale & Fade In
  gsap.from(".forth-img", {
    scale: 0.8,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".forth-img",
      start: "top 90%",
      end: "top 30%",
      scrub: 0.5,
    },
  });
}
aboutPage2Anim();
function page3Anim() {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".page3 .one", {
    scrollTrigger: {
      trigger: ".page3 .one",
      start: "top -10%",
      end: "100% -100%",
      scrub: 1,
      markers: false,
    },
    opacity: 0,
    y: 60,
    scale: 1.05,
    ease: "expo.out",
    duration: 1.5,
  });

  gsap.from(".page3 .two", {
    scrollTrigger: {
      trigger: ".page3 .two",
      start: "top -10%",
      end: "100% -100%",
      scrub: 1,
      markers: false,
    },
    opacity: 0,
    y: 60,
    scale: 1.05,
    ease: "expo.out",
    duration: 1.5,
  });

  gsap.from(".page3 .three", {
    scrollTrigger: {
      trigger: ".page3 .three",
      start: "top -10%",
      end: "100% -100%",
      scrub: 1,
      markers: false,
    },
    opacity: 0,
    y: 60,
    scale: 1.05,
    ease: "expo.out",
    duration: 1.5,
  });
  // const quickProductImages = [
  //   // "images/gassoff.png",
  //   // "images/Bactisol.png",
  //   // "images/bosterfat.png",
  //   // "images/vitamax-Photoroom.png",
  //   // "images/freepik__the-style-is-candid-image-photography-with-natural__38384.png",
  // ];

  // let currentImageIndex = 0;
  // const imageElement = document.querySelector(".page3 .quick-product img");
  // let imageChangeInterval = null;
  // function changeImage() {
  //   gsap.to(imageElement, {
  //     opacity: 0,
  //     scale: 0.95,
  //     y: -30,
  //     duration: 1.5,
  //     ease: "expo.out",
  //     onComplete: () => {
  //       currentImageIndex =
  //         (currentImageIndex + 1) % quickProductImages.length;
  //       imageElement.src = quickProductImages[currentImageIndex];
  //       gsap.fromTo(
  //         imageElement,
  //         {
  //           opacity: 0,
  //           scale: 0.9,
  //           y: 30,
  //         },
  //         {
  //           opacity: 1,
  //           scale: 1,
  //           y: 0,
  //           duration: 1.5,
  //           ease: "expo.out",
  //         }
  //       );
  //     },
  //   });
  // }

  // ScrollTrigger.create({
  //   trigger: ".page3 .quick-product",
  //   start: "top 80%",
  //   onEnter: () => {
  //     if (imageChangeInterval) {
  //       clearInterval(imageChangeInterval);
  //     }

  //     changeImage();
  //     imageChangeInterval = setInterval(changeImage, 5000);
  //   },
  //   markers: false,
  //   once: true,
  // });
}
page3Anim();
function page4Anim() {
  gsap.registerPlugin(ScrollTrigger);

  // Smooth fade-in + floating effect for the quote
  gsap.from(".quote-of-the-ceo", {
    opacity: 0,
    y: 80,
    scale: 0.95,
    duration: 2,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".quote-of-the-ceo",
      start: "top 85%",
      end: "top 50%",
      scrub: 2,
    },
  });

  // Elegant fade-up for the CEO name with a delay
  gsap.from(".page-4 p", {
    opacity: 0,
    y: 40,
    duration: 1.8,
    ease: "power3.out",
    delay: 0.5,
    scrollTrigger: {
      trigger: ".page-4 p",
      start: "top 90%",
      end: "top 60%",
      scrub: 1.5,
    },
  });
}
page4Anim();
function page5Anim() {
  gsap.registerPlugin(ScrollTrigger);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".page-5",
      start: "top 0",
      end: "bottom top",
      scrub: 1, // Increase scrub for smoother scroll-based interaction
      pin: true,
      markers: false,
    },
  });

  // **🔊 Image Scale Animation**
  tl.to(
    ".page-5-img-box img",
    {
      scale: 1.2, // Slight, gentle scale-up for a smoother effect
      duration: 2, // Slightly longer duration for a smoother transition
      ease: "power1.inOut", // Smoother ease for scale-up
    },
    "start+=0.1"
  );

  // **📝 Text-One Move to Right**
  tl.to(
    ".text-one",
    {
      x: 120, // Slight move to the right for a more subtle effect
      duration: 2, // Slightly longer for smoothness
      ease: "power1.inOut",
    },
    "start+=0.1" // Same timing, but smoother transitions
  );

  // **📝 Text-Two Move to Left**
  tl.to(
    ".text-two",
    {
      x: -120, // Slight move to the left for smoother animation
      duration: 2, // Matching duration with Text-One for consistency
      ease: "power1.inOut", // Smoother easing for left motion
    },
    "start+=0.1" // Keep synchronization with Text-One
  );
}

page5Anim();
