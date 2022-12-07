const fs = require("fs")

const currentData = fs.readFileSync('input.txt', 'utf-8').toString().split('\n')

const MAX_SIZE = 100000
const DISK_SPACE = 70000000
const THRESHOLD = 30000000

let currentPath = []
const sizeTotalperDirectory = new Map()
// let counter = 0

for ( let a of currentData ) {
    const line = a.split(' ')

    switch (line[0]) {
        case "$": 
            if (line[1] === 'cd' && line[2] === '..') {
                currentPath.pop()
            } else if ( line[1] === 'cd' ) {
                const dir = line[2]
                const child = `/${dir !== "/" ? dir : ""}`;
                currentPath.push(`${currentPath.join("/")}${child}`);
            }
            break
        default:
            const sizeValue = line[0]
            if ( sizeValue !== '$' && sizeValue !== 'dir' ) {
                for ( let a of currentPath ) {
                    if (sizeTotalperDirectory.has(a)) {
                        sizeTotalperDirectory.set(a, sizeTotalperDirectory.get(a) + parseInt(sizeValue));
                    } else {
                        sizeTotalperDirectory.set(a, parseInt(sizeValue));
                    }
                }
                // for ( const a of currentPath ) {
                //     sizeTotalperDirectory[a] += parseInt(sizeValue, 10)
                // }
            }
            break
    }

    let totalValue = 0
    // console.log(sizeTotalperDirectory)
    for ( let [currentDir, totalSize] of sizeTotalperDirectory.entries() ) {
        // console.log({currentDir, totalSize})
        if ( totalSize <= MAX_SIZE ) {
            totalValue += totalSize
        }
    }

    const minimumRequiredSpace = THRESHOLD - ( DISK_SPACE - sizeTotalperDirectory.get('/'))

    // const res = sizeTotalperDirectory.values().sort((a,b) => a - b).filter( size => size >= minimumRequiredSpace)[0]
    const tobeDeletedDirSize = Math.min(
        ...[...sizeTotalperDirectory.values()].filter(
            (size) => size >= minimumRequiredSpace
        )
    )

    console.log(tobeDeletedDirSize)
    // switch (c) {
    //     case ['$', 'cd', '..']:
    //         currentData.pop()
    //     case ['$', 'cd', 'dir']
    // }

}