const content = document.getElementsByClassName('scrollcontent');
const ctparent = document.getElementsByClassName('contentparent');
const bg = document.getElementsByClassName('staticbg');
let justscrolled = false;


ctparent[0].addEventListener('scroll', () => {
	justscrolled = true;
	let scrollY = (ctparent[0].scrollTop / (window.innerHeight*5)) * 500;
	//const scrollY = window.scrollY/(window.innerHeight+val/5)*100;

	if (scrollY % 100 > 97.5 && window.innerHeight >= 789) {
		scrollY = (window.innerHeight*Math.ceil(ctparent[0].scrollTop/window.innerHeight) / (window.innerHeight*5)) * 500;
	}
	if (scrollY % 100 < 9 && window.innerHeight < 789) {
		scrollY = (window.innerHeight*Math.floor(ctparent[0].scrollTop/window.innerHeight) / (window.innerHeight*5)) * 500;
	}
	console.log(scrollY, ctparent[0].scrollTop, ctparent[0].scrollHeight, window.innerHeight);

	for (let i=0; i<content.length; i++) {
		content[i].style.transform = `translate(calc(-50% - ${scrollY}vw + ${i}*100vw))`;
	}
	for (let i=0; i<bg.length; i++) {
		bg[i].style.transform = `translate(calc(-50% + ${scrollY}vw + ${i}*100vw))`;
	}
	justscrolled = false;

	/*
	if ((ctparent[0].scrollTop/window.innerHeight-Math.floor(ctparent[0].scrollTop/window.innerHeight))>0.97){
		scrollY =  
	*/
});

