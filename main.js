const board = document.querySelector('#board')
const colors = ['#EE82EE', '#9932CC', '#8B008B', '#FF00FF', '	#800080']
const SQUARES__NUMBER = 500

for (let i = 0; i < SQUARES__NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => 
    setColor(square))
    
    square.addEventListener('mouseleave', () => 
    removeColor(square))

    board.append(square)
}


function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}



function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}



function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}
