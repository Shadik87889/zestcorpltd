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
