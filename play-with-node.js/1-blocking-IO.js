
const fs = require('fs')

// console.log(process.pid)

const vegMenu = fs.readFileSync('./veg.txt') // pull / blocking / sync -IO
console.log(vegMenu.toString('utf-8'))

console.log("do something else")