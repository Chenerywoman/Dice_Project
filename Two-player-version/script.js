let new_game = document.getElementById("new_game");
let roll = document.getElementById("roll");
let hold = document.getElementById("hold");
let die = document.getElementById("die");

let totalPlayerOne = 0;
let totalPlayerTwo = 0;
let currentPlayer = 1;

let randomNumber = () => {
    
    return Math.ceil(Math.random() * 6);

}

new_game.style.borderRadius = "10%";

new_game.addEventListener("click", () => {

    roll.style.display = "inline";
    hold.style.display = "inline";
    roll.style.borderRadius = "10%";
    hold.style.borderRadius = "10%";
    new_game.style.display = "none";
    die.style.visibility = "hidden";

    totalPlayerOne = 0;
    document.getElementById("player1_score").innerHTML = totalPlayerOne;
    document.getElementById("current_player1").style.visibility = "hidden";
    document.getElementById("player1").querySelector(".winner").style.display = "none";

    totalPlayerTwo = 0;
    document.getElementById("player2_score").innerHTML = totalPlayerTwo;
    document.getElementById("current_player2").style.visibility = "hidden";
    document.getElementById("player2").querySelector(".winner").style.display = "none";

    currentPlayer = 1;
   
});

roll.addEventListener("click", () => {
    let go = randomNumber();
    console.log(go);
    console.log(`player ${currentPlayer} is playing`)
    die.src = `../img/dice${go}.png`
    die.style.visibility = "visible";

    switch(go){
        case 1: die.style.filter = "hue-rotate(90deg)";
        break; 
        case 2: die.style.filter = "hue-rotate(180deg)";
        break;
        case 3: die.style.filter = "hue-rotate(270deg)";
        break;
        case 4: die.style.filter = "hue-rotate(360deg)";
        break;
        case 5: die.style.filter = "hue-rotate(150deg)";
        break;
        case 6: die.style.filter = "hue-rotate(300deg)"
    }

    switch(go){
        case 1: die.style.transform = "rotate(15deg)";
        break; 
        case 2: die.style.transform = "rotate(30deg)";
        break;
        case 3: die.style.transform = "rotate(45deg)";
        break;
        case 4: die.style.transform = "rotate(60deg)";
        break;
        case 5: die.style.transform = "rotate(75deg)";
        break;
        case 6: die.style.transform = "rotate(90deg)"
    }

    if (currentPlayer == 1){

        document.getElementById("current_player1").style.visibility = "visible";
        document.getElementById("current_player1").innerHTML = go;
        document.getElementById("current_player2").style.visibility = "hidden";
        totalPlayerOne = totalPlayerOne + go;
        document.getElementById("player1_score").innerHTML = totalPlayerOne;

        if (go == 1){
            document.getElementById("player2").querySelector(".winner").style.display = "inline";
            document.getElementById("player2").querySelector(".holding").style.display = "none";
            roll.style.display = "none";
            hold.style.display = "none";
            new_game.style.display = "inline";

        } else if (totalPlayerOne >= 20) {
            document.getElementById("player1").querySelector(".winner").style.display = "inline";
            roll.style.display = "none";
            hold.style.display = "none";
            new_game.style.display = "inline";
        }

        currentPlayer = 2;
        document.getElementById("player2").querySelector(".holding").style.display = "none";

     } else if (currentPlayer == 2){

        document.getElementById("current_player2").style.visibility = "visible";
        document.getElementById("current_player2").innerHTML = go;
        document.getElementById("current_player1").style.visibility = "hidden";
        totalPlayerTwo = totalPlayerTwo + go;
        document.getElementById("player2_score").innerHTML = totalPlayerTwo;

        if (go == 1){
            document.getElementById("player1").querySelector(".winner").style.display = "inline";
            document.getElementById("player1").querySelector(".holding").style.display = "none";
            winner_message.style.visibility = "visible";
            roll.style.display = "none";
            hold.style.display = "none";
            new_game.style.display = "inline";

        } else if (totalPlayerTwo >= 20) {
            document.getElementById("player2").querySelector(".winner").style.display = "inline";
            roll.style.display = "none";
            hold.style.display = "none";
            new_game.style.display = "inline";
        }

        currentPlayer = 1;
        document.getElementById("player1").querySelector(".holding").style.display = "none";

    };

});

hold.addEventListener("click", () => {

    if (currentPlayer == 1) {
        document.getElementById("player1").querySelector(".holding").style.display = "inline";
        currentPlayer = 2;

    } else {
        document.getElementById("player2").querySelector(".holding").style.display = "inline";
        currentPlayer = 1;
    };


})

