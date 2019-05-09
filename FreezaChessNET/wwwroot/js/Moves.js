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

}

function pawn(start_x, start_y, end_x, end_y, Turn) {

    var scale;
    if (Turn === "b") {
        scale = 1;
    }
    else {
        scale = -1;
    }

    if (valid(start_x, start_y, end_x, end_y, scale, Turn)) {
        console.log("in valid 1");
        return true;
    }

    if (attack(start_x, start_y, end_x, end_y, scale)) {
        return true;
    }

    return false;

    function valid(start_x, start_y, end_x, end_y, scale, Turn) {
        if (Turn === "b") {
            if (start_x !== 1) {
                if (Board[end_x][end_y] !== 'z') {
                    return false;
                }
                if (start_x + (1 * scale) === end_x && start_y === end_y) {
                    return true;
                }
                return false;
            }
            else {
                if (Board[end_x][end_y] !== 'z') {
                    return false;
                }
                if (start_x + (2 * scale) === end_x && start_y === end_y) {
                    return true;
                }
                else if (start_x + (1 * scale) === end_x && start_y === end_y) {
                    return true;
                }
                return false;
            }

        }
        else {
            if (start_x !== 6) {
                if (Board[end_x][end_y] !== 'z') {
                    return false;
                }
                if (start_x + (1 * scale) === end_x && start_y === end_y) {
                    return true;
                }
                return false;
            }
            else {
                if (Board[end_x][end_y] !== 'z') {
                    return false;
                }
                if (start_x + (2 * scale) === end_x && start_y === end_y) {
                    return true;
                }
                else if (start_x + (1 * scale) === end_x && start_y === end_y) {
                    return true;
                }
                return false;
            }
        }
    }

    function attack(start_x, start_y, end_x, end_y, scale) {
        console.log("in attack");
        if (Board[end_x][end_y] === "z") {
            return false;
        }
        else {
            if (start_x + (1 * scale) === end_x && start_y + (1 * scale) === end_y) {
                return true;
            }
            else if (start_x + (1 * scale) === end_x && start_y - (1 * scale) === end_y) {
                return true;
            }
            return false;
        }
    }

}

function castle(start_x, start_y, end_x, end_y, Turn) {
    // left/right
    if (start_x === end_x) {
        // left
        if (start_y > end_y) {
            for (let i = 1; i < start_y - end_y; i++) {
                if (Board[start_x][start_y - i] !== "z") {
                    return false;
                }
            }
            return true;
        }
        // right
        else if (start_y < end_y) {
            for (let i = 1; i < end_y - start_y; i++) {
                if (Board[start_x][start_y + i] !== "z") {
                    return false;
                }
            }
            return true;
        }
    }
    // up/down
    else if (start_y === end_y) {
        // up
        if (start_x > end_x) {
            for (let i = 1; i < start_x - end_x; i++) {
                if (Board[start_x - i][start_y] !== "z") {
                    return false;
                }
            }
            return true;
        }
        // down
        else if (start_x < end_x) {
            for (let i = 1; i < end_x - start_x; i++) {
                if (Board[start_x + i][start_y] !== "z") {
                    return false;
                }
            }
            return true;
        }
    }
}

function knight(start_x, start_y, end_x, end_y, Turn) {

    if ((end_y + 1 == start_y & end_x + 2 == start_x) || (end_y - 1 == start_y & end_x + 2 == start_x) || (end_y - 2 == start_y & end_x + 1 == start_x) || (end_y - 2 == start_y & end_x - 1 == start_x) || (end_y - 1 == start_y & end_x - 2 == start_x) || (end_y + 1 == start_y & end_x - 2 == start_x) || (end_y + 2 == start_y & end_x - 1 == start_x) || (end_y + 2 == start_y & end_x + 1 == start_x)) {
        return true;
    }
    else {
        return false;
    }
}

function bishop(start_x, start_y, end_x, end_y, Turn) {

    if (end_x > start_x) {
        //down right row++ col++
        if (end_y > start_y) {
            if (end_x - start_x == end_y - start_y) {
                for (let i = 1; i < end_x - start_x; i++) {
                    if (Board[start_x + i][start_y + i] !== "z") {
                        return false;
                    }
                }
                return true;
            }
        }
        // down left row++ col--
        else if (end_y < start_y) {
            if (end_x - start_x == start_y - end_y) {
                for (let i = 1; i < end_x - start_x; i++) {
                    if (Board[start_x + i][start_y - i] !== "z") {
                        return false;
                    }
                }
                return true;
            }
        }
    }
    // up
    else if (end_x < start_x) {
        // up right row-- col++
        if (end_y > start_y) {
            if (start_x - end_x == end_y - start_y) {
                for (let i = 1; i < start_x - end_x; i++) {
                    if (Board[start_x - i][start_y + i] !== "z") {
                        return false;
                    }
                }
                return true;
            }
        }
        // up left row-- col--
        else if (end_y < start_y) {
            if (start_x - end_x == start_y - end_y) {
                for (let i = 1; i < start_x - end_x; i++) {
                    if (Board[start_x - i][start_y - i] !== "z") {
                        return false;
                    }
                }
                return true;
            }
        }
    }
}

function queen(start_x, start_y, end_x, end_y, Turn) {

    if (end_x > start_x) {
        //down right row++ col++
        if (end_y > start_y) {
            if (end_x - start_x == end_y - start_y) {
                for (let i = 1; i < end_x - start_x; i++) {
                    if (Board[start_x + i][start_y + i] !== "z") {
                        return false;
                    }
                }
                return true;
            }
        }
        // down left row++ col--
        else if (end_y < start_y) {
            if (end_x - start_x == start_y - end_y) {
                for (let i = 1; i < end_x - start_x; i++) {
                    if (Board[start_x + i][start_y - i] !== "z") {
                        return false;
                    }
                }
                return true;
            }
        }
    }
    // up
    else if (end_x < start_x) {
        // up right row-- col++
        if (end_y > start_y) {
            if (start_x - end_x == end_y - start_y) {
                for (let i = 1; i < start_x - end_x; i++) {
                    if (Board[start_x - i][start_y + i] !== "z") {
                        return false;
                    }
                }
                return true;
            }
        }
        // up left row-- col--
        else if (end_y < start_y) {
            if (start_x - end_x == start_y - end_y) {
                for (let i = 1; i < start_x - end_x; i++) {
                    if (Board[start_x - i][start_y - i] !== "z") {
                        return false;
                    }
                }
                return true;
            }
        }
    }

    if (start_x === end_x) {
        // left
        if (start_y > end_y) {
            for (let i = 1; i < start_y - end_y; i++) {
                if (Board[start_x][start_y - i] !== "z") {
                    return false;
                }
            }
            return true;
        }
        // right
        else if (start_y < end_y) {
            for (let i = 1; i < end_y - start_y; i++) {
                if (Board[start_x][start_y + i] !== "z") {
                    return false;
                }
            }
            return true;
        }
    }
    // up/down
    else if (start_y === end_y) {
        // up
        if (start_x > end_x) {
            for (let i = 1; i < start_x - end_x; i++) {
                if (Board[start_x - i][start_y] !== "z") {
                    return false;
                }
            }
            return true;
        }
        // down
        else if (start_x < end_x) {
            for (let i = 1; i < end_x - start_x; i++) {
                if (Board[start_x + i][start_y] !== "z") {
                    return false;
                }
            }
            return true;
        }
    }
}

function king(start_x, start_y, end_x, end_y, Turn) {
    console.log("in " + piece_selected + "_is_valid");

    if (start_x <= max && start_y <= max && end_x <= max && end_y <= max) {
        console.log("returning True");
        if (Turn === "b") {
            //currentKingX = end_x;
            //currentKingY = end_y;
            bKingX = end_x;
            bKingY = end_y;
        }
        else {
            //currentKingX = end_x;
            //currentKingY = end_y;
            wKingX = end_x;
            wKingY = end_y;
        }
        return true;
    }
}
