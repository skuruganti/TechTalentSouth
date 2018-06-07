const player1 = "Shawn";
const player2 = "Matt";
let player1Score = 0;
let player2Score = 0;
const weapons = ["rock", "paper", "scissors"];

const playerWeapon = "'s weapon of choice is ";
const player2Wins = player2 + " wins!";
const player1Wins = player1 + " wins!";
const tieGame = "It's a tie!";

//===============================================================================

while (player1Score < 3 && player2Score < 3) {

  
	let player2Choice = weapons[parseInt(Math.random() * weapons.length) % 3];
	let player1Choice = weapons[parseInt(Math.random() * weapons.length) % 3];
  let player2Winning = (player2Choice === "rock" && player1Choice === "scissors") || (player2Choice === "paper" && player1Choice === "rock") || (player2Choice === "scissors" && player1Choice === "paper");
  let player1Winning = (player2Choice === "rock" && player1Choice === "paper") || (player2Choice === "paper" && player1Choice === "scissors") || (player2Choice == "scissors" && player1Choice === "rock");
  let tie = (player2Choice === "rock" && player1Choice === "rock") || (player2Choice == "paper" && player1Choice === "paper") || (player2Choice === "scissors" && player1Choice == "scissors");


	console.log(player1 + playerWeapon + player1Choice);
	console.log(player2 + playerWeapon + player2Choice);

if (player2Winning) {
  console.log(player2Wins);
  player2Score ++;
}
else if (player1Winning) {
  console.log(player1Wins);
  player1Score ++;
}
else {
  console.log(tieGame);
}

/*let x;
switch(x) {

  case player2Winning:
    console.log(player2Wins);
    player2Score ++;
    break;
  case player1Winning:
    console.log(player1Wins);
    player1Score ++;
    break;
  case tieGame:
    console.log(tieGame);
    break;
}*/

let currentScore = player1 + ": " + player1Score + " to " + player2 + ": " + player2Score + "\n";
console.log("The current score is " + currentScore);	

	if (player1Score === 3) {
		console.log(player1Wins + " the game!");
	}
	else if (player2Score ===3){
		console.log(player2Wins + " the match!");
	}
}