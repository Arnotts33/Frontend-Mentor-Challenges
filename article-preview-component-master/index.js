const shareActiveButton = document.getElementById("share-btn-inactive");

const shareInactiveButton = document.getElementById("share-btn-active");

const author = document.querySelector(".article__author");

const shareBar = document.querySelector(".share-active");

shareActiveButton.addEventListener("click", function () {
	if (window.innerWidth < 896) {
		author.classList.add("hidden");
		shareBar.classList.remove("hidden");
	} else {
		shareBar.classList.toggle("hidden");
	}
});

shareInactiveButton.addEventListener("click", function () {
	if (window.innerWidth < 896) {
		author.classList.remove("hidden");
		shareBar.classList.add("hidden");
	}
});
