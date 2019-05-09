/*
 *
 * Thank you for looking under the hood!
 *
 * Author: www.jasonfreedmancode.com
 *
 * : D
 *
*/

//var danger = new Danger();

var Turn = "b";
var TurnCount = 0;

var Board = [];
initBoard();

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
    if (this.click_count === 0) {
        start_x = y_selected;
        start_y = x_selected;

        if (Board[start_x][start_y].charAt(0) === Turn) {
            click_count++;
            piece_selected = Board[start_x][start_y];
        }
        else {
            click_count = 0;
        }
    }
    else { // if this.click_count === 1
        end_x = y_selected;
        end_y = x_selected;
        var Npiece = piece_selected.charAt(1);
        if (Board[end_x][end_y].charAt(0) !== Turn && is_valid(start_x, start_y, end_x, end_y, Npiece, Turn)) {
            moveTemp(start_x, start_y, end_x, end_y);
            if (danger.inDanger(0, 0)) {
                moveBack(start_x, start_y, end_x, end_y);
            }
            else {
                Board[start_x][start_y] = "z";
                Board[end_x][end_y] = piece_selected;
                changeTurn();
                TurnCount++;
                render();
                document.getElementById("TurnCount").innerHTML = "Turn #: " + TurnCount;
            }
        }
        click_count = 0;
        //console.log(end_x + " " + end_y);
    }
}

var currentKingX = 0;
var currentKingY = 0;

var bKingX = 0;
var bKingY = 5;

var wKingX = 7;
var wKingY = 4;

function changeTurn() {
    if (Turn === "b") {
        currentKingX = wKingX;
        currentKingY = wKingY;
        Turn = "w";
    }
    else {
        currentKingX = bKingX;
        currentKingY = bKingY;
        Turn = "b";
    }
}

var lastDestroyedPiece;

function moveTemp(start_x, start_y, end_x, end_y) {
    Board[start_x][start_y] = "z";
    lastDestroyedPiece = Board[end_x][end_y];
    Board[end_x][end_y] = piece_selected;
}

function moveBack(start_x, start_y, end_x, end_y) {

}

class Danger {
    constructor() {

    }

    inDanger(kingX, kingY) {
        console.log(kingX, kingY);
        return false;
    }
}

var danger = new Danger();
