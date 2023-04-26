
function manipulate(words){
    for (let i = 0; i < words.length; i++) {
        if (words[i] === ''){}
    }
    return words.replaceAll("h", "H")

    let know = words.indexOf("How")
    let how = words.indexOf("Know")

    let word_ = words.split(" ")
    word_[how] = "know"
    word_[know] = "how"

    return word_.toString().replaceAll(" ", " ")
}
let word =  "hi how are you doing"
let result = manipulate(word)
console.log(result);




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