const mobileMenuTrigger = document.getElementById("mobileMenuTrigger");
const bars = document.querySelectorAll(".bar");
const navWrapper = document.getElementById("nav-wrapper");
const navLinks = document.getElementById("nav-links");

mobileMenuTrigger.addEventListener("click", function () {
  mobileMenuTrigger.classList.toggle("active");
  navWrapper.classList.toggle("active");
  navLinks.classList.toggle("active");
  bars.forEach((bar) => bar.classList.toggle("active"));
});
