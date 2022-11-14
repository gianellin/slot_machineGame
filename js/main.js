
// 1 These are the options for the slot

const items = ["🎩", "🏡", "😑", "🦄"];

// define our state variable

// how would you define the score state
// let playerScore = 0;
// let triesScore = 0;
const initialSlot= 'X';
let scores;

//The init function should be called when the page loads or when we want to rest the game.
init();

function init(){ //

   
    let scores = {
        player: 0,
        tries: 0,
        
    }
    
    let slots = {
        let slot1 :document.getElementsByName('.box1').innerHTML = initialSlot,
        let slot2: document.getElementsByName('.box2').innerHTML = initialSlot,
        let slot3 : document.getElementsByName('.box3').innerHTML = initialSlot
    };
}

//Initialize means score = 0, tries =0  and the slot1, slot2, slot3 equal 'X'






// this part select a random number from the array
const randomItem = Math.floor(Math.random()*items.length);
console.log(items[randomItem])

// when I want the sluts to take a value
// let slot1 = document.querySelector('.box1') = items(randomItem())
// let slot2 = document.querySelector('.box1') = items(randomItem())
// let slot3 = document.querySelector('.box1') = items(randomItem())

// rendr() {

// }