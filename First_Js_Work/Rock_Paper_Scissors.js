
//variables

const player1 = "Shawn";
const player2 = "Matt";

let   player1Score = 0;
let   player2Score = 0;

const weapons = ["rock", "paper", "scissors"];
const playerWeapon = "'s weapon of choice is "; 

const player1Wins = player1 + " wins";
const player2Wins = player2 + " wins";
const tieGame = "It's a tie!";

//===============================================================================

//Loop until someone scores wins 3 times
while (player1Score < 3 && player2Score < 3) {

	let player1Choice = weapons[parseInt(Math.random() * weapons.length) % 3];
	let player2Choice = weapons[parseInt(Math.random() * weapons.length) % 3];

	let player1Winning = (player2Choice === "rock" && player1Choice === "paper") || (player2Choice === "paper" && player1Choice === "scissors") || (player2Choice === "scissors" && player1Choice === "rock");
	let player2Winning = (player2Choice === "rock" && player1Choice === "scissors") || (player2Choice === "paper" && player1Choice === "rock") || (player2Choice === "scissors" && player1Choice === "paper");

	console.log(player1 + playerWeapon + player1Choice);
	console.log(player2 + playerWeapon + player2Choice);

	let x = true;
	switch(x) {

		case player1Winning:
			console.log(player1Wins);
			player1Score ++;
			break;
		case player2Winning:
			console.log(player2Wins);
			player2Score ++;
			break;
		default:
			console.log(tieGame);
	}

let currentScore = player1 + ": " + player1Score + " to " + player2 + ": " + player2Score + "\n";
console.log("The current score is " + currentScore);	

	if (player1Score === 3) {
		console.log(player1Wins + " the match!");
	}
	else if (player2Score ===3){
		console.log(player2Wins + " the match!");
	}
}