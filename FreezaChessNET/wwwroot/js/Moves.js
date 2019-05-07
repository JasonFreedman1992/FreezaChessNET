/*
 *
 * Thank you for looking under the hood!
 *
 * Author: www.jasonfreedmancode.com
 *
 * : D
 *
*/

function is_valid(start_x, start_y, end_x, end_y, piece, Turn) {

    var max = 10;

    switch (piece) {
        case "p":
            return pawn(start_x, start_y, end_x, end_y, Turn);
            break;
        case "c":
            return castle(start_x, start_y, end_x, end_y, Turn);
            break;
        case "n":
            return knight(start_x, start_y, end_x, end_y, Turn);
            break;
        case "b":
            return bishop(start_x, start_y, end_x, end_y, Turn);
            break;
        case "q":
            return queen(start_x, start_y, end_x, end_y, Turn);
            break;
        case "k":
            return king(start_x, start_y, end_x, end_y, Turn);
            break;
    }

    function pawn(start_x, start_y, end_x, end_y, Turn) {
        console.log("in " + piece_selected + "_is_valid");

        var scale = 1;

        if (Turn === "b") {
            scale = 1;
            if (start_y == 1) {

            }
            else {

            }
        }
        else {
            scale = -1;
            if (start_y === 6) {

            }
            else {

            }

        }

        function valid(scale) {
            
            if (start_y + (2 * scale) === end_y) {

            }
        }

    }

    function castle(start_x, start_y, end_x, end_y, Turn) {
        console.log("in " + piece_selected + "_is_valid");

        if (start_x === end_x) {
            if (start_y > end_y) {
                return true;
            }
            else if (start_y < end_y) {
                return true;
            }
        }
        else if (start_y === end_y) {
            if (start_x > end_x) {
                return true;
            }
            else if (start_x < end_x) {
                return true;
            }
        }
    }

    function knight(start_x, start_y, end_x, end_y, Turn) {
        console.log("in " + piece_selected + "_is_valid");

        if (start_x <= max && start_y <= max && end_x <= max && end_y <= max) {
            console.log("returning True");
            return true;
        }
    }

    function bishop(start_x, start_y, end_x, end_y, Turn) {
        console.log("in " + piece_selected + "_is_valid");

        if (start_x <= max && start_y <= max && end_x <= max && end_y <= max) {
            console.log("returning True");
            return true;
        }
    }

    function queen(start_x, start_y, end_x, end_y, Turn) {
        console.log("in " + piece_selected + "_is_valid");

        if (start_x <= max && start_y <= max && end_x <= max && end_y <= max) {
            console.log("returning True");
            return true;
        }
    }

    function king(start_x, start_y, end_x, end_y, Turn) {
        console.log("in " + piece_selected + "_is_valid");

        if (start_x <= max && start_y <= max && end_x <= max && end_y <= max) {
            console.log("returning True");
            return true;
        }
    }

}