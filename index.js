const pad = document.querySelector('.container .drawingPad');
const btns = document.getElementsByClassName('btn');
console.log(btns);
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', () => {
        btns[i].classList.toggle("toggle");
    });
}
function createGrid(gridSize) {
    for(let i = 0; i < gridSize; i++) {
            for (let j = 0; j < gridSize; j++) {
            const pixel = document.createElement('div');
            pixel.style.width = 560 / gridSize + "px";
            pixel.style.height = 560 / gridSize + "px";
            if ((j % 2 === 0 && i % 2 === 0) || (j % 2 !== 0 && i % 2 !== 0)) {
                pixel.style.backgroundColor = "rgb(140, 140, 140)";
                console.log(pixel.style.backgroundColor, i, j);
            } else {
                pixel.backgroundColor = "rgb(255. 255, 255)";
                console.log(pixel.style.backgroundColor, i, j);
            }
            
            pad.appendChild(pixel);
        }
    }
}



function requestGridSize () {
    let size = parseInt(prompt("What size do you want? Range: 16 X 16 - 100 X 100"));
    if (size > 100) size = 100;
    if (size < 16) size = 16;
    while (pad.firstChild) {
        pad.removeChild(pad.lastChild);
    }
    createGrid(size);
}

createGrid(16);