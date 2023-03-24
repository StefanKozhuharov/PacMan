let pacmanElement = document.querySelector(".pacman-container");
let up = false;
let down = false;
let left = false;
let right = false;
let hasEatenADot = false;
let points = 0;
let image_width = 226;
let pacmanSize = 30;
let speed = 8;
var canvas = document.getElementById('labyrinth-image');
var context = canvas.getContext('2d');
var image = new Image();
image.src = 'spritesheet.png';
image.crossOrigin = 'anonymous';
image.onload = function () {
    var hRatio = canvas.width / image_width ;
    var vRatio = canvas.height / image.height;
    var ratio = Math.min(hRatio, vRatio);
    var centerShift_x = (canvas.width - image_width  * ratio) / 2;
    var centerShift_y = (canvas.height - image.height * ratio) / 2;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, image_width , image.height,
        centerShift_x, centerShift_y, image_width  * ratio, image.height * ratio);
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
        var imgd = context.getImageData(Number(pacmanElement.style.left.split("px")[0]) - (pacmanSize/2), Number(pacmanElement.style.top.split("px")[0]) - (pacmanSize/2+speed), pacmanSize, speed);
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
            pacmanElement.style.top = increment(pacmanElement.style.top, -speed)
            imgd = context.getImageData(Number(pacmanElement.style.left.split("px")[0]) - (pacmanSize/2), Number(pacmanElement.style.top.split("px")[0]) - (pacmanSize/2), pacmanSize, pacmanSize);
            pix = imgd.data;
            for (var i = 0; i < pix.length; i += 4) {
                if (pix[i] >= 28 &&
                    (pix[i + 1] >= 20 && pix[i + 1] <= 190) &&
                    (pix[i + 2] >= 19 && pix[i + 2] <= 190) &&
                    pix[i + 3] > 0) {
                    pix[i] = 0;
                    pix[i + 1] = 0;
                    pix[i + 2] = 0;
                    context.putImageData(imgd, Number(pacmanElement.style.left.split("px")[0]) - (pacmanSize/2), Number(pacmanElement.style.top.split("px")[0]) - (pacmanSize/2));
                    hasEatenADot = true;
                }
            }
            if (hasEatenADot) {
                points += 10;
                document.getElementById('points').innerHTML = "Points: " + points;
                hasEatenADot = false;
            }
        }
    }
    else if (down) {
        var imgd = context.getImageData(Number(pacmanElement.style.left.split("px")[0]) - (pacmanSize/2), Number(pacmanElement.style.top.split("px")[0]) + (pacmanSize/2), pacmanSize, speed);
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
            pacmanElement.style.top = increment(pacmanElement.style.top, speed)
            imgd = context.getImageData(Number(pacmanElement.style.left.split("px")[0]) - (pacmanSize/2), Number(pacmanElement.style.top.split("px")[0]) - (pacmanSize/2), pacmanSize, pacmanSize);
            pix = imgd.data;
            for (var i = 0; i < pix.length; i += 4) {
                if (pix[i] >= 28 &&
                    (pix[i + 1] >= 20 && pix[i + 1] <= 190) &&
                    (pix[i + 2] >= 19 && pix[i + 2] <= 190) &&
                    pix[i + 3] > 0) {
                    pix[i] = 0;
                    pix[i + 1] = 0;
                    pix[i + 2] = 0;
                    context.putImageData(imgd, Number(pacmanElement.style.left.split("px")[0]) - (pacmanSize/2), Number(pacmanElement.style.top.split("px")[0]) - (pacmanSize/2));
                    hasEatenADot = true;
                }
            }
            if (hasEatenADot) {
                points += 10;
                document.getElementById('points').innerHTML = "Points: " + points;
                hasEatenADot = false;
            }
        }
    }
    else if (left) {
        var imgd = context.getImageData(Number(pacmanElement.style.left.split("px")[0]) - (pacmanSize/2+speed), Number(pacmanElement.style.top.split("px")[0]) - (pacmanSize/2), speed, pacmanSize);
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
            pacmanElement.style.left = increment(pacmanElement.style.left, -speed)
            imgd = context.getImageData(Number(pacmanElement.style.left.split("px")[0]) - (pacmanSize/2), Number(pacmanElement.style.top.split("px")[0]) - (pacmanSize/2), pacmanSize, pacmanSize);
            pix = imgd.data;
            for (var i = 0; i < pix.length; i += 4) {
                if (pix[i] >= 28 &&
                    (pix[i + 1] >= 20 && pix[i + 1] <= 190) &&
                    (pix[i + 2] >= 19 && pix[i + 2] <= 190) &&
                    pix[i + 3] > 0) {
                    pix[i] = 0;
                    pix[i + 1] = 0;
                    pix[i + 2] = 0;
                    context.putImageData(imgd, Number(pacmanElement.style.left.split("px")[0]) - (pacmanSize/2), Number(pacmanElement.style.top.split("px")[0]) - (pacmanSize/2));
                    hasEatenADot = true;
                }
            }
            if (hasEatenADot) {
                points += 10;
                document.getElementById('points').innerHTML = "Points: " + points;
                hasEatenADot = false;
            }
        }
    }
    else if (right) {
        var imgd = context.getImageData(Number(pacmanElement.style.left.split("px")[0]) + (pacmanSize/2), Number(pacmanElement.style.top.split("px")[0]) - (pacmanSize/2), speed, pacmanSize);
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
            pacmanElement.style.left = increment(pacmanElement.style.left, speed)
            imgd = context.getImageData(Number(pacmanElement.style.left.split("px")[0]) - (pacmanSize/2), Number(pacmanElement.style.top.split("px")[0]) - (pacmanSize/2), pacmanSize, pacmanSize);
            pix = imgd.data;
            for (var i = 0; i < pix.length; i += 4) {
                if (pix[i] >= 28 &&
                    (pix[i + 1] >= 20 && pix[i + 1] <= 190) &&
                    (pix[i + 2] >= 19 && pix[i + 2] <= 190) &&
                    pix[i + 3] > 0) {
                    pix[i] = 0;
                    pix[i + 1] = 0;
                    pix[i + 2] = 0;
                    context.putImageData(imgd, Number(pacmanElement.style.left.split("px")[0]) - (pacmanSize/2), Number(pacmanElement.style.top.split("px")[0]) - (pacmanSize/2));
                    hasEatenADot = true;
                }
            }
            if (hasEatenADot) {
                points += 10;
                document.getElementById('points').innerHTML = "Points: " + points;
                hasEatenADot = false;
            }
        }
    }

    setTimeout(move, 75);
}

move();