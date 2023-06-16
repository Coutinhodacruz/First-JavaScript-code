
// function manipulate(words){
//     for (let i = 0; i < words.length; i++) {
//         if (words[i] === ''){}
//     }
//     return words.replaceAll("h", "H")
//
//     let know = words.indexOf("How")
//     let how = words.indexOf("Know")
//
//     let word_ = words.split(" ")
//     word_[how] = "know"
//     word_[know] = "how"
//
//     return word_.toString().replaceAll(" ", " ")
// }
// let word =  "hi how are you doing"
// let result = manipulate(word)
// console.log(result);



 function toJadenCase(sentence){
//     let seperate = words.split("");
//     for (let i = 0; i < seperate.length; i++) {
//         seperate[0] = seperate[0].toUpperCase();
//         if (seperate[i] === " "){
//             seperate[i+1] = seperate[i+1].toUpperCase();
//         }
//     }
//     return seperate.toString().split(',').join("");
// }
// let word = "how can mirror be real if our eyes aren't real";
// let result = toJadenCase(word);
// console.log(result)
//




let newSentence = sentence[0].toUpperCase()

for (let index = 1; index < sentence.length; index++) {
    if(sentence[index] === " "){
        newSentence += sentence[index]
        newSentence += sentence[index + 1].toUpperCase()
        index++
        continue
    }
    newSentence += sentence[index];

}

console.log(newSentence)
}

toJadenCase("how can mirrors be real when our eyes arent real")




// let prompt = require(`prompt-sync`)();
// let log = console.log
//
// let name = "You are so fried today and Malik what have you done that you are requesting for brain break";
// let nameSplit = name.split(' ')
//
// let newName = []
// newName.push(nameSplit.slice(0, 8))
// newName.push(nameSplit.slice(12, 18))
// newName.push(nameSplit.slice(7, 12))
//
// let finalName = `${newName.toString()}`
// log(finalName.split(',').join(' '))