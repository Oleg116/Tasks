const figurePrint = event => {
    const arr = [];
    for (let i = 0; i < event.target.value; i++) {
        arr.push('+')
    }
    for(let j = 0; j < event.target.value; j++) {
        arr.forEach(item => document.write(item))
        arr.pop()
        arr.unshift('*')
        document.getElementsByTagName('body')[0].appendChild(document.createElement('br'))
    }
}

document.getElementById('create-figure').addEventListener('change', figurePrint)
