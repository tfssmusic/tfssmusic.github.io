const mevent1 = document.getElementById("mevent1");
const mevent2 = document.getElementById("mevent2");
const mevent3 = document.getElementById("mevent3");

console.log("mevent1");

function hide(){
	blocker.style.display = "block";
	xbtn.style.display = "block";
	frame.style.display = "block";
	document.body.style.overflowY = "hidden";
}

mevent1.addEventListener("click", function(){
	hide();
	frame.src = "https://tfssmusic.github.io/events/1/";
});

mevent2.addEventListener("click", function(){
	hide();
	frame.src = "https://tfssmusic.github.io/events/2/";
});

mevent3.addEventListener("click", function(){
	hide();
	frame.src = "https://tfssmusic.github.io/events/3/";
});

function restore(){
	frame.style.display = "none";
	blocker.style.display = "none";
	xbtn.style.display = "none";
	document.body.style.overflowY = "scroll";
}
