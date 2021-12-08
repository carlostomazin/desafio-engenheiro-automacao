const express = require('express')
const router = express.Router()
const mysql = require("../src/mysql").pool
var bcrypt = require('bcryptjs');

router.post('/', (req, res) => {
    //console.log(req.body)

    const {nome, senha} = req.body;

    mysql.getConnection((error, conn) => {
        if (error) { 
            return res.status(500).send({ error: error }) 
        }
        conn.query( 'SELECT * FROM users WHERE (nome = ?)', [nome], async (error, resultado) => {   

            fun_bcrypt = function () {
                var resultkey
                Object.keys(resultado).forEach(function(key) {
                    var row = resultado[key];
                    resultkey = bcrypt.compareSync(senha, row.senha)
                })
                return resultkey
            }

            if (resultado.length > 0 && fun_bcrypt()){
                res.status(201).redirect('./portal/services')   
                cont = 1
            }else{
                res.render('./portal/login', {
                    message: "usuário e/ou senha inválidos"
                })
                cont = 0
            }
            
            conn.release()
        })
    })
})

module.exports = router