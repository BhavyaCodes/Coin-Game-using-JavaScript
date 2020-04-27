//function to check if player and coin images are touching
function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}

const avatar = document.querySelector('#player');
const coin = document.querySelector("#coin");
const h1 = document.querySelector("h1");

//move avatar event listener
window.addEventListener("keyup",function(e){
	console.log(e.key);
	if (e.key === 'ArrowDown' || e.key ==='Down'){
		let currTop = extractPos(getComputedStyle(avatar).top);
		console.log(`currtop = ${currTop}`);
		avatar.style.top = `${currTop + 50}px`;
	}
	else if(e.key === 'ArrowUp' || e.key ==='Up'){
		let currTop = extractPos(getComputedStyle(avatar).top);
		console.log(`currtop = ${currTop}`);
		avatar.style.top = `${currTop - 50}px`;
	}
	else if(e.key === 'ArrowRight' || e.key ==='Right'){
		let currLeft = extractPos(getComputedStyle(avatar).left);
		console.log(`currLeft = ${currLeft}`);
		avatar.style.left = `${currLeft + 50}px`;
		avatar.style.transform = 'scale(1,1)';
	}
	else if(e.key === 'ArrowLeft' || e.key ==='Left'){
		let currLeft = extractPos(getComputedStyle(avatar).left);
		console.log(`currLeft = ${currLeft}`);
		avatar.style.left = `${currLeft - 50}px`;
		avatar.style.transform = 'scale(-1,1)';
	}
	if(isTouching(avatar,coin)){
		moveCoin();
		score++;
		h1.innerText = `Score: ฿${score}`;
	}
})

//converts '100px' string to num - > 100
const extractPos = (pos)=>{
	if (!pos) return 100;
	return parseInt(pos.slice(0,-2));
}

//change coin top and left randomly, values based on window size
const moveCoin = () =>{
	const x = (Math.random()*(window.innerWidth-100));
	const y = (Math.random()*(window.innerHeight-100));
	coin.style.top = `${y}px`;
	coin.style.left = `${x}px`;

}

//initial coin location and score
moveCoin();
let score = 0;