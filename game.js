var board = [
    '-', '-', '-', '-', '-', '-', '-', '-', '-'
]

// variables
var player = "X"

// print Board
function showBoard() {
    console.log(board[0], board[1], board[2])
    console.log(board[3], board[4], board[5])
    console.log(board[6], board[7], board[8])
}

// user move update
function changeBoard(pos, player) {
    if (board[pos] == '-') {
        board[pos] = player
        showBoard()

    }
    else {
        alert("Invalid Move")
    }

}

// function to flip the turns
function flipTurn() {
    if (player == "X")
        player = "O"
    else
        player = "X"
}


// function to check if give palyer wins the game or not
function checkWins(player) {
    // 1st row
    if (board[0] == player && board[1] == player && board[2] == player) {
        return true
    }
    // 2nd row
    if (board[3] == player && board[4] == player && board[5] == player) {
        return true
    }
    // 3rd row
    if (board[6] == player && board[7] == player && board[8] == player) {
        return true
    }
    // 1 col
    if (board[0] == player && board[3] == player && board[6] == player) {
        return true
    }
    // 2 col
    if (board[1] == player && board[4] == player && board[7] == player) {
        return true
    }
    // 2 col
    if (board[2] == player && board[5] == player && board[8] == player) {
        return true
    }
    // 1 diag
    if (board[0] == player && board[4] == player && board[8] == player) {
        return true
    }

    // 2 diag
    if (board[2] == player && board[4] == player && board[6] == player) {
        return true
    }

    return false

}

function checkDraw() {
    var a = checkWins("X")
    var b = checkWins("O")
    // check if no one is winning the game
    if (a == false && b == false) {
        // check if board is completely filled
        var count = 0
        for (var i = 0; i <= 8; i++) {
            if (board[i] == '-')
                count += 1
        }
        if (count == 0)
            return true



    }
    return false
}


// Main Game
while (true) {
    // conver pos into int
    let pos = prompt(player + " : Turn")
    pos = pos * 1

    changeBoard(pos, player)
    let temp = checkWins(player)
    // if wins
    if (temp == true) {
        alert("Congratulation " + player + " : You won the Game !")
        break;
    }
    // check if game is draw
    let d = checkDraw()
    if (d == true) {
        alert("Game is Draw")
        break;
    }
    flipTurn()



}
