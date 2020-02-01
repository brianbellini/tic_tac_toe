/*~~~~~~ constants ~~~~~~*/
// const WORDS = [
//     'DEVELOPER', 'ENGINEER', 'NODE', 'JAVASCRIPT',
//     'CODING', 'HTML', 'BACK END', 'GUI', 'BOOLEAN',
//     'REACT', 'FUNCTION', 'COMPUTER SCIENCE',
//     'SEPARATION OF CONCERNS'
//   ];
//   const WRONG_GUESS_HUNG_COUNT = 6;
//   const SPRITE_WIDTH = 11.25;



/*~~~~~~ app's state (variables) ~~~~~~*/
let currentPlayer;
let boardContents =  ['', '', '', '', '', '', '', '', '',];

  
/*~~~~~~ cached element references ~~~~~~*/
const board = document.getElementById('board');
const button = document.getElementById('reset-button');
const messageBanner = document.getElementById('message-banner');



/*~~~~~~ event listeners ~~~~~~*/
document.getElementById('board').addEventListener('click', squareClicked);
document.getElementById('reset-button').addEventListener('click', gameInitializer);
  
  
/*~~~~~~ functions ~~~~~~*/

function squareClicked(event) {
    let square = event.target.textContent;
    console.log(square);
}

function changePlayer() {
    return (currentPlayer === 'X') ? 'O' : 'X';
}

function gameInitializer() {
    currentPlayer = 'X';

}

function play() {



}

function render() {
    for (cell in boardContents) {

    }
}