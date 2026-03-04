const event1 = document.getElementById("event1");
const event2 = document.getElementById("event2");
const event3 = document.getElementById("event3");
const blocker = document.getElementById("blocker");
const xbtn = document.getElementById("xbtn");
const frame = document.getElementById("postframe");

console.log("event1");

function hide(){
	blocker.style.display = "block";
	xbtn.style.display = "block";
	frame.style.display = "block";
	document.body.style.overflowY = "hidden";
}

event1.addEventListener("click", function(){
	hide();
	frame.src = "https://tfssmusic.github.io/events/1/";
});

event2.addEventListener("click", function(){
	hide();
	frame.src = "https://tfssmusic.github.io/events/2/";
});

event3.addEventListener("click", function(){
	hide();
	frame.src = "https://tfssmusic.github.io/events/3/";
});

function restore(){
	frame.style.display = "none";
	blocker.style.display = "none";
	xbtn.style.display = "none";
	document.body.style.overflowY = "scroll";
}
