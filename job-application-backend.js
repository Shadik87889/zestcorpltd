document
  .getElementById("job-application-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault(); // ✅ Prevent page refresh
    const loader = document.getElementById("loader");
    loader.style.display = "block";
    // Get form data
    const formData = new FormData();
    formData.append("firstName", document.getElementById("firstName").value);
    formData.append("lastName", document.getElementById("lastName").value);
    formData.append("email", document.getElementById("email").value);
    formData.append("phone", document.getElementById("phone").value);
    formData.append("birthday", document.getElementById("birthday").value);
    formData.append("gender", document.getElementById("gender").value);
    formData.append("degree", document.getElementById("degree").value);
    formData.append(
      "institution",
      document.getElementById("institution").value
    );
    formData.append(
      "passingYear",
      document.getElementById("passingYear").value
    );
    formData.append(
      "workExperience",
      document.getElementById("workExperience").value
    );
    formData.append("skills", document.getElementById("skills").value);
    formData.append(
      "workLocation",
      document.getElementById("workLocation").value
    );
    formData.append("joinDate", document.getElementById("joinDate").value);
    formData.append("cv", document.getElementById("cv").files[0]);
    formData.append("photo", document.getElementById("photo").files[0]);
    formData.append(
      "supportingDocuments",
      document.getElementById("supportingDocuments").files[0]
    );

    // ✅ Send form data to backend (Express API)
    try {
      const response = await fetch("/apply-job", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Your job application has been successfully submitted.");
        document.getElementById("job-application-form").reset(); // ✅ Reset the form
      } else {
        alert("Failed to submit the application.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    } finally {
      resetLoader();
    }
  });
function resetLoader() {
  const loader = document.getElementById("loader");
  loader.style.display = "none"; // Hide loader
}
