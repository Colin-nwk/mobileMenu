// $("#search-icon").click(function () {
//   $(".nav").toggleClass("search");
//   $(".nav").toggleClass("no-search");
//   $(".search-input").toggleClass("search-active");
// });

// $(".menu-toggle").click(function () {
//   $(".nav").toggleClass("mobile-nav");
//   $(this).toggleClass("is-active");
// });

const searchIcon = document.getElementById("search-icon"),
  nav = document.querySelector(".nav"),
  searchInput = document.querySelector(".search-input"),
  menuToggle = document.querySelector(".menu-toggle");

searchIcon.addEventListener("click", () => {
  nav.classList.toggle("search");
  nav.classList.toggle("no-search");
  searchInput.classList.toggle("search-active");
});

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("mobile-nav");
  menuToggle.classList.toggle("is-active");
});
