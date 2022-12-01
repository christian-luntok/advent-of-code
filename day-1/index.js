const fs = require("fs");

fs.readFile("input.txt", (err, data) => {
    if (err) throw err;
    const defaultInitialValue = 0;
    const currentData = data.toString().split('\n\n');

    const updatedData = currentData.map( (elves) => (
                elves.split('\n').filter( (calorie => calorie !== '') ).reduce((totalcalorie, calorie ) =>  totalcalorie + parseInt(calorie), defaultInitialValue )
            )
        );

    updatedData.sort((a,b) => b - a);
    console.log(`Total calories of the Elf hoarding the food is ${updatedData[0]}`);

    const topElvesTotal = updatedData[0] + updatedData[1] + updatedData[2];
    console.log(`Total calories of the top mf elves who's hoarding the food is ${topElvesTotal}`);
});