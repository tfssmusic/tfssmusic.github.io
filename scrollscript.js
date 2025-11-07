const content = document.getElementsByClassName('scrollcontent');


window.addEventListener('scroll', () => {
	const scrollY = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 500;
	//const scrollY = window.scrollY/(window.innerHeight+val/5)*100;

	for (let i=0; i<content.length; i++) {
		content[i].style.transform = `translate(calc(-50% - ${scrollY}vw + ${i}*100vw))`;
	}
});

