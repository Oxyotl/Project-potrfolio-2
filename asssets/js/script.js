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

function runGame() {

}

// function generateRespond() {

// }

function checkAnswer() {

}

function incrementYourScore() {

}

function incrementPcScore() {

}

 function decreseTriesLeft() {

 }
