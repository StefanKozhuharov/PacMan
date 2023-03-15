let pacmanElement = document.querySelector(".pacman-container");
console.log(pacmanElement.style.top)
window.addEventListener("keypress", (event) => {
    console.log(event.key)
    switch (event.key){
        case 'w':
            pacmanElement.style.top = increment(pacmanElement.style.top, -1);
            break;
        case 's':
            pacmanElement.style.top = increment(pacmanElement.style.top, 1);
            break;
        case 'a':
            pacmanElement.style.left = increment(pacmanElement.style.left, -1);
            break;
        case 'd':
            pacmanElement.style.left = increment(pacmanElement.style.left, 1);
            break;
    }
});
function increment(current, increment){
    current = Number(current.split("px")[0]);
    current += increment;
    console.log(current);
    return current+"px";
}