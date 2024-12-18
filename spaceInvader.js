// Haal het canvas-element en de tekencontext op
const canvas = document.getElementById("avatarCanvas");
const ctx = canvas.getContext("2d");

// Definieer de grootte van elk blok en beginposities
const blockSize = 50; // Grootte van de blokken

// Vast patroon voor het avatarontwerp
const fixedPattern = [
	[1, 1, 0, 0, 0, 1, 1],
	[1, 0, 1, 0, 1, 0, 1],
	[1, 0, 0, 1, 0, 0, 1],
	[1, 1, 1, 1, 1, 1, 1],
	[1, 0, 0, 1, 0, 0, 1],
	[1, 0, 1, 0, 1, 0, 1],
	[1, 1, 0, 0, 0, 1, 1],
];

// Teken het vaste patroon op het canvas
function drawAvatar() {
	for (let row = 0; row < fixedPattern.length; row++) {
		for (let col = 0; col < fixedPattern[row].length; col++) {
			if (fixedPattern[row][col] === 1) {
				ctx.fillStyle = "limegreen";
				ctx.fillRect(col * blockSize, row * blockSize, blockSize, blockSize);
			}
		}
	}
}

// Roep de functie aan om het avatar te tekenen
drawAvatar();
