const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const path = require("path")
const passport = require('passport')
const session = require('express-session')
require('../config/auth')(passport)

// -- Configurações -- //
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

// Public
app.use(express.static(path.join(__dirname, "public")))

// Autentição

// Rotas
app.use("/portal", require ('../routes/usuarios'))
app.use("/auth", require ('../routes/auth'))
app.use("/", require ('../routes/home'))

const port = 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`))