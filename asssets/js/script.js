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
    let num1 = Math.floor(Math.random() * 5) + 1;
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
