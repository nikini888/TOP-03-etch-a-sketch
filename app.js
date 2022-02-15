const containerGrids = document.querySelector('.container--grids');
const RAINBOWCOLOR = [
    ['red', '255, 0, 0'],
    ['orange', '255, 127, 0'],
    ['yellow', '255, 255, 0'],
    ['green', '0, 255, 0'],
    ['blue', '0, 0, 255'],
    ['indigo', '46, 43, 95'],
    ['violet', '139, 0, 255'],
]

function createGrids() {
    let size = sizeGids()
    const board = document.createElement('div');
    board.classList.add('squares')
    containerGrids.appendChild(board)
    for (let i = 0; i < size * size; i++) {
        let square = document.createElement('div');
        square.classList.add('square')
        square.style.width = board.clientWidth / size + 'px';
        square.style.height = board.clientWidth / size + 'px';
        square.style.backgroundColor = 'white'
        square.addEventListener('mouseover', () => {
            pickRandomColor(square)
        })
        board.appendChild(square)
    }
}
function clearGrids() {
    let squares = document.querySelector('.squares');
    if (squares.parentNode) {
        squares.parentNode.removeChild(squares)
    }
}
function pickRandomColor(item) {
    if (Math.random() <= 0.1) {
        item.style.backgroundColor = 'black';
    } else {
        item.style.backgroundColor = `rgb(${RAINBOWCOLOR[Math.floor(Math.random() * 7)][1]})`
    }
}

function sizeGids() {
    let size = prompt('What is the size of gird you want?')
    while (size > 35) {
        size = prompt('What is the size of gird you want?')
        console.log(size)
    }
    return size;
}
createGrids()

document.querySelector('.btn--clear').addEventListener('click', () => {
    reset()
})
function reset() {
    clearGrids()
    createGrids()
    squares.forEach(square => {
        square.style.backgroundColor = 'black';
    })
}