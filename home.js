// home.js
const { ipcRenderer } = require("electron");

document.addEventListener("DOMContentLoaded", function () {
  const goToStudentListBtn = document.getElementById("goToStudentListBtn");

  goToStudentListBtn.addEventListener("click", function () {
    window.location.href = "home.html"; // Navigate to the student list page
  });
});

const closeAppButton = document.getElementById("close-app-button");

// Close the app button event listener
closeAppButton.addEventListener("click", () => {
  ipcRenderer.send("close-app");
});
