setTimeout(function() {
	const l1 = document.getElementById("displaypostload");
	l1.classList.remove("inactive");
	l1.classList.add("active");

	const l2 = document.getElementById("displaypreload");
	l2.classList.remove("active");
	l2.classList.add("inactive");
}, 5000);

