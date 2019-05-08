/*
 *
 * Thank you for looking under the hood!
 *
 * Author: www.jasonfreedmancode.com
 *
 * This .js file is related to initializing the canvas,
 * images, resizing events, and adding mouse click_count events 
 * with relevant functions.
 *
*/

var canvas_scale = 1;

$(window).resize(function () {
    screen_width = $(window).width();
    screen_height = $(window).height();

    if (screen_width < 1000 || screen_height < 800) {
        if (screen_width < screen_height) {
            if (screen_width > 400) {
                canvas_scale = screen_width / 1000 * .85;
            }
            else {
                canvas_scale = .5;
            }
        }
        else {
            if (screen_height > 400) {
                canvas_scale = screen_height / 1000 * .85;
            }
            else {
                canvas_scale = .5;
            }

        }
    }
    else if (screen_width && screen_height > 1000) {
        canvas_scale = 1;
    }

    ctx.canvas.width = canvas_max_width * canvas_scale;
    ctx.canvas.height = canvas_max_height * canvas_scale;

    initCanvas();
    render();

    console.log(screen_width + " " + screen_height);
    //console.log("resizing");
})

var screen_width;
var screen_height;

var canvas_min_width = 400;
var canvas_min_height = 400;

var canvas_max_width = 1000;
var canvas_max_height = 800;

var x_selected;
var y_selected;

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var bar = document.getElementById("colorBar");
var bctx = bar.getContext("2d");

ctx.canvas.width = 1000;
ctx.canvas.height = 800;

let wp = new Image();
let wc = new Image();
let wn = new Image();
let wb = new Image();
let wq = new Image();
let wk = new Image();

let bp = new Image();
let bc = new Image();
let bn = new Image();
let bb = new Image();
let bq = new Image();
let bk = new Image();

wp.src = '../images/wp.jpg';
wc.src = '../images/wc.jpg';
wn.src = '../images/wn.jpg';
wb.src = '../images/wb.jpg';
wq.src = '../images/wq.jpg';
wk.src = '../images/wk.jpg';

bp.src = '../images/bp.jpg';
bc.src = '../images/bc.jpg';
bn.src = '../images/bn.jpg';
bb.src = '../images/bb.jpg';
bq.src = '../images/bq.jpg';
bk.src = '../images/bk.jpg';


function initCanvas() {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 8; j++) {
            if ((i + j) % 2 == 0) { // if even
                ctx.fillStyle = "#3D485D";
                ctx.fillRect(i * 100 * canvas_scale, j * 100 * canvas_scale, 100 * canvas_scale, 100 * canvas_scale);
            }
            else { // if not even
                ctx.fillStyle = "#C2CDE5";
                ctx.fillRect(i * 100 * canvas_scale, j * 100 * canvas_scale, 100 * canvas_scale, 100 * canvas_scale);
            }
        }
    }
}

initCanvas();

//
// add mouse click
//
c.addEventListener("click", getClickPosition, false);

function getClickPosition(e) {

    //var xPosition = e.clientX;
    //var yPosition = e.clientY;
    var xPosition = e.offsetX;
    var yPosition = e.offsetY;

    var normalize = function (offSet) {
        for (let i = 1; i < 11; i++) {
            if (offSet <= i * 100 * canvas_scale) {
                return i - 1;
            }
        }
    }

    x_selected = normalize(xPosition);
    y_selected = normalize(yPosition);
    Run();
    //console.log(xSelected + " " + ySelected);
}

function render() {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 8; j++) {

            switch (Board[j][i]) {
                case "wp":
                    ctx.drawImage(wp, i * 100 * canvas_scale, j * 100 * canvas_scale);
                    break;
                case "wc":
                    ctx.drawImage(wc, i * 100 * canvas_scale, j * 100 * canvas_scale);
                    break;
                case "wn":
                    ctx.drawImage(wn, i * 100 * canvas_scale, j * 100 * canvas_scale);
                    break;
                case "wb":
                    ctx.drawImage(wb, i * 100 * canvas_scale, j * 100 * canvas_scale);
                    break;
                case "wq":
                    ctx.drawImage(wq, i * 100 * canvas_scale, j * 100 * canvas_scale);
                    break;
                case "wk":
                    ctx.drawImage(wk, i * 100 * canvas_scale, j * 100 * canvas_scale);
                    break;

                case "bp":
                    ctx.drawImage(bp, i * 100 * canvas_scale, j * 100 * canvas_scale);
                    break;
                case "bc":
                    ctx.drawImage(bc, i * 100 * canvas_scale, j * 100 * canvas_scale);
                    break;
                case "bn":
                    ctx.drawImage(bn, i * 100 * canvas_scale, j * 100 * canvas_scale);
                    break;
                case "bb":
                    ctx.drawImage(bb, i * 100 * canvas_scale, j * 100 * canvas_scale);
                    break;
                case "bq":
                    ctx.drawImage(bq, i * 100 * canvas_scale, j * 100 * canvas_scale);
                    break;
                case "bk":
                    ctx.drawImage(bk, i * 100 * canvas_scale, j * 100 * canvas_scale);
                    break;

                case "z":
                    if ((i + j) % 2 == 0) { // if even
                        ctx.fillStyle = "#3D485D";
                        ctx.fillRect(i * 100 * canvas_scale, j * 100 * canvas_scale, 100 * canvas_scale, 100 * canvas_scale);
                    }
                    else { // if not even
                        ctx.fillStyle = "#C2CDE5";
                        ctx.fillRect(i * 100 * canvas_scale, j * 100 * canvas_scale, 100 * canvas_scale, 100 * canvas_scale);
                    }
                    break;
            }
        }
    }
}
