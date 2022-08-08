// Goal have as little global code as possible!

// Rule: If you need ONE of something (gameBoard, displayController) use a module.
// Rule: If you need TWO+ of something (players), create them with factories.

// Create a factory function object for the players

// Create a factory function to control the flow of the game.

// Create a function that allows players to add marks to a specific spot on the board. Don't allow players to play in spots already taken.

// Build logic that checks if the game is over. Should check if 3 in a row and a tie. Display who the winner is on screen.

// Add buttons for starting and restarting the game.

// (Optional)
// Build an AI so players can play against the computer.
// - After player starts, AI chooses a random legal move.
// - Possible to make an unbeatable AI by using the minimax algorithm.

const gameSpots = document.querySelectorAll(".gameSpot");

gameSpots.forEach((gameSpot) => {
    gameSpot.addEventListener('click', (e) => {
        if(e.target.textContent == ""){
            console.log(e)
            let clickedSpot = e
            gameController.playRound(clickedSpot)
        } else if(e.target.textContent != ""){
            return
        }
    })
})

const gameBoard = (() =>{
    const board = ["", "", "", "", "", "", "", "", ""]; // 9 board tiles

})

const displayController = (() => {

    const updateGameBoard = () => {

    }

    const setResultMessage = ((winner) => {

    })
    return { setResultMessage, } // Acts as a way to export out the function factory.
})


const gameController = (() =>{

    const playRound = (boardIndex) => {
        
    }

    const checkWinner = (boardIndex) => {
        const winConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        return winConditions
    }

    return { playRound, }
})


