let result = document.querySelector("#Result")
function computerChoice() {
    const p = Math.random()*10;
    const req = p%3;
    if(req == 0){
        return "Rock"
    }else if (req == 1) {
        return "Paper"
    }
    return "Scissor";
}
function Result(playerSelection,computerChoice) {
    if (playerSelection === computerChoice) {
        return {Winner : "No_One" , Loser : "No_One"};
    }
    else if(playerSelection == "Rock"){
        if(computerChoice == "Paper"){
            return {Winner : "Computer" , Loser : "User"}
        }
        else{
            return {Winner : "User" , Loser : "Computer"};
        }
    }
    else if(playerSelection == "Paper"){
        if(computerChoice == "Scissor"){
            return {Winner : "Computer" , Loser : "User"}
        }
        else{
            return {Winner : "User" , Loser : "Computer"};
        }
    }
    else if(playerSelection == "Scissor"){
        if(computerChoice == "Rock"){
            return {Winner : "Computer" , Loser : "User"}
        }
        else{
            return {Winner : "User" , Loser : "Computer"};
        }
    }
}
function playGame() {
    let UserScore = 0;
    let Computer = 0;
    const body = document.querySelector('body')

    for (let index = 0; index < 5; index++) {
    
        const playerSelection  = prompt("Enter Your Choice");
        
        
        result.innerText = result.innerText.concat("\nPlayer: "+playerSelection+" ");
        const computer = computerChoice();
        result.innerText = result.innerText.concat("\nComputer: "+computer+" ");
        const WinnerObject = Result(playerSelection,computer)
        if(WinnerObject.Winner == "User"){
            result.innerText = result.innerText.concat("\nWinner : User");
          
            UserScore++;
        }else if(WinnerObject.Winner == "Computer"){

            result.innerText = result.innerText.concat("\nWinner : Computer");
            Computer++;
        }
    }
    return (UserScore>Computer) ? "User" : "Computer";

}

const UltimateResult = playGame();

result.innerText = result.innerText.concat("\n Ultimate Winner is : "  + UltimateResult)