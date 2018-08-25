// Psychic Game
// Variables    i    i    i    i    i    i    i    i    i    i    i    i    i    i    i    i    i
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var UserLetter = "";
var CompLetter = "";
var wins = 0;
var losses = 0;
var attempts = 9;
var guesses = [];

var i = Math.floor(Math.random() * 26);

CompLetter = letters[i];
console.log("compLetter="+CompLetter);

document.onkeyup = function(event) {
  var input = event.key;
  console.log("input="+input);
    event.which >= 65 && event.which <= 90 

        if (input === CompLetter) {
        wins++;
        console.log("wins="+wins);
        document.querySelector("#wins").innerHTML = wins;
        attempts = 9;
    }    
       
        if (attempts === 0) {
        console.log()
        losses ++;
        document.querySelector("#losses").innerHtml = losses;
        attempts = 9;
        document.querySelector("#attempts").innerHTML = attempts;
        }
    
    
       else  {
        attempts --;
        console.log("guess again="+attempts);
        document.querySelector("#attempts").innerHTML = attempts;
        console.log("this is the input"+input);
        guesses.push(input);
        console.log(guesses);
        
    }

        
    
    // else if (input !== compLetter && attempts > 1) {
    //     attempts--;
    //     document.querySelector("#attempts").innerHTML = attempts;
    
    // }
    // else {
        
    //     console.log("wrong guess");
    //     guesses++;
    //     console.log("guess"+guesses); 
    //     alert("guesses"+guesses);
    //     document.querySelector("#guesses").innerHTML = guesses;
    //     document.querySelector("#losses").innerHTML = losses;
    // }

    // if (attempts === 0) {
        // wins = 0;
        // losses = 0;
        // losses++;
        // attempts = 9;
        // guesses = [];
        // guesses = 0;
    // }


};
// if statement needs to refresh guesses left and guesses so far
// make another else if statement directly after your if statemnet
    // else if (input !=== compLetter && attempts is > 1) decrease attempt (attempts --)
    // .push() userletter value to guesses
    // set innerHTML of 'your guesses to far = guesses
// else statement should also refresh guesses left and your guesses so far
    //alert user to guess again


// if statement for winning
//else if statement for guessing wrong with more than 1 attempt left
// else if guessed wrong with less than 1 attempt left (they lose and guess another letter)