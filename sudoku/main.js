const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const createSudoku = (size = 1) => {
    const board = []
    for(let i = 0; i < size; i++) {
        board.push(new Array())
        for(let j = 0; j < size; j++){
            board[i][j] = Math.round(Math.random() * 9)
        }
    }
    return check(board, size)
}

// let checkCount = 0

const check = (board, size) => {
    
    for(let i = 0; i < size; i++){
        for(let j = 0; j < size; j++) {
            if(board[i][i] === board[j][j]){
                createSudoku(size)
            }else {
                return board
}
        }
    }
}

console.log(createSudoku(9))

// console.log(checkCount)

// if(board[i][j] === board[i][g] || board[i][j] === board[g][j]){
//     createSudoku(size)
// }else {
//     return board
// }