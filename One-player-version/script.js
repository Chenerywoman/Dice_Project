function randomNumber () {
    return Math.ceil(Math.random() * 6)
};

let totalScore = 0;
const roll  = document.getElementById("roll");

roll.addEventListener("click", () => {

    let go =  randomNumber();

    document.getElementById("die").src = `../img/dice${go}.png`
    document.getElementById("die").style.display = "block";
    document.getElementById("die").style.visibility = "visible";

    totalScore = totalScore + go;
    document.getElementById("score").textContent = totalScore;

    if (go == 1){

        document.getElementById("message").textContent = "Rolled 1. You lose!";
        document.getElementById("roll").style.display  = "none";
        document.getElementById("replay").style.display = "inline";
    
    } else if (totalScore >= 20) {

        document.getElementById("message").textContent = "You win!";
        document.getElementById("roll").style.display  = "none";
        document.getElementById("replay").style.display = "inline";
    
    } else {
    
        document.getElementById("message").textContent = "Roll again";

    }
})

replay.addEventListener("click", () =>{
    
    totalScore = 0;
    document.getElementById("score").innerHTML = `${totalScore}`
    document.getElementById("roll").style.display = "inline";
    document.getElementById("message").innerHTML = "Roll the die to play."
    document.getElementById("die").style.visibility = "hidden";
    document.getElementById("replay").style.display = "none";

})



