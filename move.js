let pacmanElement = document.querySelector(".pacman-container");
console.log(pacmanElement.style.top)
window.addEventListener("keydown", (event) => {
    switch (event.key) {
        case 'ArrowUp':
            pacmanElement.style.top = increment(pacmanElement.style.top, -2)
            break;
        case 'ArrowDown':
            pacmanElement.style.top = increment(pacmanElement.style.top, 2)
            break;
        case 'ArrowLeft':
            pacmanElement.style.top = increment(pacmanElement.style.left, -2)
            break;
        case 'ArrowRight':
            pacmanElement.style.top = increment(pacmanElement.style.top, 2)
            break;
    }
});
function increment(current, increment) {
    current = Number(current.split("px")[0]);
    current += increment;
    return current + "px";
}