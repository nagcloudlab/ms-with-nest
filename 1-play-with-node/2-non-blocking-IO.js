
const fs = require('fs').promises

// console.log(process.pid)

// callback style
// fs.readFile('./veg.txt', (err, vegMenu) => {
//     if (err)
//         throw err;
//     console.log(vegMenu.toString('utf-8'))
// })

// promise style
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
