let color = 'red'

gridSize = document.currentScript.getAttribute('size'); //1
alert(gridSize)

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0)
    canvas.style('z-index', '-1')
}

function draw() {
    background(0, 0, 0, 0);

    for (let x = 0; x < windowWidth; x = x + gridSize) {

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

