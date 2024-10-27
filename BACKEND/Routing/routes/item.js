//fiel saare item specific routes ko start karegi

const express = require('express')
const router = express.Router()

//define the homw page route
router.get('/', (req, res) => {
    res.send("Got a Get response")
});

router.post('/items', (req, res) => {
    res.send("got a POST response")
});

router.put('/items/:id', (req, res) => {
    res.send("got a PUT response")
});

router.delete('/items/:id', (req, res) => {
    res.send("got a DELETE response")
});

module.exports = router

//chaining
// app.get('/', (req, res) => {
//     res.send("Got a Get response")
// }).post('/items', (req, res) => {
//     res.send("got a POST response")
// }).put('/items/:id', (req, res) => {
//     res.send("got a PUT response")
// }).delete('/items/:id', (req, res) => {
//     res.send("got a DELETE response")
// });