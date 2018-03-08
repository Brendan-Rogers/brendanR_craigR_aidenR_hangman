(()=> { console.log("hangman script initiated.")


// VARIABLES
const words = ["blue", "orange", "yellow", "magenta", "violet"];

let initButton = document.querySelector('button');

let currentWord = null,
	wordHint = document.querySelector('.hint-string'),
	guessBox = document.querySelector('.user-guess'),
	resetScreen = document.querySelector('.reset-screen'),
	resetButton = resetScreen.querySelector('button'),
	wrongLetterList = document.querySelector('.wrong-letters'),
	wrongLetterArray = [],
	wrongGuesses = 0;

// FUNCTIONS
function init() {
	// look at MDN -> the Math object 	words[Math.floor(Math.random()*words.length)];

	// map takes existing information in an array and transforms it
	// fills hint with udnerscores
	wordHint.textContext = currentWord.split("").map(letter => letter = "__").join(" ");

	// featured below: template string
	console.log(`Guess this word: ${currentWord}. It's at ${words.indexOf(currentWord)}. Good Luck!`);
}

function takeGuess() {
	console.log(this.value)

	// Empty String Catcher
	// OR is ||
	if (this.value == "" || this.value.length <1 ) {
		return;
	}

	let currentGuess = this.value;

	// win / lose conditions
	if (!currentWord.includes(this.value)) {
		// LOSE
		console.log('wrong!');

		wrongLetterArray.push(this.value);
		wrongLetterList.textContent = wrongLetterArray.join(" ");

		// show on SVG
		document.querySelector(`.wrong${wrongGuesses}`).classList.add('show-piece');

		if (wrongGuesses >= 5) {
			// increment wrongGuesses
			showResetScreen();
		} else {
			wrongGuesses++;
		}
	} else {
		// the WINNING PATH
		let matchAgainst = currentWord.split("");
		let hintString = wordHint.textContent.split("");
	}
}

function showResetScreen() {
	// user has lost, reset stuff and start over
	console.log(`YOU HAVE LOST`);
	resetScreen.classList.add('show-piece');
}

function resetGame() {
	let gamePieces = Array.from(document.querySelectorAll('.show-piece'));
	gamePieces.forEach(piece => piece.classList.remove('.show-piece'));
	guessBox.value = "";
	wrongGuesses = 0;

	init();
}

// EVENT HANDLING
guessBox.addEventListener('keyup', takeGuess);
resetButton.addEventListener('click', resetGame);

init();


})();
