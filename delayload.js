


setTimeout(function() {
	const l1 = document.getElementsByClassName("displaypostload");
	for (const el of l1){
		el.classList.remove("inactive");
		el.classList.add("active");
	}

	const l2 = document.getElementsByClassName("displaypreload");
	for (const el of l2){
		el.classList.remove("active");
		el.classList.add("inactive");
	}

	const mc = document.getElementById("maincontent");
	mc.classList.remove("inactive1");
	mc.classList.add("active1");
			


	//document.body.style.overflowY="scroll";
	
//	const l1 = document.getElementById("displaypostload");
//	l1.classList.remove("inactive");
//	l1.classList.add("active");
//
//	const l2 = document.getElementById("displaypreload");
//	l2.classList.remove("active");
//	l2.classList.add("inactive");
}, 5000);

