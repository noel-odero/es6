// Each cell in the board should be separated by a | character. and each row should be separated by a - character. Each character should have space around it. For example, the board below should be printed as:
// O | X |
function displayBoard(board, width){
    let boardString = "";
    for (let i = 0; i < board.length; i++){
        boardString += " " + board[i] + " ";
        if ((i + 1) % width === 0){
            boardString += "\n";
            if (i + 1 < board.length){
                for (let j = 0; j < width; j++){
                    boardString += "---";
                }
                boardString += "\n";
            }
        } else {
            boardString += "|";
        }
    }
    return boardString;
}

console.log(displayBoard(["O", "X", " ", " ", "X", " ", "X", "O", " "], 3));


