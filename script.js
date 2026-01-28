let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#msg");
const userScoreD = document.getElementById("user-score");
const compScoreD = document.getElementById("comp-score");



const genCompChoice = () =>{
    let options = ["rock" , "paper" , "scissor"];
  const index =  Math.floor( Math.random() * 3);
  return options[index];
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
       message.innerHTML = `You Win!! your ${userChoice} beats ${compChoice} `
       message.style.backgroundColor = "green";
       userScore++;
       userScoreD.innerHTML = userScore;

    
    }else{
        compScore++;
        message.innerHTML = `You lose,  Computer's ${compChoice} beats your ${userChoice}`;
        message.style.backgroundColor = "red";
        compScoreD.innerHTML = compScore;
    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
})

const drawGame = () =>{
    message.innerHTML = "Game was a draw"
    message.style.backgroundColor = "blue";
}
const playGame = (userChoice) =>{
    console.log("uset choice" , userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice" , compChoice);

    if(userChoice == compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice == "rock"){
            userWin = compChoice === "paper" ? false : true;
            
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        }else{
            userWin = compChoice ==="rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

}