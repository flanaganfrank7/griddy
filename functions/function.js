gridSize = document.currentScript.getAttribute('size');
gridColor = document.currentScript.getAttribute('color');
finalSize = parseInt(gridSize)

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0)
    canvas.style('z-index', '-1')
}

function draw() {
    background(0, 0, 0, 0);

    for (let x = 0; x < windowWidth; x = x + finalSize) {

        stroke(gridColor);
        strokeWeight(.1);
        line(x, 0, x, windowHeight)
    }
    for (let y = 0; y < windowHeight; y = y + finalSize) {
        fill(255)
        stroke(gridColor);
        strokeWeight(.1);
        line(0, y, windowWidth, y)
    }

}

