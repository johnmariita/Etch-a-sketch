let grids = 16;
let currentTool = "pencil"; //will be switching to eraser when eraser is clicked
const pad = document.querySelector('.container .drawingPad');
const penBtn = document.querySelector('.container .tools .pencil');
const erBtn = document.querySelector('.container .tools .eraser');
const clear = document.querySelector('.container .tools .clear');

clear.addEventListener('click', () => {
    while (pad.firstChild) {
        pad.removeChild(pad.lastChild);
    }
    createGrid(grids);
})
penBtn.addEventListener('click', () => {
    if (erBtn.classList.contains('toggle')) erBtn.classList.toggle('toggle');
    penBtn.classList.toggle('toggle');
    currentTool = "pencil";
});
erBtn.addEventListener('click', () => {
    if (penBtn.classList.contains('toggle')) penBtn.classList.toggle('toggle');
    erBtn.classList.toggle('toggle');
    currentTool = "eraser";
});
function createGrid(gridSize) {
    for(let i = 0; i < gridSize; i++) {
            for (let j = 0; j < gridSize; j++) {
            const pixel = document.createElement('div');
            pixel.style.width = 560 / gridSize + "px";
            pixel.style.height = 560 / gridSize + "px";
            pixel.backgroundColor = "rgb(255. 255, 255)";
            pixel.addEventListener('mouseover', () => {
                if (currentTool === 'pencil') {
                    pixel.style.backgroundColor = 'black';
                } else pixel.style.backgroundColor = 'white';
            });
            pad.appendChild(pixel);
        }
    }
}



function requestGridSize () {
    grids = parseInt(prompt("What size do you want? Range: 16 X 16 - 100 X 100"));
    if (grids > 100) grids = 100;
    if (grids < 16) grids = 16;
    while (pad.firstChild) {
        pad.removeChild(pad.lastChild);
    }
    createGrid(grids);
}

createGrid(grids);