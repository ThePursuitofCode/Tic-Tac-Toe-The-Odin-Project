const gameSpots = document.querySelectorAll(".gameSpot");
const player = document.getElementById('players');
const restartBtn = document.getElementById('restartBtn');


let turn = 0;

function Player(name, mark) {
    this.name = name;
    this.mark = mark;
}

const player1 = new Player("Player 1", "X");
const player2 = new Player("Player 2", "O");

gameSpots.forEach((spot) => {
    spot.addEventListener('click', (e) => {
        // if spot is empty, add mark to spot and update turn counter. Alternate player1 and player2 based on turn.
        if (spot.innerHTML === "") {
            if (turn % 2 === 0) {
                spot.innerHTML = player1.mark;
                turn++;
            } else {
                spot.innerHTML = player2.mark;
                turn++;
            }
        }
        checkForWinner();
    })
})

// checkForWinner and update the player variable to display the winner.
function checkForWinner() {
    // winning combinations for tic tac toe
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    // loop through winning combinations
    for (let i = 0; i < winningCombinations.length; i++) {
        // get the spots for the current combination
        const [a, b, c] = winningCombinations[i];
        // get the values of the spots
        const aValue = gameSpots[a].innerHTML;
        const bValue = gameSpots[b].innerHTML;
        const cValue = gameSpots[c].innerHTML;
        // if all three spots have the same value, then there is a winner
        if (aValue !== "" && aValue === bValue && aValue === cValue) {
            player.innerHTML = aValue + " is the winner!";
        }
    }
}

restartBtn.addEventListener('click', (e) => {
    gameSpots.forEach((spot) => {
        spot.innerHTML = "";
    }),
    player.innerHTML = "";
    turn = 0;
})
