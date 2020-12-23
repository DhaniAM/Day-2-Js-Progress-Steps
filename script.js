const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const bar = document.querySelector(".progress-bar");
const circles = document.querySelectorAll(".progress-circle");
let count = 1;

next.addEventListener("click", () => {
	if (count !== 5) {
		count++;
	}
	checkCount();
	moveBar();
	moveCircle();
});

prev.addEventListener("click", () => {
	if (count !== 1) {
		count--;
	}
	checkCount();
	moveBar();
	moveCircle();
});

// Control Button State
function checkCount() {
	if (count !== 5 && count !== 1) {
		next.disabled = false;
		prev.disabled = false;
	} else if (count === 5) {
		prev.disabled = false;
		next.disabled = true;
	} else if (count === 1) {
		prev.disabled = true;
		next.disabled = false;
	}
}

// Control Circle
function moveCircle() {
	circles.forEach((circle, index) => {
		if (index < count) {
			circle.classList.add("active");
		} else {
			circle.classList.remove("active");
		}
	});
}

// Control Bar
function moveBar() {
	switch (count) {
		case 1:
			bar.style.width = "0%";
			break;
		case 2:
			bar.style.width = "25%";
			break;
		case 3:
			bar.style.width = "50%";
			break;
		case 4:
			bar.style.width = "75%";
			break;
		case 5:
			bar.style.width = "100%";
			break;
	}
}
