const express = require('express')
const path = require('path')

const logger = require('morgan')

const todosRouter = require('./routes/todos')

const app = express();

// set the view engine to use handlebars
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'))

app.use(logger())
app.use(express.static(path.join(__dirname, "public")))
app.use("/api/todos", todosRouter)

app.listen(3000, () => {
    console.log("server up")
})