function game() {
	var challenge = window.prompt('Pick a number between 5 and 500');
	var guess = Math.ceil(Math.random()*100);
	var answer = true;
	console.log(guess);
	if (challenge == null) {
		answer = false;
	}
	if (typeof challenge != 'number') {
		prompt('You must guess a number! Pick again.');
		}
	while (answer){
		
		if (challenge == guess){
			confirm('You got it! If you want to pick again refresh the page!');
			answer = false;
		}
		else if (challenge < guess) {
			challenge = prompt('Too low! Guess again?');
		}

		else {
			challenge = prompt('Too high! Guess again?');
		}
	}
}
game();
