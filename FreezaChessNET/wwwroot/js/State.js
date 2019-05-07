/*
 *
 * Thank you for looking under the hood!
 *
 * Author: www.jasonfreedmancode.com
 *
 * : D
 *
*/

var Turn = "b";

var Board = [];
initBoard();
render();

function initBoard() {
    for (let i = 0; i < 10; i++) {
        Board[i] = [];
        for (let j = 0; j < 8; j++) {
            Board[i][j] = "z";
            //ctx.drawImage(img, i * 100, j * 100);
        }
    }

    Board[0][0] = "bc";
    Board[1][0] = "bn";
    Board[2][0] = "bp";
    Board[3][0] = "bq";
    Board[4][0] = "bq";
    Board[5][0] = "bk";
    Board[6][0] = "bq";
    Board[7][0] = "bb";
    Board[8][0] = "bn";
    Board[9][0] = "bc";

    for (let i = 0; i < 10; i++) {
        for (let j = 1; j < 2; j++) {
            Board[i][j] = "bp";
        }
    }

    for (let i = 0; i < 10; i++) {
        for (let j = 6; j < 7; j++) {
            Board[i][j] = "wp";
        }
    }

    Board[0][7] = "wc";
    Board[1][7] = "wn";
    Board[2][7] = "wp";
    Board[3][7] = "wq";
    Board[4][7] = "wk";
    Board[5][7] = "wq";
    Board[6][7] = "wq";
    Board[7][7] = "wb";
    Board[8][7] = "wn";
    Board[9][7] = "wc";

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

        if (Board[x_selected][y_selected].charAt(0) === "b") {
            start_x = x_selected;
            start_y = y_selected;
            click_count++;
            piece_selected = Board[start_x][start_y];
            console.log("new click_count", click_count)
        }
        else {
            click_count = 0;
        }
        //var current_piece
    }
    else { // if this.click_count === 1
        end_x = x_selected;
        end_y = y_selected;
        var Npiece = piece_selected.charAt(1);
        if (is_valid(start_x, start_y, end_x, end_y, Npiece, Turn)) {
            console.log("after castle_is_valid true");
            Board[start_x][start_y] = "z";
            Board[end_x][end_y] = piece_selected;
            render();
            click_count = 0;
            Turn = "w";
        }
        console.log(end_x + " " + end_y);
    }
}

function Run_WPlayer() {
    if (this.click_count === 0) {
        console.log("in click_count 0");

        if (Board[x_selected][y_selected].charAt(0) === "w") {
            start_x = x_selected;
            start_y = y_selected;
            click_count++;
            piece_selected = Board[start_x][start_y];
            console.log("new click_count", click_count)
        }
        else {
            click_count = 0;
        }
        //var current_piece
    }
    else { // if this.click_count === 1
        end_x = x_selected;
        end_y = y_selected;
        var Npiece = piece_selected.charAt(1);
        if (is_valid(start_x, start_y, end_x, end_y, Npiece, Turn)) {
            console.log("after castle_is_valid true");
            Board[start_x][start_y] = "z";
            Board[end_x][end_y] = piece_selected;
            render();
            click_count = 0;
            Turn = "b";
        }
        console.log(end_x + " " + end_y);
    }
}