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
const playerSelection  = prompt("Enter Your Choice");
const computer = computerChoice();
console.log("User Chose : " + playerSelection)
console.log("Computer Chose : "+ computer)
const WinnerObject = Result(playerSelection,computer)
console.log("Winner : "+WinnerObject.Winner + " and Loser : "+ WinnerObject.Loser);
console.log(Result(playerSelection,computer));
