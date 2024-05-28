// EXERCISE 2: SNAKE WATER GUN

// Use JavaScript to create a game of Snake, Water, and Gun. 
// The game should ask you to enter 'S', 'W', or 'G'.
// The computer should be randomly be able to generate 'S', 'W', or 'G';  
// and Declare Win, Loss, or Draw using alert.
// Use confirm and prompt wherever necessary.

let playerScore = 0;
let cpuScore = 0;

let cpuGen = () => {
    let randInt = parseInt(Math.random() * 3);
    let cpuChoice;
    if (randInt === 0) {
        cpuChoice = 'S';
    } else if (randInt === 1) {
        cpuChoice = 'W';
    } else {
        cpuChoice = 'G';
    }
    return cpuChoice;
}

let playerChoice = () => {
    let choice = prompt("Snake, Water, or Gun? Enter 'S' for Snake, 'W' for Water, 'G' for Gun:");
    
    switch (choice) {
        case 'S':
        case 'W':
        case 'G':
            return choice;
        default:
            alert("Please enter one of 'S', 'W', or 'G'");
            return playerChoice();
    }
}

function result(playerW) {
    if (playerW === true) {
        playerScore++;
        alert(`You win! Score: player: ${playerScore} cpu: ${cpuScore}`);
    } else if (playerW === false) {
        cpuScore++;
        alert(`You lose! Score: player: ${playerScore} cpu: ${cpuScore}`);
    } else if (playerW === 'draw') {
        alert(`Draw! Score: player: ${playerScore} cpu: ${cpuScore}`);
    }

    if (confirm("Continue playing?")) {
        playGame();
    } else {
        alert(`GG! Final Score: player: ${playerScore} cpu: ${cpuScore}`);
    }
}

let playGame = () => {
    let cpu = cpuGen();
    let player = playerChoice();

    let playerW;

    switch (true) {
        // player win scenarios
        case (player === 'S' && cpu === 'W'):
            playerW = true;
            break;
        case (player === 'W' && cpu === 'G'):
            playerW = true;
            break;
        case (player === 'G' && cpu === 'S'):
            playerW = true;
            break;

        // player loss scenarios
        case (player === 'W' && cpu === 'S'):
            playerW = false;
            break;
        case (player === 'G' && cpu === 'W'):
            playerW = false;
            break;
        case (player === 'S' && cpu === 'G'):
            playerW = false;
            break;

        // draw scenario
        default:
            playerW = 'draw';
            break;
    }

    result(playerW);
}

document.querySelector('#playBtn').addEventListener("click", () => {
    playGame();
})
