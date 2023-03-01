//This event listener is used with the nav-hamburger
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Get the hamburger menu and nav links
//const hamburger = document.querySelector(".hamburger-menu");
//const navLinks = document.querySelector(".nav-links");


// Add event listener to the hamburger menu
hamburger.addEventListener("click", () => {
  // Toggle the "active" class on both the hamburger and nav links
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Add event listener to the document object to close the menu when it loses focus
document.addEventListener("click", (e) => {
  // Check if the target of the click is not the hamburger menu or nav links
  if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
    // Remove the "active" class from both the hamburger and nav links
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
  }
});
