let playerScores = 0;
let computerScores = 0;

function getComputerSelection() {
    const options = ['rock', 'paper', 'scissor'];
    const selection = options[Math.floor(Math.random() * 3)];
    return selection;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'Tie!';
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissor') {
        return 'You win! Rock beats Scissor';
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You win! Paper beats Rock';
    }
    else if (playerSelection === 'scissor' && computerSelection === 'paper') {
        return 'You win! Scissor beats Paper';
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You lose! Paper beat Rock';
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissor') {
        return 'You lose! Scissor beats Paper';
    }
    else if (playerSelection ==='scissor' && computerSelection === 'rock') {
        return 'You lose! Rock beats Scissor';
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Ready!');
        const computerSelection = getComputerSelection();
        result = playRound(playerSelection.toLowerCase(), computerSelection);
        console.log(computerSelection);
        console.log(result);

        if (result === 'You win! Rock beats Scissor' || 
        result === 'You win! Paper beats Rock' || 
        result === 'You win! Scissor beats Paper') {
            playerScores++;
        }
        else if (result === 'You lose! Paper beat Rock' || 
        result === 'You lose! Scissor beats Paper' || 
        result === 'You lose! Rock beats Scissor') {
            computerScores++;
        }
    }
    if (playerScores > computerScores) {
        return 'Best of 5: Player Won!';
    }
    else if (playerScores < computerScores) {
        return 'Best of 5: Computer Won!';
    }
    else {
        return 'It\'s a Tie!';
    }
}
 console.log(game());