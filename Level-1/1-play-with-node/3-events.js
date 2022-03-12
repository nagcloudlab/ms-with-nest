
const EventEmitter = require('events');

// -----------------------------------------------
// Door
// -----------------------------------------------

class Door extends EventEmitter {
    open() {
        console.log("door opened")
        this.emit('open', { num: 1, floor: 1 })
    }
    close() {
        console.log("door closed")
        this.emit('close', { num: 1, floor: 1 })
    }
}
const door = new Door(); // e.g button

// -----------------------------------------------
// Light
// -----------------------------------------------
door.on('open', e => {
    console.log("Lights ON")
})
door.on('close', e => {
    console.log("Lights OFF")
})
// -----------------------------------------------
// Fan
// -----------------------------------------------

door.on('open', e => {
    console.log("Fan ON")
})
door.on('close', e => {
    console.log("Fan OFF")
})
// -----------------------------------------------
setTimeout(() => {
    door.open()
    setTimeout(() => {
        door.close()
    },
        2000)
}, 2000)
// -----------------------------------------------
