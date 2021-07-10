let nav_icon = document.querySelector("header .small-nav-icon");
let nav = document.querySelector("header nav");
nav_icon.addEventListener("click", function() {
	nav.classList.toggle("active");
});
