alert('hi')
let color = 'red'
let gridSize = 8

var help = document.currentScript.getAttribute('one'); //1
alert(help)

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0)
    canvas.style('z-index', '-1')
}

function draw() {
    background(255);

    for (let x = 0; x < windowWidth; x = x + gridSize) {
        fill(255)
        stroke(color);
        strokeWeight(1);
        line(x, 0, x, windowHeight)
    }
    for (let y = 0; y < windowHeight; y = y + gridSize) {
        fill(255)
        stroke(color);
        strokeWeight(1);
        line(0, y, windowWidth, y)
    }

}

