const fs = require("fs");
// A = Rock B = Paper C = Scissors
// X = Rock Y = Paper Z = Scissors
// Points
// 1 = Rock 2 = Paper 3 = Scissors
// Points winning
// 0 = lost 3 = draw 6 = win

// X = Lose = 0
// Y = draw = 3
// Z = Win = 6
const currentData = fs.readFileSync('input.txt', 'utf-8').toString().split('\n')

let scoreFirst = 0;
let scoreSecond = 0;

const possibleFirstCombinations = {
    'A X': 4, //Rock 1 + 3 draw
    'B X': 1, //Rock 1 + 0 loss
    'C X': 7, //Rock 1 + 6 win
    'A Y': 8, //Paper 2 + 6 win
    'B Y': 5, //Paper 2 + 3 draw
    'C Y': 2, //Paper 2 + 0 loss
    'A Z': 3, //Scissocrs 3 + 0 loss
    'B Z': 9, //Scissocrs 3 + 6 win
    'C Z': 6, //Scissocrs 3 + 3 draw
}

const possibleSecondCombinations = {
    'A X': 3, //Rock Loss/ scissors
    'A Y': 4, //Rock Draw/ rock
    'A Z': 8, //Rock Win/ paper
    'B X': 1, //Paper Loss
    'B Y': 5, //Paper Draw
    'B Z': 9, //Paper Win
    'C X': 2, //Scissors Loss
    'C Y': 6, //Scissors Draw
    'C Z': 7, //Scissors Win
}

currentData.forEach( (item, index, arr) => {
    scoreFirst += possibleFirstCombinations[arr[index].trim()]
    scoreSecond += possibleSecondCombinations[arr[index].trim()]
})

console.log(scoreFirst)
console.log(scoreSecond)



// const defaultInitialValue = 0
// const data = currentData.split('\n')
// let scoreWin = 0
// let scoreShape = 0
// let secondWin = 0
// let secondShape = 0
// const rockPaperScissors = (match1, match2) => {
//     if ( (match1 == 'A' && (match2 == 'X' || match2 == 'X\r')) || (match1 == 'B' && (match2 == 'Y' || match2 == 'Y\r') ) || (match1 == 'C' && (match2 == 'Z' || match2 == 'Z\r')) ) {
//         scoreWin += 3
//         // console.log('y')
//     } 
//     if ( (match1 == 'A' &&( match2 == 'Y' || match2 == 'Y\r')) || (match1 == 'B' && (match2 == 'Z' || match2 == 'Z\r')) || (match1 == 'C' && (match2 == 'X' || match2 == 'X\r')) ) {
//         scoreWin += 6;
//         // console.log('ye')
//     } 
//     if ( (match1 == 'A' && match2 == 'Z') || (match1 == 'B' && match2 == 'X') || (match1 == 'C' && match2 == 'Y') ) {
//         scoreWin += 0;
//         // console.log('yes')
//     }
//     if ( match2 == 'X' || match2 == 'X\r') {
//         scoreShape += 1;
//         // console.log('yes1')
//     } 
//     if ( match2 == 'Y'|| match2 == 'Y\r' ) {
//         scoreShape += 2;
//         // console.log('yes2')
//     } 
//     if ( match2 == 'Z' || match2 == 'Z\r') {
//         scoreShape += 3;
//         // console.log('yes3')
//     }
//     var totalScore = scoreWin + scoreShape;
//     console.log(totalScore)
// }

// const secondColumn = (match1, match2) => {
//     // Draw
//     if ( (match1 == 'A' && (match2 == 'X' || match2 == 'X\r')) || (match1 == 'B' && (match2 == 'Y' || match2 == 'Y\r') ) || (match1 == 'C' && (match2 == 'Y' || match2 == 'Y\r')) ) {
//         secondWin += 3
//         // console.log('y')
//     } 
//     // Win
//     if ( (match1 == 'A' &&( match2 == 'Y' || match2 == 'Y\r')) || (match1 == 'B' && (match2 == 'Z' || match2 == 'Z\r')) || (match1 == 'C' && (match2 == 'X' || match2 == 'X\r')) ) {
//         secondWin += 6;
//         // console.log('ye')
//     } 
//     // Loss
//     if ( (match1 == 'A' && match2 == 'Z') || (match1 == 'B' && match2 == 'X') || (match1 == 'C' && match2 == 'Y') ) {
//         secondWin += 0;
//         // console.log('yes')
//     }
//     if ( match2 == 'X' || match2 == 'X\r') {
//         secondShape += 1;
//         // console.log('yes1')
//     } 
//     if ( match2 == 'Y'|| match2 == 'Y\r' ) {
//         secondShape += 2;
//         // console.log('yes2')
//     } 
//     if ( match2 == 'Z' || match2 == 'Z\r') {
//         secondShape += 3;
//         // console.log('yes3')
//     }
//     var totalScore = secondWin + secondShape
//     console.log(totalScore)
// }

// const updatedData = data.map( (match) => {
//         const newMatch = match.split(' ')
//         // rockPaperScissors(newMatch[0], newMatch[1])
//         // newMatch.forEach( (item, index, arr) => {
//         //     rockPaperScissors(arr[0], arr[1])
//         // })
//         secondColumn(newMatch[0], newMatch[1])
//     }
// )

// updatedData