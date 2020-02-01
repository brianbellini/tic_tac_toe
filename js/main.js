/*~~~~~~ constants ~~~~~~*/
const ROW_TOTAL = 3;
const COLUMN_TOTAL = 3;


/*~~~~~~ app's state (variables) ~~~~~~*/
let currentPlayer;
let boardContents = [[], [], []];
let row = [];


  
/*~~~~~~ cached element references ~~~~~~*/
const boardCells = document.getElementsByClassName('cell');
const button = document.getElementById('reset-button');
const messageBanner = document.getElementById('message-banner');



/*~~~~~~ event listeners ~~~~~~*/
document.getElementById('board').addEventListener('click', play);
document.getElementById('reset-button').addEventListener('click', gameInitializer);
  
  
/*~~~~~~ functions ~~~~~~*/
gameInitializer();

function changePlayer() {
    currentPlayer === 'X' ? currentPlayer = 'O' : currentPlayer = 'X';
}

function gameInitializer() {
    currentPlayer = 'X';
}

function play() {
    let square = event.target.id;
    event.target.textContent = currentPlayer
    changePlayer();

    gameStateCheck();
}

function gameStateCheck() {
    let cellCounter = 0;
    for (let rowI = 0; rowI < ROW_TOTAL; rowI++) {
        // console.log(boardCells[cellCounter].textContent);
        for (let columnI = 0; columnI < COLUMN_TOTAL; columnI++) {
            // console.log(boardCells[cellCounter].textContent);
            boardContents[rowI][columnI] = boardCells[cellCounter].textContent;
            cellCounter++
        }
        




    }
    console.log(boardContents);
}

function render() {

}