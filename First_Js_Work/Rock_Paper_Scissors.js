
//variables

const weapons = ["rock", "paper", "scissors"];
const playerWeapon = "'s weapon of choice is "; 
const tieGame = "It's a tie!";

function getHand() {
	return weapons[Math.floor(Math.random() * weapons.length)];
}

const player1 = {
	name: "Shawn",
	hand: getHand,
	Score: 0
}

const player2 = {
	name: "Matt",
	hand: getHand,
	Score: 0
}

const player1Wins = {
	rock : "scissors",
	paper : "rock",
	scissors : "paper"
}

//===============================================================================

//Loop until someone scores wins 3 times

 function playRound(player1, player2){

 	const player1Choice = player1.hand();
 	const player2Choice = player2.hand();
 	let winner = null;

 	console.log(player1.name + playerWeapon + player1Choice);
	console.log(player2.name + playerWeapon + player2Choice);

 	if (player1Choice === player2Choice) {
 		console.log(tieGame);
 	}
 	else if (player1Wins.player1Choice === player2Choice) {
 		winner = player1.name;
		player1.Score ++;
 	}
 	else {
 		winner = player2.name;
 		player2.Score ++;
 	}
 	console.log(winner + ' wins!');
 	return winner;
 }

 function playGame (player1, player2, until){

 	while (player1.Score < until && player2.Score < until) {

 		playRound(player1, player2);
 	}
 }

 playGame(player1, player2, 5);