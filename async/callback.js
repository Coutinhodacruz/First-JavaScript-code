setTimeout(() => {
    console.log("call me back after 3 seconds")
}, 3000)

console.log("I'm first")

const fs = require("fs")
fs.readFile("sample.txt", "utf-8", function(err, data){
    if(err === null){
        console.log("Success !")
        console.log(data)
    }else{
        console.log(`Wahala: ${err}`)
    }
})
