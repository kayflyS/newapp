const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

router.get('/', (req, res) => {
    res.status(200).send("This is the home page.");
})

router.get('/about', (req, res) => {
    res.status(200).send("This is an about page.");
})

router.get('/contact-us', (req, res) => {
    res.status(200).send("This is a contact page.");
})

router.get('/facilities', (req, res) => {
    res.status(200).send("This is a facilities page.");
})

router.get('/gallery', (req, res) => {
    res.status(200).send("This is a gallery page.");
})

module.exports = router
