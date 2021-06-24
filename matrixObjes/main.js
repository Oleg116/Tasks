const createMatrix = (size = 4) => {
    let matrix = [];
    for (let i = 0; i < size; i++) {
        matrix.push(new Array());
    }
    for (let j = 0; j < matrix.length; j++) {
        matrix[j] = new Array();
    }

    for(let q = 0; q < matrix.length; q++) {
        for (let a = 0; a < size; a++) {
            matrix[q].push(new Object());
            matrix[q].forEach(item => item.index = q)
            
        }        
    }

    return matrix
}

// You can call matrix function with default parameter (4), or call createMatrix with other one

console.log(createMatrix(15))