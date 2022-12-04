const fs = require("fs");
const { parse } = require("path");

const currentData = fs.readFileSync('input.txt', 'utf-8').toString().split('\n')

let sum = 0
let sum2 = 0

for( let a of currentData ) {
    let intervals = a.split(',')
    //  number1 start - number2 end, number3 start, number4 end
    let [number1, number2] = intervals[0].split('-')
    let [number3, number4] = intervals[1].split('-')
    if ( parseInt(number3) >= parseInt(number1) && parseInt(number4) <= parseInt(number2) ) {
        sum++
    } else if ( parseInt(number1) >= parseInt(number3) && parseInt(number2) <= parseInt(number4) ) {
        sum++
    }

    if ( !(parseInt(number1) > parseInt(number4) || parseInt(number3) > parseInt(number2)) ) {
        sum2++
    }
}


console.log(sum)
console.log(sum2)


// for ( let a = 0; a < currentData.length; a++ ) {
//     let intervals = currentData[a].split(',')
//     let [number1, number2] = intervals[0].split('-')
//     let [number3, number4] = intervals[1].split('-')
//     if ( parseInt(number3) >= parseInt(number1) && parseInt(number4) <= parseInt(number2) ) {
//         sum++
//     } else if ( parseInt(number1) >= parseInt(number3) && parseInt(number2) <= parseInt(number4) ) {
//         sum++
//     }

//     if ( !(parseInt(number1) > parseInt(number4) || parseInt(number3) > parseInt(number2)) ) {
//         sum2++
//     }
// }


// currentData.map( number => number.split(',') ).map( number => {
//     let [number1, number2] = number[0].split('-').map(item => parseInt(item))
//     let [number3, number4] = number[1].split('-').map(item => parseInt(item))

//     if ( number3 >= number1 && number4 <= number2 ) {
//         sum++
//     } else if ( number1 >= number3 && number2 <= number4 ) {
//         sum++
//     }

//     if ( !(number4 <  number1) && !(number3 > number2) ) {
//         sum2++
//     }
// })


