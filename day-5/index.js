const fs = require("fs");

const currentData = fs.readFileSync('input.txt', 'utf-8').toString().split('\n')

// Test data
// const cargoes = [
//     "ZN",
//     "MCD",
//     "P"
// ].map( cargo => cargo.split('') )
// console.log(cargoes)

const cargoes = [
    "FCJPHTW",
    "GRVFZJBH",
    "HPTR",
    "ZSNPHT",
    "NVFZHJCD",
    "PMGFWDZ",
    "MVZWSJDP",
    "NDS",
    "DZSFM"
].map( cargo => cargo.split('') )

function moveCargo ( from, destination, howMany ) {
    // console.log(cargoes[destination])
    cargoes[destination].push(...cargoes[from].splice(-howMany))
}

for ( let move of currentData ) {
    const currentMove = move.split(" ")
    const howMany = Number(currentMove[1])
    const from = Number(currentMove[3])
    const destination = Number(currentMove[5])

    // console.log({from})
    // console.log({destination})
    // console.log({howMany})

    moveCargo ( from - 1, destination - 1, howMany );
}

console.log(cargoes.map(c => c.reverse()[0]))

