const content = document.getElementsByClassName('scrollcontent');

window.addEventListener('scroll', () => {
	const scrollY = window.scrollY; 
	for (let i=0; i<content.length; i++) {
		content[i].style.transform = `translate(calc(-50% - ${scrollY}px + ${i}*500px))`;
	}
});

