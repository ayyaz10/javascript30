const canvas = document.querySelector('#draw');
const color = document.querySelector('#color');
const ctx = canvas.getContext('2d');
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
ctx.strokeStyle = color.value;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 30;
// ctx.globalCompositeOperation = 'lighter';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;
let palettes = [
    { color: "#e63946", isSelected: false },
    { color: "#03045e", isSelected: false },
    { color: "#ffb703", isSelected: false },
    { color: "#000000", isSelected: false },
];
const colorBoxes = document.querySelectorAll('.box');
const colorPalette = Array.prototype.slice.call(colorBoxes)

function addToPalette() {
    palettes.forEach((palette, i) => {
        if(typeof(palette !== 'undefined')) {
            colorPalette[i].style.background = palette.color;
        }
    })
}
    
addToPalette();
    function setColor() {
        ctx.strokeStyle = color.value;
    }
    
function draw(e) {
    if(!isDrawing) return; // Stop the funtion from running when they are not mouse down.
    // console.log(e)
    // ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
    ctx.beginPath();
    // start from
    ctx.moveTo(lastX, lastY);
    // go to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    // es6 way destructuring
    [lastX, lastY] = [e.offsetX, e.offsetY];
    // lastX = e.offsetX;
    // lastY = e.offsetY;
    // hue++;
    // if(hue >= 360) {
    //     hue = 0;
    // }
    // if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    //     direction = !direction;
    // }
    // if(direction) {
    //     ctx.lineWidth++;
    // } else {
    //     ctx.lineWidth--;
    // }
}


// getColor()
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
color.addEventListener('change', setColor);
