/*~~~~~~ constants ~~~~~~*/
const ROW_TOTAL = 3;
const COLUMN_TOTAL = 3;


/*~~~~~~ app's state (variables) ~~~~~~*/
let currentPlayer;
let boardContents = [[], [], []];
let row = [];
let message = "";


  
/*~~~~~~ cached element references ~~~~~~*/
const boardCells = document.getElementsByClassName('cell');
const button = document.getElementById('button');
const messageBanner = document.getElementById('message-banner');



/*~~~~~~ event listeners ~~~~~~*/
document.getElementById('board').addEventListener('click', play);
document.getElementById('button').addEventListener('click', (resetBoard));
  
  
/*~~~~~~ functions ~~~~~~*/
gameInitializer();



function changePlayer() {
    currentPlayer === 'X' ? currentPlayer = 'O' : currentPlayer = 'X';
}



function gameInitializer() {
    currentPlayer = 'X';
    messageBanner.textContent = 'Good Luck!!!'
}

function play() {
    let square = event.target.id;
    if (event.target.textContent === '') {
        event.target.textContent = currentPlayer;
        changePlayer();
    } else {
        message = 'Nice try!';
    }

    gameStateCheck();
    messageBanner.textContent = message;
}

function gameStateCheck() {
    let cellCounter = 0;
    for (let rowI = 0; rowI < ROW_TOTAL; rowI++) {
        for (let columnI = 0; columnI < COLUMN_TOTAL; columnI++) {
            boardContents[rowI][columnI] = boardCells[cellCounter].textContent;
            cellCounter++
        }
    }


    // Check each ROW
    for (let rowI = 0; rowI < ROW_TOTAL; rowI++) {
        if ((boardContents[rowI].join('') === 'XXX') ||
            (boardContents[rowI].join('') === 'OOO')) {

                message = 'Winner';
            break;
        }
    }
    // Check each COLUMN
    for (let columnI = 0; columnI < COLUMN_TOTAL; columnI++) {
        if ((boardContents[0][columnI] + boardContents[1][columnI] + boardContents[2][columnI] === 'XXX') ||
        (boardContents[0][columnI] + boardContents[1][columnI] + boardContents[2][columnI] === 'OOO')) {
            message = 'Winner';
            break;
        }
    }
    // Check DIAGONALS

        if ((boardContents[0][0] + boardContents[1][1] + boardContents[2][2] === 'XXX') ||
            (boardContents[0][0] + boardContents[1][1] + boardContents[2][2] === 'OOO')) {
                message = 'Winner'; 
        } else if  ((boardContents[2][0] + boardContents[1][1] + boardContents[0][2] === 'XXX') ||
                    (boardContents[2][0] + boardContents[1][1] + boardContents[0][2] === 'OOO')) {
                        message = 'Winner'; 
        }


}

/////////////////////////////////////////////////////////////////////////////////////////

function resetBoard() {

    document.getElementsByClassName('cells')   ('textContent', 'B');
    console.log(document.getElementsByClassName('cell').textContent)
}