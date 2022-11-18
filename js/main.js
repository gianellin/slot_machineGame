// SLOT MACHINE GAME

const items = ["🎩", "🏡", "😑", "🦄"];


const button =document.querySelector('#play')
button.addEventListener('click', play);

const button2 =document.querySelector('#reset')
button2.addEventListener('click', init);


// Generates a random value
// 'slot 1' 'slot 2' 'slot3' with randon values = out the "emojis" array.
function getRandomSlotValues() {
    
    const randomItem = Math.floor(Math.random()*items.length);
    return items[randomItem]
}


//function that stops the game
function stop() {
    if (scores.tries === 10 ) {
        document.querySelector('#play').disabled = true;
        button.style.background = "grey";
        scores.winner = "You have run out of tries. Start Over!"
    } 
}


// variable with audio Audio
const x = document.getElementById("myAudio"); 
// function that plays the audio
function playAudio() { 
  x.play(); 
} 

// controller function
function play (){
    console.log("button is working")

    //randomly generate a value for the 3 slots 
    slotsValue.slot1 = getRandomSlotValues();
    slotsValue.slot2 = getRandomSlotValues();
    slotsValue.slot3 = getRandomSlotValues();


    // Place the loosing and winning condition
    //then update the  state (scores and tries) with that value
    if (slotsValue.slot1 === slotsValue.slot2 && slotsValue.slot1 === slotsValue.slot3) {
        scores.player +=1;
        scores.tries +=1;
        scores.winner = 'Jackpot! You won the game!';
        } else { 
            scores.tries +=1;
            console.log('You lost, try again!')
            scores.winner = "Try again!"
            }

    playAudio()
    stop()
    
    // AT THE END OF EVERY CONTROLLER FUNCTION CALL RENDR

    render()

}

// define our state variable
// how would you define the score state
let slotsValue; // stores the players dial
let scores; // stores the scores

//CACHED ELEMENTS
//The elements (HTML) we're going to update repeatedly
//when our state changes

const scoresEls = {
    player: document.querySelector('#p-score'),
    tries: document.querySelector('#t-score'),
    winner: document.querySelector('#winner')
}

const slotsValueEls = {
    slot1: document.querySelector('#box1'),
    slot2: document.querySelector('#box2'),
    slot3: document.querySelector('#box3')
}


//The init function should be called when the page loads
// or when we want to reset the game.
//Initialize means score = 0, tries =0  and the slot1, slot2, slot3 equal 'X'

init();
//init controller 
function init(){ // controller function is updating our state

   
    scores = {
        player: 0,
        tries: 0,
        winner:'',
    }
    
    slotsValue = {
        slot1: 'X', // or any of the this array items = ["🎩", "🏡", "😑", "🦄"]; / depending on the value
        slot2: 'X',
        slot3: 'X'
    };

    document.querySelector('#play').disabled = false;
    button.style.background = "rgb(216, 16, 16)";

    render(); 
    // take out state variables;
    // and represent visually on the view in some manner
    //slotsValue.slot1 , slotsValue.slot1 , slotsValue.slot1 will be represented by a emoji/string
    //AKA update the DOM
   
}


function render (){

    //UPDATE THE DOM to visually represent 
    //our state variables
    
    for (let key in scores) {
        scoresEls[key].innerText = scores[key];
    }

    // numbersEls.message.innerText = numbers.message

    slotsValueEls.slot1.innerText = slotsValue.slot1
    slotsValueEls.slot2.innerText = slotsValue.slot2
    slotsValueEls.slot3.innerText = slotsValue.slot3

    
}






