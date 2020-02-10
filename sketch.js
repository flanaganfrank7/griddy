var bodyHeight;


bodyHeight = $(document).height()


gridSize = parseInt(document.currentScript.getAttribute('size'));
gridOpacity = parseInt(document.currentScript.getAttribute('opacity'));
gridColor = document.currentScript.getAttribute('color');
zed = document.currentScript.getAttribute('zed');


function setup() {
    canvas = createCanvas(windowWidth, bodyHeight);
    canvas.position(0, 0)
    canvas.style('z-index', zed)
}

function draw() {
    background(0, 0, 0, 0);

    for (let x = 0; x < windowWidth; x = x + gridSize) {

        stroke(gridColor);
        strokeWeight(1);
        line(x, 0, x, bodyHeight)
    }
    for (let y = 0; y < bodyHeight; y = y + gridSize) {
        fill(255)
        stroke(gridColor);
        strokeWeight(1);
        line(0, y, windowWidth, y)
    }

    noLoop()
}

