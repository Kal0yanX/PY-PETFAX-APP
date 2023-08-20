const express = require('express')
const app = express()
const port = 3000

app.get('/french-swearwords', (req, res) => {
 res.send('Hey Luis cut your beard')
})

app.listen(port, () => {
 console.log(`We are here vibin on port: ${port}`)
})

//This is what will be running but for python!!