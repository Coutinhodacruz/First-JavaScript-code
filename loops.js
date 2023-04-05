let name = ['s','e','m','i','c','o','l','o','n']
let log = console.log


for (let i = 0, j = name.length - 1; i < j; i++, j--) {
    let temp = name[i];
    name[i] = name[j];
    name[j] = temp;
}
log(name);
name.shift()
log(name)

log(name.slice(1, 7))
log(name)
