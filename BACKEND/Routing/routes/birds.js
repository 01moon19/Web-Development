const express = require('express')
const router = express.Router()

//define the home page route
router.get('/', (req, res) =>{
    res.send('Birds home page')
})
//define the about page route
router.get('/about', (req, res) =>{
    res.send('Birds about page')
})

module.exports = router