console.log("up and running!"); //testing log


var cards = ['queen','queen','king','king'];
var cardsInPlay = [];
var cardOne = cards[0]; //store 1st item in array:index 0:can test different variables 
var cardTwo = cards[2]; //store 3rd item in array:index 2:can test different variables 


cardsInPlay.push(cardOne);
console.log('User flipped Queen');


cardsInPlay.push(cardTwo);
console.log('User flipped King');



if(cardsInPlay.length === 2){
    if(cardsInPlay[0] === cardsInPlay[1])
        alert('You found a match!');
    else{
        alert('Sorry, try again.');
    }
} //end brackett for initial if statement
