const sumOfDigits = num => {
    let string = num.toString();
    let summ = 0;
     for(let i = 0; i < string.length; i++) {
        summ += Number(string[i])
     }
     return summ
    
}
// Call a sumOfDigits function with numbers what do you want to add
// Example sumOfDigits(19418), the result would be 23.