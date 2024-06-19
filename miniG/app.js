//1 track scores

let userScore = 0;
let compScore = 0;

//2 access the choices & other paremeters

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

//4 generate computer choice 2 -> modular
//rock, paper, scissors

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};
//6 and then update
const drawGame = () => {
    //console.log("game was draw.");
    msg.innerText = "Game Draw. Play again";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        //console.log("you win");
        msg.innerText =`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        //console.log("you lose");
        msg.innerText = `You lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
//4 userChoice
const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
//4 generate computer choice...will be coming from 2
const compChoice = genCompChoice();
console.log("comp choice =", compChoice);


//5 logic for fight between userChoice & compChoice
//Draw Game 
if(userChoice === compChoice){
    drawGame();
} else {
    let userWin = true;
    if(userChoice === "rock"){
        //paper, scissors
       userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
        //rock, scissors
        userWin = compChoice === "rock" ? true : false;
        
    } else {
        //rock, paper
        userWin = compChoice === "rock" ? false : true; 
    }

    //finally will show the winner
    showWinner(userWin, userChoice , compChoice);
}

};


//3 addes EventListener on the choices so that we could play game

choices.forEach((choice) => {
    //console.log(choice);
    choice.addEventListener("click",() => {
 const userChoice = choice.getAttribute("id");

    console.log ("choice was clicked", userChoice);
 playGame(userChoice);
    });
});
