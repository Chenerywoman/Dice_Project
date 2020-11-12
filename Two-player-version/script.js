let new_game = document.getElementById("new_game");
let roll = document.getElementById("roll");
let hold = document.getElementById("hold");
let die = document.getElementById("die");
let winner = document.getElementById("winning_player");
let winner_message = document.getElementsByClassName("winner")[0];

let totalPlayerOne = 0;
let totalPlayerTwo = 0;
let currentPlayer = 1;

let randomNumber = () => {
    
    return Math.ceil(Math.random() * 6);

}

new_game.addEventListener("click", () => {

    roll.style.display = "block";
    roll.style.margin = "auto";
    hold.style.display = "block";
    hold.style.margin = "auto";
    new_game.style.display = "none";
    winner_message.style.visibility = "hidden";
    die.style.visibility = "hidden";

    totalPlayerOne = 0;
    document.getElementById("player1_score").innerHTML = totalPlayerOne;
    document.getElementById("current_player1").style.visibility = "hidden";

    totalPlayerTwo = 0;
    document.getElementById("player2_score").innerHTML = totalPlayerOne;
    document.getElementById("current_player2").style.visibility = "hidden";

    currentPlayer = 1;
   
});

roll.addEventListener("click", () => {
    let go = randomNumber();
    console.log(go)
    die.src = `../img/dice${go}.png`
    die.style.visibility = "visible";

    if (currentPlayer == 1){

        document.getElementById("current_player1").style.visibility = "visible";
        document.getElementById("current_player1").innerHTML = go;
        document.getElementById("current_player2").style.visibility = "hidden";
        totalPlayerOne = totalPlayerOne + go;
        document.getElementById("player1_score").innerHTML = totalPlayerOne;

        if (go == 1){
            winner.innerHTML = 2;
            winner_message.style.visibility = "visible";
            roll.style.display = "none";
            hold.style.display = "none";
            new_game.style.display = "inline";

        } else if (totalPlayerOne >= 20) {
            winner.innerHTML = currentPlayer;
            winner_message.style.visibility = "visible";
            roll.style.display = "none";
            hold.style.display = "none";
            new_game.style.display = "inline";
        }

        currentPlayer = 2;
        document.getElementById("player2_holding").style.visibility = "hidden";

     } else if (currentPlayer == 2){

        document.getElementById("current_player2").style.visibility = "visible";
        document.getElementById("current_player2").innerHTML = go;
        document.getElementById("current_player1").style.visibility = "hidden";
        totalPlayerTwo = totalPlayerTwo + go;
        document.getElementById("player2_score").innerHTML = totalPlayerTwo;

        if (go == 1){
            winner.innerHTML = 1;
            winner_message.style.visibility = "visible";
            roll.style.display = "none";
            hold.style.display = "none";
            new_game.style.display = "inline";

        } else if (totalPlayerTwo >= 20) {
            winner.innerHTML = currentPlayer;
            winner_message.style.visibility = "visible";
            roll.style.display = "none";
            hold.style.display = "none";
            new_game.style.display = "inline";
        }

        currentPlayer = 1;
        document.getElementById("player1_holding").style.visibility = "hidden";

    };

});

hold.addEventListener("click", () => {

    if (currentPlayer == 1) {
        document.getElementById("player1_holding").style.visibility = "visible";
        currentPlayer = 2;

    } else {
        document.getElementById("player2_holding").style.visibility = "visible";
        currentPlayer = 1;
    };


})

