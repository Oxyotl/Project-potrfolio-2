/**
 * Declaration of constants and possible choices
 */
const buttons = document.getElementsByClassName("btn");
const playerScore = document.getElementById("y-score");
const computerScore = document.getElementById("c-score");
const choices = ["rock", "paper", "scissors", "lizard", "spock"];





document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){ 
        button.addEventListener("click", function(){
            if (this.getElementsByClassName("btn") === "submit") {
                alert("you clicked Submit!")
            } else {
                let gameType = this.getElementsByClassName("btn");
                alert(`You clicked ${gameType}`)
            }    
        })
    }
})
/**
 * The main part of the game, called after the user's answer has been processed
 */
function runGame() {
    let num1 = Math.floor(Math.random() * 5);
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
