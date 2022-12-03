const fs = require("fs");

const currentData = fs.readFileSync('input.txt', 'utf-8').toString().split('\n')

let sum = 0
let sum2 = 0

const lowerPriority = {
    'a' : 1, 'b' : 2, 'c' : 3, 'd' : 4, 'e' : 5,
    'f' : 6, 'g' : 7, 'h' : 8, 'i' : 9, 'j' : 10,
    'k' : 11, 'l' : 12, 'm' : 13, 'n' : 14, 'o' : 15, 
    'p' : 16, 'q' : 17, 'r' : 18, 's' : 19, 't' : 20,
    'u' : 21, 'v': 22, 'w' : 23, 'x' : 24, 'y' : 25, 'z' :26
}

const upperPriority = {
    'A' : 27, 'B' : 28, 'C' : 29, 'D' : 30, 'E' : 31,
    'F' : 32, 'G' : 33, 'H' : 34, 'I' : 35, 'J' : 36,
    'K' : 37, 'L' : 38, 'M' : 39, 'N' : 40, 'O' : 41, 
    'P' : 42, 'Q' : 43, 'R' : 44, 'S' : 45, 'T' : 46,
    'U' : 47, 'V': 48, 'W' : 49, 'X' : 50, 'Y' : 51, 'Z' : 52
}


function getDupps( first, second, third, problem ) {
    if ( problem == 'first' ) {
        for ( let duplicate of first ) {
            for ( let x = 0; x < second.length; x++ ) {
                if ( duplicate == second[x] ) {
                    return duplicate;
                }
            }
        }
    } else {
        for ( let duplicate of first ) {
            for( let x = 0; x < second.length; x++ ) {
                if( duplicate == second[x] ) {
                    for( let z = 0; z < third.length; z++ ) {
                        if ( duplicate == third[z]) {
                            return third[z]
                        }
                    }
                }
            }
        }
    }

}


currentData.forEach( (item, index, arr) => {
    let wordCount = arr[index].length
    let firstHalf = arr[index].trim().slice(0, wordCount / 2)
    let secondHalf = arr[index].trim().slice(wordCount / 2, wordCount)
    let wordDuplicate = getDupps(firstHalf, secondHalf, '', 'first')
    if ( wordDuplicate == wordDuplicate.toLowerCase() ) {
       sum += lowerPriority[wordDuplicate]
    } else if ( wordDuplicate.toUpperCase()) {
       sum += upperPriority[wordDuplicate]
    }
})
console.log(sum)
currentData.forEach( (item, index, arr) => {
    if ( index % 3 == 0 ) {
        let firstHalf = arr[index]
        let secondHalf = arr[index + 1]
        let thirdHalf = arr[index + 2]
        let wordDuplicate = getDupps( firstHalf, secondHalf, thirdHalf, 'second')
        if ( wordDuplicate == wordDuplicate.toLowerCase() ) {
            sum2 += lowerPriority[wordDuplicate]
         } else {
            sum2 += upperPriority[wordDuplicate]
         }
    }
})
console.log(sum2)


// for ( let a = 0; a < currentData.length; a += 3 ) {
//     let firstHalf = currentData[a]
//     let secondHalf = currentData[a + 1]
//     let thirdHalf = currentData[a + 2]
//     let wordDuplicate = getDupps( firstHalf, secondHalf, thirdHalf, 'second')
//     if ( wordDuplicate == wordDuplicate.toLowerCase() ) {
//         sum2 += lowerPriority[wordDuplicate]
//      } else {
//         sum2 += upperPriority[wordDuplicate]
//      }
// }
// console.log(sum2)



// currentData.forEach( (item, index, arr) => {
//     let wordCount = arr[index].length
//     // let currentWord = arr[index].split("", wordCount)
//     // let firstHalf = currentWord[0]
//     // let secondHalf = currentWord[1]
//     let firstHalf = arr[index].trim().slice(0, wordCount / 2)
//     let secondHalf = arr[index].trim().slice(wordCount / 2, wordCount)
//     let wordDuplicate = getDupps(firstHalf, secondHalf, '', 'first')
//     if ( wordDuplicate == wordDuplicate.toLowerCase() ) {
//        sum += lowerPriority[wordDuplicate]
//     } else if ( wordDuplicate.toUpperCase()) {
//        sum += upperPriority[wordDuplicate]
//     }

//     console.log(sum)

//     // firstHalf.every( letter => {
//     //     if ( secondHalf.includes(letter) ) {
//     //         return yes
//     //     }
//     // })
//     // for ( let i = 0; i < firstHalf.length; i++ ) {
//     //         if ( firstHalf[i].toLocaleLowerCase() ) {
//     //             sum += lowerPriority[firstHalf[i].trim()]
//     //         }
//     // }

//     // for ( let z = 0; z < secondHalf.length; z++ ) {
       
//     //     if ( secondHalf[z].toLocaleUpperCase() ) {
//     //         sum += upperPriority[secondHalf[z].trim()]
//     //     }
//     // }
//     // let findDupps = arr => arr.filter((item,index) => arr.indexOf(item) != index)
//     // console.log(sum)

// })
