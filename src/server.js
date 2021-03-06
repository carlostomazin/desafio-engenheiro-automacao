const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
//const node_ssh = require('node-ssh');
//const ssh = new node_ssh();

// Conexão Mysql
//const mysql = require("./mysql").pool;
// Body Parser
app.use(express.urlencoded({ extended: false}))
app.use(express.json())

// Template Engine
var hbs = handlebars.create({
    helpers: {
        sayHello: function () { alert("Hello World") },
        getStringifiedJson: function (value) {
            return JSON.stringify(value);
        }
    },
    defaultLayout: 'main',
});
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars');


// Rotas
app.use("/servidor", require ('../routes/servidor'))
app.use("/portal", require ('../routes/portal'))
app.use("/auth", require ('../routes/auth'))
app.use("/", require ('../routes/home'))

const port = 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`))