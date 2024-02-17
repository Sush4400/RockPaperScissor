let userScore = 0;
let compScore = 0;
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");



const genCompChoice = () => {
    let options = ["rock", 'paper', 'scissor'];
    let randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You win");
        msg.innerText = `You win ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = 'green';
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You lose");
        msg.innerText = `You lose ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = 'red';
    }
}

const drawGame = () => {
    console.log("Game is Draw");
    msg.innerText = 'Draw';
    msg.style.backgroundColor = 'black';
}

const playGame = (userChoice) => {
    console.log("user choice: ", userChoice);
    // generate computer choice
    const compChoice = genCompChoice();
    console.log("computer choice: ", compChoice);
    if(userChoice === compChoice){
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === 'rock'){
            // paper, scissor
            userWin = compChoice === 'paper' ? false : true;
        } else if (userChoice === 'paper') {
            // rock, scissor
            userWin = compChoice === 'rock' ? true : false;
        } else {
            // rock, paper
            userWin = compChoice === 'paper' ? true : false;
        }
        showWinner(userWin, userChoice, compChoice);
    }

};


const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
    console.log(choice)
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked "+userChoice);
        playGame(userChoice);
    })
});

