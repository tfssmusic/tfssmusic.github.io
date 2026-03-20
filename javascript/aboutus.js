const JB = document.getElementById("JB");
const CB = document.getElementById("CB");
const MC = document.getElementById("MC");
const btnlist = [JB, CB, MC]

const JBAU = document.getElementById("Jazzbandau");
const CBAU = document.getElementById("Concertbandau");
const MCAU = document.getElementById("Musiccouncilaboutus");
const GAU = document.getElementById("generalau");
const AUList = [JBAU, CBAU, MCAU, GAU]

const back = document.getElementById("back");


JB.addEventListener("click", function() {
	for (const el of AUList){
		el.classList.remove("active");
		el.classList.add("inactive");
	}
	if (JB.classList.contains("clicked")) {
		GAU.classList.remove("inactive");
		GAU.classList.add("active");
		JB.classList.remove("clicked");
		back.style.transform = `rotate(7deg) translateX(-2vw)`;
	} else {
		JBAU.classList.remove("inactive");
		JBAU.classList.add("active");
		back.style.transform = `rotate(4deg) translateX(-2vw)`;
		for (const el of btnlist) {
			el.classList.remove("clicked");
			JB.classList.add("clicked");
		}
	}	
});

CB.addEventListener("click", function() {
	for (const el of AUList){
		el.classList.remove("active");
		el.classList.add("inactive");
	}
	if (CB.classList.contains("clicked")) {
		GAU.classList.remove("inactive");
		GAU.classList.add("active");
		CB.classList.remove("clicked");
		back.style.transform = `rotate(7deg) translateX(-2vw)`;
	} else {
		CBAU.classList.remove("inactive");
		CBAU.classList.add("active");
		back.style.transform = `rotate(-7deg) translateX(-2vw)`;
		for (const el of btnlist) {
			el.classList.remove("clicked");
			CB.classList.add("clicked");
		}
	}	
});

MC.addEventListener("click", function() {
	for (const el of AUList){
		el.classList.remove("active");
		el.classList.add("inactive");
	}
	if (MC.classList.contains("clicked")) {
		GAU.classList.remove("inactive");
		GAU.classList.add("active");
		MC.classList.remove("clicked");
		back.style.transform = `rotate(7deg) translateX(-2vw)`;
	} else {
		MCAU.classList.remove("inactive");
		MCAU.classList.add("active");
		back.style.transform = `rotate(3deg) translateX(-2vw)`;
		for (const el of btnlist) {
			el.classList.remove("clicked");
			MC.classList.add("clicked");
		}
	}	
});

