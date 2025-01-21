let favMovie="Avtar";

let guess= prompt("guess your favorite movie");
while((guess!= favMovie) && (guess != "quit")){
    if((guess === "quit")) {
        console.log("you quit the game");
        break;

    } 
    guess = prompt("worng guess. please try again");
}

if(guess == favMovie){
    console.log("congrats!!");
}




