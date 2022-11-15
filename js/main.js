
// 1 These are the options for the slot

const items = ["🎩", "🏡", "😑", "🦄"];




const button =document.querySelector('#play')
button.addEventListener('click', play);

function getRandomSlotValues() {
    // is to randomly return
    // 'slot 1' 'slot 2' 'slot3' values "emojis"
    const randomItem = Math.floor(Math.random()*items.length);
    return items[randomItem]
}

function play (){
    console.log("button is working")

    //randomly generate a value for the 3 slots
    

    slotsValue.slot1 = getRandomSlotValues();
    slotsValue.slot2 = getRandomSlotValues();
    slotsValue.slot3 = getRandomSlotValues();

    if (slotsValue.slot1 === slotsValue.slot2 && slotsValue.slot1 === slotsValue.slot3) {
        alert("Jackpot! PLAYER WON $$$$$")
    } else {
        console.log('tries add, but nothing to the score')
    }
    //then update the  state (scores and tries) with that value


    // AT THE END OF EVERY CONTROLLER FUNCTION CALL RENDR
    render()
}

// define our state variable
// how would you define the score state
let slotsValue; // stores the players dial
let scores; // stores the scores
let winner; //

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
        slot1: 'X', // or any of the this array items = ["🎩", "🏡", "😑", "🦄"]; / depending on the value
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


    slotsValueEls.slot1.innerText = slotsValue.slot1
    slotsValueEls.slot2.innerText = slotsValue.slot2
    slotsValueEls.slot3.innerText = slotsValue.slot3
    
    // for (let key in slotValue) {
    //     slotsValueEls[key].innerText = slotsValue[key]


    // }

    // OR we can use the following notation:
    // scoresEls.player.innerText = scores.player;
    // scoresEls.tries.innerText= scores.tries;
}



// this part select a random number from the array




