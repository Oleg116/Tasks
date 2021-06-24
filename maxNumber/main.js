const getMax = arr => {
    arr.sort((a, b) => a - b)
    return arr[arr.length - 1]
}

//call getMax() function with array as parameter
// like getMax([-10, -1, -59, -2, -100, -3])