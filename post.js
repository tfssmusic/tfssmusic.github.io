const event1 = document.getElementById("event1");
const blocker = document.getElementById("blocker");
const xbtn = document.getElementById("xbtn");
const frame = document.getElementById("postframe");

console.log("event1");

event1.addEventListener("click", function(){
	console.log("FUCK");
	frame.style.display = "block";
	blocker.style.display = "block";
	xbtn.style.display = "block";
	document.body.style.overflowY = "hidden";
})

function restore(){
	frame.style.display = "none";
	blocker.style.display = "none";
	xbtn.style.display = "none";
	document.body.style.overflowY = "scroll";
}
