const fs = require("fs")

const input = fs.readFileSync('input.txt', 'utf-8').toString().split('\n')

// Global variables

let x = 1;
let currentCycle = 0;
let signalStrengths = { sum: 0 };
let crt = {};

// Function to register the signal strengths

function registerStrength() {
  if (currentCycle !== 20 && (currentCycle - 20) % 40 !== 0) {
    return;
  }
  
  let signalStrength = currentCycle * x;

  signalStrengths['sum'] += signalStrength
  signalStrengths[currentCycle] = signalStrength;
}

// Function to draw in the CRT system

function draw() {
  let line = Math.floor(currentCycle / 40) + 1;

  if (!crt[line]) {
    crt[line] = '';
  }

  xPosition = x + ((line - 1) * 40);

  crt[line] += currentCycle >= xPosition - 1 && currentCycle <= xPosition + 1 ? '#' : '.';
}

// Process the input

input.forEach(instruction => {
    draw();
    ++currentCycle;
    registerStrength();

    let [method, parameter] = instruction.split(' ');


    if (method === 'addx') {
      draw();
      ++currentCycle;
      registerStrength();
      
      x += parseInt(parameter);
    }
  });

// Get first answer

let answer1 = signalStrengths['sum'];

// Get second answer

let answer2 = crt;

// Output the answers

console.log(answer1, answer2);
