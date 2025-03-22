document.addEventListener("DOMContentLoaded", function () {
  function navHoverEffect() {
    let gallaryBtn = document.querySelector(".gallary");
    let gallaryText = document.querySelector(".gallary p");

    // Apply transition for smooth effect
    gallaryText.style.transition = "color 0.3s ease";

    gallaryBtn.addEventListener("mouseenter", () => {
      gallaryText.style.color = "#fff";
    });

    gallaryBtn.addEventListener("mouseleave", () => {
      gallaryText.style.color = "#000";
    });
  }
  navHoverEffect();
  function page1Fun() {
    const images = [
      "images/pexels-manikantavoona-5036189.jpg",
      "images/pexels-lyulog-2624691.jpg",
      "images/pexels-quang-nguyen-vinh-222549-2131967.jpg",
      "images/pexels-quang-nguyen-vinh-222549-14021542.jpg",
      "images/pexels-setengah-lima-sore-1061582751-30733104.jpg",
      "images/pexels-quang-nguyen-vinh-222549-6710788.jpg",
    ];

    let currentIndex = 0;
    const sliderContainer = document.querySelector(".background-display-image");

    // Create two layers for crossfading effect
    const img1 = document.createElement("div");
    const img2 = document.createElement("div");

    [img1, img2].forEach((img) => {
      img.classList.add("slider-image");
      sliderContainer.appendChild(img);
    });

    // Set initial images
    img1.style.backgroundImage = `url(${images[0]})`;
    img1.classList.add("active");

    // Preload images to prevent lag
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    function updateSlider() {
      const nextIndex = (currentIndex + 1) % images.length;
      const activeImg = document.querySelector(".slider-image.active");
      const nextImg = activeImg === img1 ? img2 : img1;

      // Set the next image's background
      nextImg.style.backgroundImage = `url(${images[nextIndex]})`;

      // GSAP Smooth Transition Animation
      gsap
        .timeline()
        .set(nextImg, { opacity: 0, scale: 1.05 }) // Start slightly zoomed in
        .to(
          activeImg,
          { opacity: 0, scale: 1.05, duration: 1.8, ease: "power2.out" },
          0
        )
        .to(
          nextImg,
          { opacity: 1, scale: 1, duration: 1.8, ease: "power2.out" },
          0
        );

      nextImg.classList.add("active");
      activeImg.classList.remove("active");

      currentIndex = nextIndex;
    }

    // Auto-slide every 7 seconds
    setInterval(updateSlider, 7000);
  }
  page1Fun();
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
  // page2Anim();
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
  function page3MarqueeAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    // Left to Right Animation for Top Text
    gsap.to(".marquee-top", {
      x: "100%",
      duration: 10,
      ease: "linear",
      repeat: -1, // Infinite loop
    });

    // Right to Left Animation for Bottom Text
    gsap.to(".marquee-bottom", {
      x: "-100%",
      duration: 10,
      ease: "linear",
      repeat: -1, // Infinite loop
    });
  }
  function animatePage5() {
    // Animate the title (h1) in part-one (fade-in and slight move up)
    gsap.from(".page5 .part-one h1", {
      scrollTrigger: {
        trigger: ".page5 .part-one",
        start: "top -10%",
        end: "20% -50%",
        scrub: 0.8,
      },
      opacity: 0,
      y: 20, // Slight move up
      duration: 1,
      ease: "linear", // Simple linear motion for a clean effect
    });

    // Animate the paragraph (p) in part-one (fade-in and slight move up)
    gsap.from(".page5 .part-one p", {
      scrollTrigger: {
        trigger: ".page5 .part-one",
        start: "top -10%",
        end: "20% -50%",
        scrub: 0.8,
      },
      opacity: 0,
      y: 15, // Slight move up
      duration: 1,
      ease: "linear", // Simple easing for a clean and smooth animation
    });

    // Animate the disease details in part-two (fade-in with slight movement from the left)
    gsap.from(".page5 .part-two .first-disease", {
      scrollTrigger: {
        trigger: ".page5 .part-two",
        start: "top -10%",
        end: "20% -40%",
        scrub: 0.1,
        stagger: 0.2,
      },
      opacity: 0,
      x: -50, // Slide from the left
      duration: 1,
      ease: "linear", // Simple motion, no easing for a smoother effect
    });

    // Animate the buttons in part-three (fade-in and slight move up)
  }

  // Call the function to initialize all animations
  animatePage5();

  function page5Fun() {
    // Check if the screen width is mobile (768px or less)
    if (window.innerWidth <= 768) {
      const partTwo = document.querySelector(".part-two");
      const backwardBtn = document.querySelector(".backward");
      const forwardBtn = document.querySelector(".forward");

      // Scroll width per click (adjust based on your layout)
      const scrollAmount = 250;

      // Scroll left
      backwardBtn.addEventListener("click", function () {
        partTwo.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        checkButtons();
      });

      // Scroll right
      forwardBtn.addEventListener("click", function () {
        partTwo.scrollBy({ left: scrollAmount, behavior: "smooth" });
        checkButtons();
      });

      // Disable buttons when at the start or end
      function checkButtons() {
        setTimeout(() => {
          if (partTwo.scrollLeft <= 0) {
            backwardBtn.disabled = true;
            backwardBtn.style.opacity = "0.5";
            backwardBtn.style.cursor = "not-allowed";
          } else {
            backwardBtn.disabled = false;
            backwardBtn.style.opacity = "1";
            backwardBtn.style.cursor = "pointer";
          }

          if (partTwo.scrollLeft + partTwo.clientWidth >= partTwo.scrollWidth) {
            forwardBtn.disabled = true;
            forwardBtn.style.opacity = "0.5";
            forwardBtn.style.cursor = "not-allowed";
          } else {
            forwardBtn.disabled = false;
            forwardBtn.style.opacity = "1";
            forwardBtn.style.cursor = "pointer";
          }
        }, 200);
      }

      // Check on load
      checkButtons();

      // Allow horizontal scrolling with touch gestures on mobile
      partTwo.style.overflowX = "auto";
      partTwo.style.scrollBehavior = "smooth";
    }
  }

  page5Fun();
  function page7Fun() {
    // Check if the screen width is mobile (768px or less)
    if (window.innerWidth <= 768) {
      const partTwo = document.querySelector(".page7 .part-two");
      const backwardBtn = document.querySelector(".page7 .backward");
      const forwardBtn = document.querySelector(".page7 .forward");

      // Scroll width per click (adjust based on your layout)
      const scrollAmount = 250;

      // Scroll left
      backwardBtn.addEventListener("click", function () {
        partTwo.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        checkButtons();
      });

      // Scroll right
      forwardBtn.addEventListener("click", function () {
        partTwo.scrollBy({ left: scrollAmount, behavior: "smooth" });
        checkButtons();
      });

      // Disable buttons when at the start or end
      function checkButtons() {
        setTimeout(() => {
          if (partTwo.scrollLeft <= 0) {
            backwardBtn.disabled = true;
            backwardBtn.style.opacity = "0.5";
            backwardBtn.style.cursor = "not-allowed";
          } else {
            backwardBtn.disabled = false;
            backwardBtn.style.opacity = "1";
            backwardBtn.style.cursor = "pointer";
          }

          if (partTwo.scrollLeft + partTwo.clientWidth >= partTwo.scrollWidth) {
            forwardBtn.disabled = true;
            forwardBtn.style.opacity = "0.5";
            forwardBtn.style.cursor = "not-allowed";
          } else {
            forwardBtn.disabled = false;
            forwardBtn.style.opacity = "1";
            forwardBtn.style.cursor = "pointer";
          }
        }, 200);
      }

      // Check on load
      checkButtons();

      // Allow horizontal scrolling with touch gestures on mobile
      partTwo.style.overflowX = "auto";
      partTwo.style.scrollBehavior = "smooth";
    }
  }
  function page5Anim() {
    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".page-5",
        start: "top 0",
        end: "bottom top",
        scrub: 1, // Increase scrub for smoother scroll-based interaction
        pin: true,
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
  page7Fun();
  function page6Anim() {
    gsap.to(".slogan", {
      y: "30px",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".page6",
        start: "top 70%",
        end: "50% 20%",
        scrub: 1,
        markers: false,
      },
    });
  }
  page6Anim();
  function page8Anim() {
    gsap.to(".page8 .apply-now .apply-now-text-button", {
      y: "30px",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".page8",
        start: "top 70%",
        end: "50% 20%",
        scrub: 0.5,
        markers: false,
      },
    });
  }
  // page8Anim();
});
//perfect
