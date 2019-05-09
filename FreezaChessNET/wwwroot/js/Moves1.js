function is_valid(d, e, f, g, h, i) {
    var j = 0xa;
    switch (h) {
        case 'p':
            return k(d, e, f, g, i);
            break;
        case 'c':
            return E(d, e, f, g, i);
            break;
        case 'n':
            return O(d, e, f, g, i);
            break;
        case 'b':
            return U(d, e, f, g, i);
            break;
        case 'q':
            return a4(d, e, f, g, i);
            break;
        case 'k':
            return ai(d, e, f, g, i);
            break;
    }
}
function k(l, m, n, o, p) {
    var q;
    if (p === 'b') {
        q = 0x1;
    } else {
        q = -0x1;
    }
    if (r(l, m, n, o, q, p)) {
        console['log']('in\x20valid\x201');
        return !![];
    }
    if (y(l, m, n, o, q)) {
        return !![];
    }
    return ![];
    function r(l, m, n, o, q, p) {
        if (p === 'b') {
            if (l !== 0x1) {
                if (Board[n][o] !== 'z') {
                    return ![];
                }
                if (l + 0x1 * q === n && m === o) {
                    return !![];
                }
                return ![];
            } else {
                if (Board[n][o] !== 'z') {
                    return ![];
                }
                if (l + 0x2 * q === n && m === o) {
                    return !![];
                } else if (l + 0x1 * q === n && m === o) {
                    return !![];
                }
                return ![];
            }
        } else {
            if (l !== 0x6) {
                if (Board[n][o] !== 'z') {
                    return ![];
                }
                if (l + 0x1 * q === n && m === o) {
                    return !![];
                }
                return ![];
            } else {
                if (Board[n][o] !== 'z') {
                    return ![];
                }
                if (l + 0x2 * q === n && m === o) {
                    return !![];
                } else if (l + 0x1 * q === n && m === o) {
                    return !![];
                }
                return ![];
            }
        }
    }
    function y(l, m, n, o, q) {
        console['log']('in\x20attack');
        if (Board[n][o] === 'z') {
            return ![];
        } else {
            if (l + 0x1 * q === n && m + 0x1 * q === o) {
                return !![];
            } else if (l + 0x1 * q === n && m - 0x1 * q === o) {
                return !![];
            }
            return ![];
        }
    }
}
function E(F, G, H, I, J) {
    if (F === H) {
        if (G > I) {
            for (let K = 0x1; K < G - I; K++) {
                if (Board[F][G - K] !== 'z') {
                    return ![];
                }
            }
            return !![];
        } else if (G < I) {
            for (let L = 0x1; L < I - G; L++) {
                if (Board[F][G + L] !== 'z') {
                    return ![];
                }
            }
            return !![];
        }
    } else if (G === I) {
        if (F > H) {
            for (let M = 0x1; M < F - H; M++) {
                if (Board[F - M][G] !== 'z') {
                    return ![];
                }
            }
            return !![];
        } else if (F < H) {
            for (let N = 0x1; N < H - F; N++) {
                if (Board[F + N][G] !== 'z') {
                    return ![];
                }
            }
            return !![];
        }
    }
}
function O(P, Q, R, S, T) {
    if (S + 0x1 == Q & R + 0x2 == P || S - 0x1 == Q & R + 0x2 == P || S - 0x2 == Q & R + 0x1 == P || S - 0x2 == Q & R - 0x1 == P || S - 0x1 == Q & R - 0x2 == P || S + 0x1 == Q & R - 0x2 == P || S + 0x2 == Q & R - 0x1 == P || S + 0x2 == Q & R + 0x1 == P) {
        return !![];
    } else {
        return ![];
    }
}
function U(V, W, X, Y, Z) {
    if (X > V) {
        if (Y > W) {
            if (X - V == Y - W) {
                for (let a0 = 0x1; a0 < X - V; a0++) {
                    if (Board[V + a0][W + a0] !== 'z') {
                        return ![];
                    }
                }
                return !![];
            }
        } else if (Y < W) {
            if (X - V == W - Y) {
                for (let a1 = 0x1; a1 < X - V; a1++) {
                    if (Board[V + a1][W - a1] !== 'z') {
                        return ![];
                    }
                }
                return !![];
            }
        }
    } else if (X < V) {
        if (Y > W) {
            if (V - X == Y - W) {
                for (let a2 = 0x1; a2 < V - X; a2++) {
                    if (Board[V - a2][W + a2] !== 'z') {
                        return ![];
                    }
                }
                return !![];
            }
        } else if (Y < W) {
            if (V - X == W - Y) {
                for (let a3 = 0x1; a3 < V - X; a3++) {
                    if (Board[V - a3][W - a3] !== 'z') {
                        return ![];
                    }
                }
                return !![];
            }
        }
    }
}
function a4(a5, a6, a7, a8, a9) {
    if (a7 > a5) {
        if (a8 > a6) {
            if (a7 - a5 == a8 - a6) {
                for (let aa = 0x1; aa < a7 - a5; aa++) {
                    if (Board[a5 + aa][a6 + aa] !== 'z') {
                        return ![];
                    }
                }
                return !![];
            }
        } else if (a8 < a6) {
            if (a7 - a5 == a6 - a8) {
                for (let ab = 0x1; ab < a7 - a5; ab++) {
                    if (Board[a5 + ab][a6 - ab] !== 'z') {
                        return ![];
                    }
                }
                return !![];
            }
        }
    } else if (a7 < a5) {
        if (a8 > a6) {
            if (a5 - a7 == a8 - a6) {
                for (let ac = 0x1; ac < a5 - a7; ac++) {
                    if (Board[a5 - ac][a6 + ac] !== 'z') {
                        return ![];
                    }
                }
                return !![];
            }
        } else if (a8 < a6) {
            if (a5 - a7 == a6 - a8) {
                for (let ad = 0x1; ad < a5 - a7; ad++) {
                    if (Board[a5 - ad][a6 - ad] !== 'z') {
                        return ![];
                    }
                }
                return !![];
            }
        }
    }
    if (a5 === a7) {
        if (a6 > a8) {
            for (let ae = 0x1; ae < a6 - a8; ae++) {
                if (Board[a5][a6 - ae] !== 'z') {
                    return ![];
                }
            }
            return !![];
        } else if (a6 < a8) {
            for (let af = 0x1; af < a8 - a6; af++) {
                if (Board[a5][a6 + af] !== 'z') {
                    return ![];
                }
            }
            return !![];
        }
    } else if (a6 === a8) {
        if (a5 > a7) {
            for (let ag = 0x1; ag < a5 - a7; ag++) {
                if (Board[a5 - ag][a6] !== 'z') {
                    return ![];
                }
            }
            return !![];
        } else if (a5 < a7) {
            for (let ah = 0x1; ah < a7 - a5; ah++) {
                if (Board[a5 + ah][a6] !== 'z') {
                    return ![];
                }
            }
            return !![];
        }
    }
}
function ai(aj, ak, al, am, an) {
    console['log']('in\x20' + piece_selected + '_is_valid');
    if (aj <= max && ak <= max && al <= max && am <= max) {
        console['log']('returning\x20True');
        return !![];
    }
}