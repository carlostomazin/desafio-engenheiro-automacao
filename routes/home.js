const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('./portal/home')

})

module.exports = router