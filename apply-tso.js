gsap.from(".pt-one", {
  opacity: 0,
  y: 50,
  scale: 0.95,
  duration: 1.2,
  ease: "power3.out",
});

gsap.from(".pt-one h1", {
  opacity: 0,
  y: 30,
  rotationX: -90,
  transformOrigin: "top center",
  duration: 1,
  ease: "power3.out",
  stagger: 0.15,
});
