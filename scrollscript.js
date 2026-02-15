// const content = document.getElementsByClassName('scrollcontent');
// const ctparent = document.getElementsByClassName('contentparent');
// const bg = document.getElementsByClassName('staticbg');
// 
// 
// ctparent[0].addEventListener('scroll', () => {
// 	let scrollY = (ctparent[0].scrollTop / (window.innerHeight*5)) * 500;
// 	//const scrollY = window.scrollY/(window.innerHeight+val/5)*100;
// 
// 	if (scrollY % 100 > 97.5 && window.innerHeight >= 789) {
// 		scrollY = (window.innerHeight*Math.ceil(ctparent[0].scrollTop/window.innerHeight) / (window.innerHeight*5)) * 500;
// 	}
// 	if (scrollY % 100 < 5 && window.innerHeight < 789) {
// 		scrollY = (window.innerHeight*Math.floor(ctparent[0].scrollTop/window.innerHeight) / (window.innerHeight*5)) * 500;
// 	}
// 	console.log(scrollY, ctparent[0].scrollTop, ctparent[0].scrollHeight, window.innerHeight);
// 
// 	for (let i=0; i<content.length; i++) {
// 		content[i].style.transform = `translate(calc(-50% - ${scrollY}vw + ${i}*100vw))`;
// 	}
// 	for (let i=0; i<bg.length; i++) {
// 		bg[i].style.transform = `translate(calc(-50% + ${scrollY}vw + ${i}*100vw))`;
// 	}
// 
// });


const content = document.getElementsByClassName("scrollcontent");
const bg = document.getElementsByClassName("staticbg");

const snapobj = document.getElementsByClassName("hiddencontent");


let scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
let scrollY = (window.scrollY/scrollableHeight)*500;

for (let i=0; i<snapobj.length; i++) {

	snapobj[i].style.height = window.innerHeight+(scrollableHeight-window.innerHeight*5)/5+"px"; 

}

const cond = document.getElementById("maincontent");


document.addEventListener("scroll", () => {
	content[0].removeAttribute("id");
	if (cond && cond.classList.contains("active1")){
		let scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
		let scrollY = (window.scrollY/scrollableHeight)*500;
	
		console.log(scrollY, scrollableHeight, window.scrollY, window.innerHeight, document.documentElement.scrollHeight);
	
		for (let i=0; i<content.length; i++) {
			content[i].style.transform = `translate(calc(-50% - ${scrollY}vw + ${i}*100vw))`;
		}
		for (let i=0; i<bg.length; i++) {
			bg[i].style.transform = `translate(calc(-50% + ${scrollY}vw + ${i}*100vw))`;
		}
	}
});
