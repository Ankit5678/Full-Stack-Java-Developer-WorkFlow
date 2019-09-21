const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
];

const grid = () => {
    return Array.from(document.getElementsByClassName('q'));
}

const qNumId = (qEl) => {
    return Number.parseInt(qEl.id.replace('q', ''));
}

const emptyQs = () => {
    return grid().filter(_qEl => _qEl.innerText === '');
}

const allSame = (arr) => {
    return arr.every(_qEl => _qEl.innerText === arr[0].innerText && _qEl.innerText !== '');
} 

const compare = (arr) => {
    let count = 0;
    if(allSame(arr)){
       return 0;
    }
    else{
        arr.forEach(a => {
            //console.log(a.innerText);
            if(a.innerText === "x"){
                count = count+1;
            }
        });
        return 3-count;
    }
}

const min = (arr) =>{
    let min = arr[0];
    arr.forEach(m =>{
        if(m<min)
            min = m;
    })
    return min;
}

const takeTurn = (index, letter) => {
    return grid()[index].innerText = letter;
}

const opponentChoice = () => {
    return qNumId(emptyQs()[Math.floor(Math.random() * emptyQs().length)]);
}

const endGame = (winningSequence) => { 
    winningSequence.forEach(_qEl => _qEl.classList.add('winner'));
    document.getElementById('output').innerHTML = "0";
    disableListeners();
    //console.log("disabled")
};
const checkForVictory = () => {
    let victory = false;
    let x = []
    winningCombos.forEach(_c => {
        const _grid = grid();
        const sequence = [_grid[_c[0]], _grid[_c[1]], _grid[_c[2]]];
        if(allSame(sequence)) {
            victory = true;
            //disableListeners();
            //document.getElementById('output').innerHTML = "0";
            endGame(sequence);
        }
        if(victory == false){
            //console.log("*****************")
        // console.log(sequence[0])
        // console.log("==============")
        // console.log(sequence[1])
        // console.log("==============")
        // console.log(sequence[2])
        // console.log("==============")
            // console.log(_grid)
            // console.log(sequence[0])
            x.push(compare(sequence));
            let m = min(x)
            document.getElementById('output').innerHTML = m;
        }
    });
    return victory;
};

const opponentTurn = () => {
    disableListeners();
    setTimeout(() => {
        takeTurn(opponentChoice(), 'o');
        if(!checkForVictory())
            enableListeners();
    }, 1000);
}

const clickFn = (event) => {
    takeTurn(qNumId(event.target), 'x');
    if(!checkForVictory())
        opponentTurn();
};

const enableListeners = () => {
    return grid().forEach(_qEl => _qEl.addEventListener('click', clickFn));
}
const disableListeners = () => {
    return grid().forEach(_qEl => _qEl.removeEventListener('click', clickFn));
}

enableListeners();