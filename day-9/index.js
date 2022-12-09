const fs = require("fs")
const eol = require('os').EOL

// const currentData = fs.readFileSync('input.txt', 'utf-8').toString().split('\r\n').split('\n').map(a => a.split(" "))
const currentData = fs.readFileSync('input.txt', 'utf-8').toString().split(eol).map(a => a.split(" "));


const moves = []
let Day9_Part1 = 0
let Day9_Part2 = 0
let maxRow = 0
let maxColumn = 0

currentData.forEach( line => {
    let row = [];
    if( [...line] !== ' ' ) {
        [...line].forEach(move => row.push(move));
    }
    moves.push(row)
    maxRow;
    maxColumn = line.length
})

const dirs = {
    R: [1, 0],
    L: [-1, 0],
    U: [0, -1],
    D: [0, 1],
};

console.log(moves);

function solve(ropeLength) {
    let tSet = new Set();
    let rope = Array.from({
        length: ropeLength
    }, () => [0, 0]);
 
    moves.map(move => {
        let [direction, steps] = move;
        steps = +steps;
 
        for (let i = 0; i < steps; i++) {
            rope[0] = [rope[0][0] + dirs[direction][0], rope[0][1] + dirs[direction][1]];
            for (let j = 1; j < ropeLength; j++) {
                let dx = rope[j - 1][0] - rope[j][0];
                let dy = rope[j - 1][1] - rope[j][1];
                if (Math.abs(dx) > 1) {
                    rope[j][0] += dx > 0 ? 1 : -1;
                    if (dy != 0) rope[j][1] += dy > 0 ? 1 : -1;
                } else if (Math.abs(dy) > 1) {
                    rope[j][1] += dy > 0 ? 1 : -1;
                    if (dx != 0) rope[j][0] += dx > 0 ? 1 : -1;
                }
            }
            tSet.add(rope[ropeLength - 1].join("-"));
        }
    });
    return tSet.size;
}

Day9_Part1 = solve(2);
Day9_Part2 = solve(10);

console.log(`Part 1: ${Day9_Part1}\nPart 2: ${Day9_Part2}`)