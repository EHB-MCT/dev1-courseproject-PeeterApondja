const canvas = document.getElementById("interactiveCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const circles = [];
const numCircles = 100;
const mouse = { x: null, y: null };

window.addEventListener("mousemove", (event) => {
	mouse.x = event.x;
	mouse.y = event.y;
});

class Circle {
	constructor(x, y, radius, speedX, speedY, color) {
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.speedX = speedX;
		this.speedY = speedY;
		this.color = color;
	}

	draw() {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
		ctx.fillStyle = this.color;
		ctx.fill();
	}

	update() {
		this.x += this.speedX;
		this.y += this.speedY;

		if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
			this.speedX = -this.speedX;
		}
		if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
			this.speedY = -this.speedY;
		}

		const dx = this.x - mouse.x;
		const dy = this.y - mouse.y;
		const distance = Math.sqrt(dx * dx + dy * dy);

		if (distance < 100) {
			this.color = "#00ff00";
			this.radius = 10;
		} else {
			this.color = "#ff6600";
			this.radius = 5;
		}

		this.draw();
	}
}

function init() {
	for (let i = 0; i < numCircles; i++) {
		const radius = 5;
		const x = Math.random() * canvas.width;
		const y = Math.random() * canvas.height;
		const speedX = (Math.random() - 0.5) * 2;
		const speedY = (Math.random() - 0.5) * 2;
		const color = "#ff6600";
		circles.push(new Circle(x, y, radius, speedX, speedY, color));
	}
}

function animate() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	for (let i = 0; i < circles.length; i++) {
		circles[i].update();
	}

	requestAnimationFrame(animate);
}

window.addEventListener("resize", () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
});

init();
animate();
