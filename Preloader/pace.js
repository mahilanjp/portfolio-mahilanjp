const loader = document.getElementById("preloader");
const content = document.getElementById("content");

let isPageLoaded = false;
let isTimerDone = false;

// Start 5-second timer as soon as script runs
setTimeout(() => {
  isTimerDone = true;
  checkIfReady();
}, 5000);

// Listen for full page load (images, etc.)
window.addEventListener("load", () => {
  isPageLoaded = true;
  checkIfReady();
});

function checkIfReady() {
  if (isPageLoaded && isTimerDone) {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
      content.style.display = "block";
    }, 500); // Optional fade-out
  }
}
