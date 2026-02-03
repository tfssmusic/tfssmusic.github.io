const layers = [
	{ el: document.querySelector(".mask"), ease: 0.04, x: window.innerWidth/2, y: window.innerWidth/2 },
	{ el: document.querySelector(".mask2"), ease: 0.04, x: window.innerWidth/2, y: window.innerWidth/2 }
];

let targetX = innerWidth / 2;
let targetY = innerHeight / 2;
let targetY2 = innerHeight / 2;


const m1 = document.getElementsByClassName("imgwrap");

window.addEventListener("mousemove", e => {
	targetX = e.clientX;
	targetY = e.clientY;
	targetY2 = e.clientY/1.25;
});

function animate() {
	const l1 = layers[0];
	const l2 = layers[1];
	
	l1.x += (targetX - l1.x) * l1.ease;
	l1.y += (targetY - l1.y) * l1.ease;
	l2.x += (targetX - l2.x) * l2.ease;
	l2.y += (targetY2 - l2.y) * l2.ease;

	l1.el.style.setProperty("--x", `${l1.x}px`);
	l1.el.style.setProperty("--y", `${l1.y + 0.5*m1[1].offsetHeight}px`);
	l2.el.style.setProperty("--x", `${l2.x}px`);
	l2.el.style.setProperty("--y", `${l2.y - 3.0*m1[1].offsetHeight}px`);

	
	requestAnimationFrame(animate);
};
animate();



//const layer = document.querySelector(".mask");
//const layer2 = document.querySelector(".mask2");
//
//const m1 = document.getElementsByClassName("imgwrap");
//
//window.addEventListener('mousemove', (e) => {




//const layer = document.querySelector(".mask");
//const layer2 = document.querySelector(".mask2");
//
//const m1 = document.getElementsByClassName("imgwrap");
//
//window.addEventListener('mousemove', (e) => {
//	layer.style.setProperty('--x', `${e.clientX}px`);
//	layer.style.setProperty('--y', `${e.clientY+ 0.5*m1[1].offsetHeight}px`);
//});
//
//window.addEventListener('mousemove', (e) => {
//	layer2.style.setProperty('--x', `${e.clientX}px`);
//	layer2.style.setProperty('--y', `${e.clientY-3.05*m1[1].offsetHeight}px`);
//});
