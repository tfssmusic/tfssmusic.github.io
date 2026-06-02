const JBm = document.getElementById("JBm");
const CBm = document.getElementById("CBm");
const MCm = document.getElementById("MCm");
const btnlistm = [JBm, CBm, MCm]

const JBmAU = document.getElementById("mJazzbandau");
const CBmAU = document.getElementById("mConcertbandau");
const MCmAU = document.getElementById("mMusiccouncilaboutus");
const GmAU = document.getElementById("mgeneralau");
const AUmList = [JBmAU, CBmAU, MCmAU, GmAU]

const backm = document.getElementById("back2");


JBm.addEventListener("click", function() {
	for (const el of AUmList){
		el.classList.remove("active");
		el.classList.add("inactive");
	}
	if (JBm.classList.contains("clicked")) {
		GmAU.classList.remove("inactive");
		GmAU.classList.add("active");
		JBm.classList.remove("clicked");
		backm.style.transform = `rotate(7deg) translateX(-2vw)`;
	} else {
		JBmAU.classList.remove("inactive");
		JBmAU.classList.add("active");
		backm.style.transform = `rotate(4deg) translateX(-2vw)`;
		for (const el of btnlistm) {
			el.classList.remove("clicked");
			JBm.classList.add("clicked");
		}
	}	
});

CBm.addEventListener("click", function() {
	for (const el of AUmList){
		el.classList.remove("active");
		el.classList.add("inactive");
	}
	if (CBm.classList.contains("clicked")) {
		GmAU.classList.remove("inactive");
		GmAU.classList.add("active");
		CBm.classList.remove("clicked");
		backm.style.transform = `rotate(7deg) translateX(-2vw)`;
	} else {
		CBmAU.classList.remove("inactive");
		CBmAU.classList.add("active");
		backm.style.transform = `rotate(-7deg) translateX(-2vw)`;
		for (const el of btnlistm) {
			el.classList.remove("clicked");
			CBm.classList.add("clicked");
		}
	}	
});

MCm.addEventListener("click", function() {
	for (const el of AUmList){
		el.classList.remove("active");
		el.classList.add("inactive");
	}
	if (MCm.classList.contains("clicked")) {
		GmAU.classList.remove("inactive");
		GmAU.classList.add("active");
		MCm.classList.remove("clicked");
		backm.style.transform = `rotate(7deg) translateX(-2vw)`;
	} else {
		MCmAU.classList.remove("inactive");
		MCmAU.classList.add("active");
		backm.style.transform = `rotate(3deg) translateX(-2vw)`;
		for (const el of btnlistm) {
			el.classList.remove("clicked");
			MCm.classList.add("clicked");
		}
	}	
});

