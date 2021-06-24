const figurePrint = event => {
    document.write('*')
    document.getElementsByTagName('body')[0].appendChild(document.createElement('br'))
    for (let i = 1; i < event.target.value; i++) {
        document.write('*');
        
        for(let j = 1; j < i; j++){ 
            document.write('+')
        }
        document.write('*');
        document.getElementsByTagName('body')[0].appendChild(document.createElement('br'))
    }
}

document.getElementById('figureprint').addEventListener('change', figurePrint)
