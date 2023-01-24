const express = require('express')
const app = express()
app.get('/home', (req, res) => {
    console.log("Just got a request!")
    res.send('home!')
})
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})
app.listen(process.env.PORT || 3000)
