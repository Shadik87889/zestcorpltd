document.addEventListener("DOMContentLoaded", function () {
  const faqs = [
    {
      question: "What fish health products do you offer?",
      answer: "We offer fish medicines, supplements, and water treatments.",
    },
    {
      question: "Are your medicines safe for all fish?",
      answer: "Yes, our products are tested and safe for various species.",
    },
    {
      question: "How can I buy your products?",
      answer: "You can purchase from our website or authorized dealers.",
    },
    {
      question: "Do you offer fish disease consultations?",
      answer: "Yes, we provide expert guidance for disease management.",
    },
    {
      question: "Where can I find dosage details?",
      answer: "Dosage details are on product labels and our website.",
    },
    {
      question: "Do you offer bulk buying or dealership?",
      answer: "Yes, we offer bulk purchases and dealership opportunities.",
    },
  ];

  document.querySelectorAll(".ques").forEach((element, index) => {
    const originalText = element.innerHTML;

    // Create a span element to hold the text content (for smooth transitions)
    const textSpan = document.createElement("span");
    textSpan.innerHTML = originalText;
    element.innerHTML = ""; // Clear the original content
    element.appendChild(textSpan);

    // Style the text span for smooth transition
    textSpan.style.transition = "opacity 0.4s ease-in-out";

    element.addEventListener("mouseenter", function () {
      textSpan.style.opacity = "0";
      setTimeout(() => {
        const fontSize = window.innerWidth <= 768 ? "4vw" : "1.1vw";
        textSpan.innerHTML = `<span style="font-size: ${fontSize};">${faqs[index].answer}</span>`;
        textSpan.style.opacity = "1";
      }, 300);
    });

    element.addEventListener("mouseleave", function () {
      textSpan.style.opacity = "0";
      setTimeout(() => {
        textSpan.innerHTML = originalText;
        textSpan.style.opacity = "1";
      }, 300);
    });
  });
  function contactPage2Anim() {
    // Animate the FAQ title
    gsap.from(".pt-one h1", {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".pt-one",
        start: "top 80%",
        end: "bottom 5%",
        scrub: 0.7,
      },
    });

    // Animate each question
    gsap.from(".ques", {
      opacity: 0,
      y: 40,
      stagger: 0.1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".pt-two",
        start: "top 80%",
        end: "bottom 50%",
        scrub: true,
      },
    });
  }
  contactPage2Anim();
});
