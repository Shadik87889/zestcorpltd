function showPart(part) {
  for (let i = 1; i <= 5; i++) {
    document.getElementById(`form-part-${i}`).style.display =
      i === part ? "block" : "none";
  }
}
const dobInput = document.getElementById("dob");
const dobPlaceholder = document.getElementById("dobPlaceholder");

dobInput.addEventListener("change", function () {
  dobPlaceholder.style.display = this.value ? "none" : "block";
});
