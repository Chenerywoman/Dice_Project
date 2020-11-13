function randomNumber () {
    return Math.ceil(Math.random() * 6)
};

// let die =  document.getElementById("die")
// const roll  = document.getElementById("roll");
// const replay = document.getElementById("replay");

let totalScore = 0;

roll.addEventListener("click", () => {

    let go =  randomNumber();

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

    die.src = `../img/dice${go}.png`
    die.style.display = "block";
    rotating_die.style.display = "none";

    totalScore = totalScore + go;
    score.textContent = totalScore;

    if (go == 1){

        message.textContent = "Rolled 1. You lose!";
        roll.style.display  = "none";
        replay.style.display = "inline";
        die.style.display = "none";
        rotating_die.style.display = "block";
    
    } else if (totalScore >= 20) {

        message.textContent = "You win!";
        roll.style.display  = "none";
        replay.style.display = "inline";
        die.style.display = "none";
        rotating_die.style.display = "block";
    
    } else {
    
        message.textContent = "Roll again";

    }
})

replay.addEventListener("click", () =>{
    
    totalScore = 0;
    score.innerHTML = `${totalScore}`
    roll.style.display = "inline";
    message.innerHTML = "Roll the die to play."
    replay.style.display = "none";

})



