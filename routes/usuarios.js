const express = require('express')
const router = express.Router()
//const mysql = require("./mysql").pool;

router.get('/login', (req, res) => {
    res.render('./portal/login')

})

router.get('/services', (req, res) => {
    res.render('./portal/services')
})

// router.post('/login/user', (req, res) => {
//     mysql.getConnection((error, conn) => {
//         if (error) { 
//             return res.status(500).send({ error: error }) 
//         }
//         conn.query( 'SELECT * FROM users WHERE (id = ?)', [req.params.id], (error, resultado) => {
//             if (error) { 
//                 return res.status(500).send({ error: error }) 
//             }
//             res.status(201).send({ 
//                 response: resultado 
//             })
//             conn.release()
//         })
//     })
// })

module.exports = router