(()=> { console.log("hangman script initiated.")	

// VARIABLES
const words = ["blue", "orange", "yellow", "magenta", "violet"];

let initButton = document.querySelector('button');

let currentWord = null,
	wordHint = document.querySelector('.hint-string'),
	guessBox = document.querySelector('.user-guess');

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

	// Empty String Catcher
	// OR is ||
	if (this.value == "" || this.value.length <1 ) {
		return;
	}	
}

// EVENT HANDLING
initButton.addEventListener('keyup', takeGuess);

init();

})();