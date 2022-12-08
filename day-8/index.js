const fs = require("fs")

const currentData = fs.readFileSync('input.txt', 'utf-8').toString().split('\n')
const rowsColumns = []
let visibleTotalTrees = 0
let scenicScore = 0
let maxRow = 0
let maxColumn = 0
currentData.forEach( line => {
    let row = [];
    [...line].forEach(tree => row.push(tree));
    rowsColumns.push(row)
    maxRow;;
    maxColumn = line.length
})

visibleTotalTrees += 4 * rowsColumns.length - 4

for (let x = 1; x < rowsColumns.length - 1; x++) {
    for (let y = 1; y < rowsColumns.length - 1; y++) {
        let [up, down, left, right] = [true, true, true, true]
        for (let z = 0; z < x; z++) {
            if (rowsColumns[z][y] >= rowsColumns[x][y]) {
                up = false;
                break;
            }
        }
        for (let z = rowsColumns.length - 1; z > x; z--) {
            if (rowsColumns[z][y] >= rowsColumns[x][y]) {
                down = false;
                break;
            }
        }
        for (let z = 0; z < y; z++) {
            if (rowsColumns[x][z] >= rowsColumns[x][y]) {
                left = false;
                break;
            }
        }
        for (let z = rowsColumns.length - 1; z > y; z--) {
            if (rowsColumns[x][z] >= rowsColumns[x][y]) {
                right = false;
                break;
            }
        }
 
        if ([up, down, left, right].includes(true)) visibleTotalTrees++;
 
        [up, down, left, right] = [0, 0, 0, 0];
        for (let z = x - 1; z >= 0; z--) {
            up++;
            if (rowsColumns[z][y] >= rowsColumns[x][y]) {
                break;
            }
        }
        for (let z = x + 1; z < rowsColumns.length; z++) {
            down++;
            if (rowsColumns[z][y] >= rowsColumns[x][y]) {
                break;
            }
        }
        for (let z = y - 1; z >= 0; z--) {
            left++;
            if (rowsColumns[x][z] >= rowsColumns[x][y]) {
                break;
            }
        }
        for (let z = y + 1; z < rowsColumns.length; z++) {
            right++;
            if (rowsColumns[x][z] >= rowsColumns[x][y]) {
                break;
            }
        }
        scenicScore = Math.max(scenicScore, [up, down, left, right].reduce((a, b) => a * b, 1))
    }
}
console.log(visibleTotalTrees)
console.log(scenicScore)
// rowsColumns.forEach ( (row, x) => {
//     let left = true, top = true, right = true, bottom = true;
//     row.forEach( (tree, y) => {
//         if (x === 0 || y === 0 || x === maxRow-1 || y === maxColumn-1) {
//             visibleTotalTrees++
//         }
//         if (x === x) {
//             if (tree >= tree) {
//                 if (y < y) {
//                     left = false;
//                 } else if (y > y) {
//                     right = false;
//                 }
//             }
//         }
//         if (y === y) {
//             if (tree >= tree) {
//                 if (x < x) {
//                     top = false;
//                 } else if (x > x) {
//                     bottom = false;
//                 }
//             }
//         }
//         if ( left === true || top === true || right === true || bottom === true ) {
//             visibleTotalTrees++
//         }
//     })
// })


// Check rows
// for (let i = 0; i < rowsColumns.length; i++) {
//     const row = rowsColumns[i];
//     for (let j = 0; j < row.length; j++) {
//       const height = row[j];
//       if (row < height) {
//         visibleTotalTrees++;
//       }
//     }
//   }
// for ( let a of rowsColumns ) {
//     const row = a
//     for (let b of row ) {
//         const height = b
//         if (row < height) {
//             visibleTotalTrees++
//         }
//     }
// }


// Check columns
// for ( let a = 0; a < rowsColumns[0].length; a ++ ){
//     const col = rowsColumns.map((row) => row[a])
//     for ( let b = 0; b < col.length; b++ ) {
//         const height = col[b]
//         if (col.every((h) => h < height)) {
//             console.log( 'inside' )
//             visibleTotalTrees++;
//           }
//     }
// }

// for (let c of rowsColumns[0] ) {
//     console.log(c)
//     const col = rowsColumns.map((row) => row[c])
//     console.log( col )
//     for (let d of col ) {
//       const height = col[d]
//       if (col.every((h) => h < height)) {
//         visibleTotalTrees++;
//       }
//     }
//   }

// console.log(visibleTotalTrees)