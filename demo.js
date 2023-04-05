let people = []
let log = console.log
people[0] = "Elites"
people[1] = "Unicorns"
log(people)
log(people[0])
log(people.length)

people.shift()
log(people)

people.unshift("Luminaries")
log("after shifting --> ", people)

people.push("Pushed 1")
people.push("Pushed 2")
people.push("Pushed 3")

log(people)
log(people.slice(1, 3))
