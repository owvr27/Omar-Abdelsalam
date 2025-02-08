let angle = 20;

function setup() {
    let canvas = createCanvas(300, 200); // Smaller canvas
    canvas.parent("tree-container"); // Attach canvas to div
    drawTree();
}

function drawTree() {
    clear();
    background(0, 0, 0, 0); // Transparent background
    stroke("#20c997");
    translate(width / 2, height); // Move base of tree down
    branch(50); // Smaller initial branch
}

function branch(len) {
    strokeWeight(map(len, 10, 50, 1, 3)); // Adjust thickness
    line(0, 0, 0, -len);
    translate(0, -len);

    if (len > 5) {
        push();
        rotate(radians(angle));
        branch(len * 0.7); // Faster shrinking
        pop();

        push();
        rotate(radians(-angle));
        branch(len * 0.7);
        pop();
    }
}

function windowResized() {
    resizeCanvas(300, 200); // Keep it small
    drawTree();
}
