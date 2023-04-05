let sum = 0;
let raw_array = [
    [
        null,
        {name: "Segun ", population: 1750000, temprature: 3.0, currency: "NG"},
        {name: "Dacruz ", population: 1750000, temprature: 12.0, currency: "NG"},
        {name: "Bobby ", population: 1750000, temprature: 7.0, currency: "NG"},
    ],
    [
        {name: "Segun ", population: 1250000, temprature: 20.0, currency: "NG"},
        {name: "Dacruz ", population: 1750000, temprature: 15.0, currency: "NG"},
        {name: "Bobby ", population: 1750000, temprature: 10.0, currency: "NG"},
    ],
    [
        {name: "Segun ", population: 1250000, temprature: 5.0, currency: "NG"},
        null,
        {name: "Dacruz ", population: 1750000, temprature: 8.0, currency: "NG"},
        {name: "Bobby ", population: 1750000, temprature: 18.0, currency: "NG"},
    ],
];

for (let i = 0; i < raw_array.length; i++) {
    for (let j = 0; j < raw_array[i].length; j++){
        if(raw_array[i][j] != null){
            if (raw_array[i][j].temprature <= 10.0) {
                sum+= raw_array[i][j].population
            }
        }
    }

}
console.log("The population is " + sum)


