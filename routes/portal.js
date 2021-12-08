const express = require('express')
const router = express.Router()
cont = 0

router.get('/login', (req, res) => {
    res.render('./portal/login')

})

// router.post('/services', (req, res) => {

// })

router.get('/services', (req, res) => {
    if (cont){
        res.render('./portal/services')
    }else{
        res.render('./portal/login', {
            message: "Sessão expirada"
        })
    }
})




module.exports = router