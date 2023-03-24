let pacmanElement = document.querySelector(".pacman-container");
let up = false;
let down = false;
let left = false;
let right = false;
var canvas = document.getElementById('labyrinth-image');
var context = canvas.getContext('2d');
var image = new Image();
image.src = 'spritesheet.png';
image.crossOrigin = 'anonymous';
image.onload = function () {
    var hRatio = canvas.width / 226;
    var vRatio = canvas.height / image.height;
    var ratio = Math.min(hRatio, vRatio);
    var centerShift_x = (canvas.width - 226 * ratio) / 2;
    var centerShift_y = (canvas.height - image.height * ratio) / 2;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, 226, image.height,
        centerShift_x, centerShift_y, 226 * ratio, image.height * ratio);
}

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

function move() {
    if (up) {
        var imgd = context.getImageData(Number(pacmanElement.style.left.split("px")[0]) - 16, Number(pacmanElement.style.top.split("px")[0]) - 20, 32, 4);
        var pix = imgd.data;
        for (var i = 0; i < pix.length; i += 4) {
            if ((pix[i] >= 10 && pix[i] <= 33) &&
                (pix[i + 1] >= 10 && pix[i + 1] <= 33) &&
                pix[i + 2] >= 100 &&
                pix[i + 3] > 0) {
                up = false;
            }
        }
        if (up) {
            pacmanElement.style.top = increment(pacmanElement.style.top, -4)
        }
    }
    else if (down) {
        var imgd = context.getImageData(Number(pacmanElement.style.left.split("px")[0]) - 16, Number(pacmanElement.style.top.split("px")[0]) + 16, 32, 4);
        var pix = imgd.data;
        for (var i = 0; i < pix.length; i += 4) {
            if ((pix[i] >= 10 && pix[i] <= 33) &&
                (pix[i + 1] >= 10 && pix[i + 1] <= 33) &&
                pix[i + 2] >= 100 &&
                pix[i + 3] > 0) {
                down = false;
            }
        }
        if (down) {
            pacmanElement.style.top = increment(pacmanElement.style.top, 4)
        }
    }
    else if (left) {
        var imgd = context.getImageData(Number(pacmanElement.style.left.split("px")[0]) - 20, Number(pacmanElement.style.top.split("px")[0]) - 16, 4, 32);
        var pix = imgd.data;
        for (var i = 0; i < pix.length; i += 4) {
            if ((pix[i] >= 10 && pix[i] <= 33) &&
                (pix[i + 1] >= 10 && pix[i + 1] <= 33) &&
                pix[i + 2] >= 100 &&
                pix[i + 3] > 0) {
                left = false;
            }
        }
        if (left) {
            pacmanElement.style.left = increment(pacmanElement.style.left, -4)
        }
    }
    else if (right) {
        var imgd = context.getImageData(Number(pacmanElement.style.left.split("px")[0]) + 16, Number(pacmanElement.style.top.split("px")[0]) - 16, 4, 32);
        var pix = imgd.data;
        for (var i = 0; i < pix.length; i += 4) {
            ;
            if ((pix[i] >= 10 && pix[i] <= 33) &&
                (pix[i + 1] >= 10 && pix[i + 1] <= 33) &&
                pix[i + 2] >= 100 &&
                pix[i + 3] > 0) {
                right = false;
            }
        }
        if (right) {
            pacmanElement.style.left = increment(pacmanElement.style.left, 4)
        }
    }

    setTimeout(move, 75);
}

move();