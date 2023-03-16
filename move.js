let pacmanElement = document.querySelector(".pacman-container");
let up = false;
let down = false;
let left = false;
let right = false;
window.addEventListener("keydown", (event) => {
    switch (event.key) {
        case 'ArrowUp':
            up = true;
            down = false;
            left = false;
            right = false;
            break;
        case 'ArrowDown':
            up = false;
            down = true;
            left = false;
            right = false;
            break;
        case 'ArrowLeft':
            up = false;
            down = false;
            left = true;
            right = false;
            break;
        case 'ArrowRight':
            up = false;
            down = false;
            left = false;
            right = true;
            break;
    }
});
function increment(current, increment) {
    current = Number(current.split("px")[0]);
    current += increment;
    return current + "px";
}
function move(){
    if(up){
        pacmanElement.style.top = increment(pacmanElement.style.top, -2)
    }
    else if(down){
        pacmanElement.style.top = increment(pacmanElement.style.top, 2)
    }
    else if(left){
        pacmanElement.style.left = increment(pacmanElement.style.left, -2)
    }
    else if(right){
        pacmanElement.style.left = increment(pacmanElement.style.left, 2)
    }

    setTimeout(move, 50);
}

move();