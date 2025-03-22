document
  .getElementById("contactForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();
    const submitButton = document.querySelector(".submit-button");
    const loader = document.getElementById("loader");

    // Hide button text & show loader animation
    submitButton.style.visibility = "hidden";
    loader.style.display = "block";

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value;
    const orderNumber = document.getElementById("orderNumber").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!fullName || !email || !message) {
      alert("Please fill in all required fields.");
      resetLoader(); // ✅ Fix: Ensure loader resets if validation fails
      return;
    }

    const formData = { fullName, email, subject, orderNumber, message };

    try {
      const response = await fetch("/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log("Server Response:", result); // ✅ Debugging: Log full response

      if (!response.ok) {
        throw new Error(result.message || "Failed to send message.");
      }

      alert(result.message);
      document.getElementById("contactForm").reset();
    } catch (error) {
      console.error("Error:", error);
      alert(error.message || "Something went wrong. Try again.");
    } finally {
      resetLoader();
    }
  });

function resetLoader() {
  const submitButton = document.querySelector(".submit-button");
  const loader = document.getElementById("loader");

  submitButton.style.visibility = "visible"; // Show button text
  loader.style.display = "none"; // Hide loader
}
