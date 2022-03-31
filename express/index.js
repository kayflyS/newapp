const express = require('express');
const app = express()
const router = require('./navBar.router')
const PORT = 4000;

//app.use(express.urlencoded({extended: true}))

// app.get('/', (req, res) => {
//     res.status(200).sendFile(__dirname + "/public/index.html");
// })

// app.get('/index.css', (req, res) => {
//     res.status(200).sendFile(__dirname + "/public/index.css");
// })

// app.get('/IMG_8028.JPG', (req, res) => {
//     res.status(200).sendFile(__dirname + "/public/IMG_8028.JPG");
// })

//app.use(express.static("public"))

app.use('/', router);

app.listen(PORT, () => {
    console.log(`Express Server listening on port ${PORT}`);
})