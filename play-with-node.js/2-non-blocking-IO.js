
const fs = require('fs').promises

// console.log(process.pid)

// How to do Async programming?

/*
    - callback
    - promise
*/

// fs.readFile('./veg.txt', (err, vegMenu) => {
//     if (err)
//         throw err;
//     console.log(vegMenu.toString('utf-8'))
// })


// - or -

async function readVegMenu() {
    try {
        let vegMenu = await fs.readFile('./veg.txt')
        console.log(vegMenu.toString('utf-8'))
    } catch (err) {
        console.log(err)
    }
}
readVegMenu();
console.log("do something else")
