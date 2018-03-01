(()=> { console.log("hangman script initiated.")

// VARIABLES
const words = ["blue", "orange", "yellow", "magenta", "violet"];

let initButton = document.querySelector('button');

let currentWord = null,
	wordHint = document.querySelector('.hint-string'),
	guessBox = document.querySelector('.user-guess'),
	wrongGuesses = 0,
	reserScreen = document.querySelector('rest-screen'),
	resetButton = resetScreen.querySelector('button');

	function restGame(){
		debugger;
		//reset the game and pick a new word
		let gamePieces = Array.from(document.querySelectorAll('.show-piece'));
		gamePieces.forEach(piece => piece.classList)
	}


	function showResetScreen(){
		//user has lost, reset stuff and start over
		debugger;
		console.log('you lose, loser!');
	}
// FUNCTIONS
function init() {
	// look at MDN -> the Math object
	currentWord =
	words[Math.floor(Math.random()*words.length)];

	// map takes existing information in an array and transforms it
	// fills hint with underscores
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

	//set up the win and lose paths (if/else)
	if(!currentWord.includes(this.value)){
		console.log('invalid letter!');
		document.querySelector(`.wrong${wrongGuesses}`).classList.add('show-piece');
		//losing path
		//compare the letter guess to the word to see if it's in there
		if (wrongGuesses >=5){

		} else{
			showResetScreen();

		}

wrongGuesses++;

}

// EVENT HANDLING
initButton.addEventListener('keyup', takeGuess);

init();

})();
