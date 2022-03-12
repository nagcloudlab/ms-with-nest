

const http = require('http');
const fs = require('fs')

const httpServer = http.createServer();  // EventEmitter

httpServer.on('request', (req, res) => {


    //------------------------------------------------------
    // blocking-IO
    //------------------------------------------------------
    // const pdf = fs.readFileSync('./PPT/all-levels node.pdf')
    // res.writeHead(200, {
    //     'Content-Type': "application/pdf"
    // })
    // res.write(pdf)
    // res.end();

    //------------------------------------------------------
    // Non-blocking/Async IO
    //------------------------------------------------------
    // fs.readFile('./PPT/all-levels node.pdf', (err, pdf) => {
    //     res.writeHead(200, {
    //         'Content-Type': "application/pdf"
    //     })
    //     res.write(pdf)
    //     res.end();
    // })


    //------------------------------------------------------
    // Non-blocking/Async IO node's streams
    //------------------------------------------------------
    const readableStream = fs.createReadStream('./PPT/all-levels node.pdf')
    res.writeHead(200, {
        'Content-Type': "application/pdf"
    })
    readableStream.pipe(res);
})

httpServer.listen(3000, () => {
    console.log("http-server listening at http://localhost:3000")
})