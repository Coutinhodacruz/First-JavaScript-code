const days = [
    "first",
    "second",
    "third",
    "fourth",
    "fifth",
    "sixth",
    "seventh",
    "eighth",
    "ninth",
    "tenth",
    "eleventh",
    "twelfth",
];

const gifts = [
    "a partridge in a pear tree",
    "two turtle doves",
    "three French hens",
    "four calling birds",
    "five gold rings",
    "six geese a-laying",
    "seven swans a-swimming",
    "eight maids a-milking",
    "nine ladies dancing",
    "ten lords a-leaping",
    "eleven pipers piping",
    "twelve drummers drumming",
];

for (let i = 0; i < days.length; i++) {
    console.log(`On the ${days[i]} day of Christmas, my true love gave to me:`);
    for (let j = i; j >= 0; j--) {
        switch (j) {
            case 0:
                console.log(`And ${gifts[j]}.`);
                break;
            default:
                console.log(`${gifts[j]},`);
                break;
        }
    }
    console.log("");
}
