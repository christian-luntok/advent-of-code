const fs = require("fs");

const currentData = fs.readFileSync('input.txt', 'utf-8')

let track = 0
let track2 = 0
// create a Set to keep track of which words have been seen

// const jentries = currentData.split('').entries()
// console.log( jentries.next().value )

while( true ) {
    // console.log(track)
    let currentString = currentData.substring( track, track + 4 )
    let currentString2 = currentData.substring( track2, track2 + 14 )
    const seen = new Set(currentString);
    const seen2 = new Set(currentString2)
    // console.log(currentString)

    if ( seen.size == 4) {
        console.log("first:", track + 4)
        break
    } 

    if ( seen2.size == 14) {
        console.log("second:", track2 + 14)
        break
    }

    // console.log(seen)
    track += 1
    track2 += 1
}

