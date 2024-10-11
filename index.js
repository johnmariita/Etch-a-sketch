let grids = 16;
let red;
let green;
let blue;
let isDrawing = false;

let currentTool = "pencil"; //will be switching to eraser when eraser is clicked
const pad = document.querySelector('.container .drawingPad');
const penBtn = document.querySelector('.container .tools .pencil');
const erBtn = document.querySelector('.container .tools .eraser');
const colored = document.querySelector('.container .tools .colors')
const clear = document.querySelector('.container .tools .clear');

clear.addEventListener('click', () => {
    while (pad.firstChild) {
        pad.removeChild(pad.lastChild);
    }
    createGrid(grids);
})
penBtn.addEventListener('click', () => {
    if (erBtn.classList.contains('toggle')) erBtn.classList.toggle('toggle');
    if (colored.classList.contains('toggle')) colored.classList.toggle('toggle');
    penBtn.classList.toggle('toggle');
    currentTool = "pencil";
});
colored.addEventListener('click', () => {
    if (penBtn.classList.contains('toggle')) penBtn.classList.toggle('toggle');
    if (erBtn.classList.contains('toggle')) erBtn.classList.toggle('toggle');
    colored.classList.toggle('toggle');
    if (currentTool === "paint") currentTool = "pencil";
    else currentTool = "paint";
})
erBtn.addEventListener('click', () => {
    if (colored.classList.contains('toggle')) colored.classList.toggle('toggle');
    if (penBtn.classList.contains('toggle')) penBtn.classList.toggle('toggle');
    erBtn.classList.toggle('toggle');
    if (currentTool === "eraser") currentTool = "pencil";
    else currentTool = "eraser";
});
function createGrid(gridSize) {
    for(let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const pixel = document.createElement('div');
            pixel.style.width = 560 / gridSize + "px";
            pixel.style.height = 560 / gridSize + "px";
            pixel.addEventListener('mousedown', () => {
                isDrawing = true;
            });
            pixel.addEventListener('mouseup', () => {
                isDrawing = false;
            });
            pixel.addEventListener('mouseover', () => {
                if (isDrawing) {
                    if (currentTool === 'pencil') {
                        pixel.style.backgroundColor = 'rgb(0, 0, 0)';
                    } else if (currentTool === 'eraser') pixel.style.backgroundColor = 'white';
                    else {
                        red = Math.floor(Math.random() * 256);
                        green = Math.floor(Math.random() * 256);
                        blue = Math.floor(Math.random() * 256);
                        pixel.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
                    }
                }
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