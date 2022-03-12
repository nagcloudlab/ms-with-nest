
// Error-handling Patterns

const EventEmitter = require('events')
const ee = new EventEmitter();

function func(/*callback*/) {

    let isBad = true;

    // if (isBad)
    //     throw new Error("oops")

    // if (isBad) {
    //     callback(new Error("oops"), null)
    // } else {
    //     callback(null, {})
    // }

    // return new Promise((resolve, reject) => {
    //     if (isBad)
    //         reject("oops")
    // })

    // if (isBad)
    //     ee.emit('error', {})


}


