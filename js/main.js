
// 1 These are the options for the slot

const items = ["🎩", "🏡", "😑", "🦄"];


// define our state variable

// how would you define the score state



let slotsValue; // stores the players dial
let scores; // stores the scores

//CACHED ELEMENTS
//The elements (HTML) we're going to update repeatedly
//when our state changes
const scoresEls ={
    player: document.querySelector('#p-score'),
    tries: document.querySelector('#t-score')
}

const slotsValueEls = {
    slot1: document.querySelector('#box1'),
    slot2: document.querySelector('#box2'),
    slot3: document.querySelector('#box3')
}



//The init function should be called when the page loads
// or when we want to reset the game.
init();

//init controller 
function init(){ // controller function is updating our state

   
    scores = {
        player: 0,
        tries: 0
    }
    
    slotsValue = {
        slot1: 'X',
        slot2: 'X',
        slot3: 'X'
    };

    

    render(); // take out state variables;
    // and represent visually on the view in some manor
    //slotsValue.slot1 , slotsValue.slot1 , slotsValue.slot1 will be represented by a emoji/string
    //AKA update the DOM
    // gets called at the end of every controller function
}

//Initialize means score = 0, tries =0  and the slot1, slot2, slot3 equal 'X'


function render (){

    //UPDATE THE DOM to visually represent 
    //our state variables

 
    for (let key in scores) {
        scoresEls[key].innerText = scores[key];
    }

    // for (let key in slotValue) {
    //     slotsValueEls[key].innerText = slotsValue[key]


    // }

    // OR we can use the following notation:
    // scoresEls.player.innerText = scores.player;
    // scoresEls.tries.innerText= scores.tries;
}



// this part select a random number from the array
const randomItem = Math.floor(Math.random()*items.length);
console.log(items[randomItem])

// when I want the sluts to take a value
// let slot1 = document.querySelector('.box1') = items(randomItem())
// let slot2 = document.querySelector('.box1') = items(randomItem())
// let slot3 = document.querySelector('.box1') = items(randomItem())

