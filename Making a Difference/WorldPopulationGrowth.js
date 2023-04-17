// Assuming a current world population of 7.9 billion and a growth rate of 1.05%
const currentPopulation = 7900000000;
const growthRate = 1.05 / 100;

// Calculate world population growth for the next 75 years
let year = 1;
let population = currentPopulation;
const growthTable = [];

while (year <= 75) {
    const growth = Math.floor(population * growthRate);
    population += growth;

    growthTable.push({
        year: year,
        population: population,
        increase: growth
    });

    year++;
}


console.table(growthTable);
const doublePopulation = currentPopulation * 2;
const doubleYear = growthTable.find(entry => entry.population >= doublePopulation).year;

console.log(`The population will double in the year ${doubleYear}`);
