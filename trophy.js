// Function to show the age verification popup
function showAgeVerificationPopup() {
  const primary = document.getElementById("ageVerificationPopup");
  primary.style.display = "block";
}

// Function to hide the age verification popup
function hideAgeVerificationPopup() {
  const primary = document.getElementById("ageVerificationPopup");
  primary.style.display = "none";
}

 // Function to handle the "Yes" button click
 function onYesClick() {
  // Redirect to the main design content
  const maindesigncontent = document.getElementById("maindesigncontent");
  maindesigncontent.style.display = "block";

  // Hide the age verification popup
  hideAgeVerificationPopup();
}

// Function to handle the "No" button click
function onNoClick() {
  // Cancel the redirection
  hideAgeVerificationPopup();
}

// Event listener for the "Yes" button
const yesBtn = document.getElementById("yesBtn");
yesBtn.addEventListener("click", onYesClick);

// Event listener for the "No" button
const noBtn = document.getElementById("noBtn");
noBtn.addEventListener("click", onNoClick);

// Show the age verification popup when the page loads
document.addEventListener("DOMContentLoaded", showAgeVerificationPopup);