const ball = document.getElementById('ball');
document.addEventListener('keydown', handleKeyPress);
let positionX = 0;
let positionY = 0;

function handleKeyPress(e) {
    if (e.code === 'ArrowLeft') {
        positionX -= 10;
    }
    if (e.code === 'ArrowRight') {
        positionX += 10;
    }
    if (e.code === 'ArrowUp') {
        positionY -= 10;
    }
    if (e.code === 'ArrowDown') {
        positionY += 10;
    }
    if (positionX < 0) {
        positionX = 0;
    }
    if (positionY < 0) {
        positionY = 0;
    }
    refresh();
}

function refresh() {
    ball.style.left = positionX + 'px';
    ball.style.top = positionY + 'px';
}
