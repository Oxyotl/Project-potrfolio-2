/**
 * Declaration of constants and possible choices
 */
const buttons = document.getElementsByClassName("btn");
const playerScore = document.getElementById("y-score");
const computerScore = document.getElementById("c-score");
const choices = ["rock", "paper", "scissors", "lizard", "spock"];





// document.addEventListener("DOMContentLoaded", function() {
//     let buttons = document.getElementsByTagName("button");

for (let button of buttons) {
    button.addEventListener("click", function () {
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice);
    }); 
}
// if (this.getElementsByClassName("btn") === "submit") {
//     alert("you clicked Submit!")
//             } else {
//                 let gameType = this.getElementsByClassName("btn");
//                 alert(`You clicked ${gameType}`)
//             }    
//         })
//     }
// })
/**
 * The main part of the game, accepts the data-choice value of the selected button
 */
function playGame(playerChoice) {
    
    let computerChoice = Math.floor(Math.random() * 3)

    let result = checkWinner(choices[computerchoice], choices[playerChoice]);

    PaymentRequestUpdateEventScores(result);
}



// function generateRespond() {

// }

function checkAnswer() {

}

function incrementYourScore() {

}

function incrementPcScore() {

}

function decreseMovesLeft() {

}