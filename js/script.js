// Get the nav button and the nav links
const navButton = document.querySelector(".navButton");
const navLinks = document.querySelector(".navLinks");

// querySelector = calss/attribu
// GetEelemnt = tableau 

// Add a click event listener to the nav button
navButton.addEventListener('click', function() {
  // Toggle the "open" class on the nav links
  navLinks.classList.add('open');
//   navButton.classList.add('open');
})