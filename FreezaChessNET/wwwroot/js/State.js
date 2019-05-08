/*
 *
 * Thank you for looking under the hood!
 *
 * Author: www.jasonfreedmancode.com
 *
 * : D
 *
*/

function changeColorBar() {
    bctx.strokeStyle = "#4286f4";
    bctx.strokeRect(0, 25, 1000 * canvas_scale, 50);
    if (Turn === "b") {
        bctx.fillStyle = "#000000";
        bctx.fillRect(0, 25, 1000 * canvas_scale, 50);
    }
    else {
        bctx.fillStyle = "#FFFFFF";
        bctx.fillRect(0, 25, 1000 * canvas_scale, 50);
    }
}

var Turn = "b";

changeColorBar();

var Board = [];
initBoard();
render();

function initBoard() {
    for (let i = 0; i < 8; i++) {
        Board[i] = [];
        for (let j = 0; j < 10; j++) {
            Board[i][j] = "z";
            //ctx.drawImage(img, i * 100, j * 100);
        }
    }

    Board[0][0] = "bc";
    Board[0][1] = "bn";
    Board[0][2] = "bb";
    Board[0][3] = "bq";
    Board[0][4] = "bq";
    Board[0][5] = "bk";
    Board[0][6] = "bq";
    Board[0][7] = "bb";
    Board[0][8] = "bn";
    Board[0][9] = "bc";

    for (let i = 1; i < 2; i++) {
        for (let j = 0; j < 10; j++) {
            Board[i][j] = "bp";
        }
    }

    for (let i = 6; i < 7; i++) {
        for (let j = 0; j < 10; j++) {
            Board[i][j] = "wp";
        }
    }

    Board[7][0] = "wc";
    Board[7][1] = "wn";
    Board[7][2] = "wb";
    Board[7][3] = "wq";
    Board[7][4] = "wk";
    Board[7][5] = "wq";
    Board[7][6] = "wq";
    Board[7][7] = "wb";
    Board[7][8] = "wn";
    Board[7][9] = "wc";

}

var piece_selected = "";
var click_count = 0;
var start_x = 0;
var start_y = 0;
var end_x = 0;
var end_y = 0;

function Run() {
    if (Turn === "b") {
        Run_BPlayer();
    } else {
        Run_WPlayer();
    }
}

function Run_BPlayer() {

    if (this.click_count === 0) {
        console.log("in click_count 0");
        start_x = y_selected;
        start_y = x_selected;

        if (Board[start_x][start_y].charAt(0) === "b") {
            click_count++;
            piece_selected = Board[start_x][start_y];
        }
        else {
            click_count = 0;
        }
        //var current_piece
    }
    else { // if this.click_count === 1
        console.log('in click count 1');
        end_x = y_selected;
        end_y = x_selected;
        var Npiece = piece_selected.charAt(1);
        if (Board[end_x][end_y].charAt(0) !== "b" && is_valid(start_x, start_y, end_x, end_y, Npiece, Turn)) {
            Board[start_x][start_y] = "z";
            Board[end_x][end_y] = piece_selected;
            render();
            Turn = "w";
            changeColorBar();
        }
        click_count = 0;
        //console.log(end_x + " " + end_y);
    }
}

function Run_WPlayer() {
    if (this.click_count === 0) {
        //console.log("in click_count 0");
        start_x = y_selected;
        start_y = x_selected;

        if (Board[start_x][start_y].charAt(0) === "w") {
            click_count++;
            piece_selected = Board[start_x][start_y];
            //console.log("new click_count", click_count)
        }
        else {
            click_count = 0;
        }
        //var current_piece
    }
    else { // if this.click_count === 1
        end_x = y_selected;
        end_y = x_selected;
        var Npiece = piece_selected.charAt(1);
        if (Board[end_x][end_y].charAt(0) !== "w" && is_valid(start_x, start_y, end_x, end_y, Npiece, Turn)) {
            //console.log("after castle_is_valid true");
            Board[start_x][start_y] = "z";
            Board[end_x][end_y] = piece_selected;
            render();
            Turn = "b";
            changeColorBar();
        }
        click_count = 0;
        //console.log(end_x + " " + end_y);
    }
}