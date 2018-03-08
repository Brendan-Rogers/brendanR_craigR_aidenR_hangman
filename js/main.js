(()=> { console.log("hangman script initiated.")


// VARIABLES
const words = ["black keys", "beach fossils", "screaming females", "fleet foxes", "interpol", "kanye", "yung lean"];

let initButton = document.querySelector('button');

let currentWord = null,
	wordHint = document.querySelector('.hint-string'),
	guessBox = document.querySelector('.user-guess'),
	resetScreen = document.querySelector('.reset-screen'),
	resetButton = resetScreen.querySelector('button'),
	wrongLetterList = document.querySelector('.wrong-letters'),
	wrongLetterArray = [],
	wrongGuesses = 0,
	correctGuesses = 0;

// FUNCTIONS
function init() {
	// look at MDN -> the Math object
	currentWord =
	words[Math.floor(Math.random()*words.length)];

	// map takes existing information in an array and transforms it
	// fills hint with udnerscores
	wordHint.textContext = currentWord.split("").map(letter => letter = "__").join(" ");

	// featured below: template string
	console.log(`Guess this word: ${currentWord}. It's at ${words.indexOf(currentWord)}. Good Luck!`);
}

function takeGuess() {
	console.log(this.value)


	let currentGuess = this.value

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
			showResetScreen("you lose");
		} else {
			wrongGuesses++;
		}

	} else{
//this else meatches the if on line 40 => this will be the winning path
let matchAgainst = currentWord.split("");
var hintString = wordHint.textContent.split("");

matchAgainst.forEach((letter, index) => {
	if (letter === currentGuess) {
		hintString[index] =currentGuess;
		correctGuesses++; //make sure to track correct guesses
	}

});

wordHint.textContent = ""; //make the hint on the screen be Empty
wordHint.textContent = hintString.join(" ");

if (correctGuesses === currentWord.length){
	showResetScreen("You win");
}
}


	// Empty String Catcher
	// OR is ||
	if (this.value == "" || this.value.length <1 ) {
		return;
	}
}

function showResetScreen(message) {
	// user has lost, reset stuff and start over
	console.log(`YOU HAVE LOST`);
	resetScreen.classList.add('show-piece');
	resetScreen.querySelector('h3').textContent = message;
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
