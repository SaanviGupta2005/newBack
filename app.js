const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
    res.send('NEWWW Backend Running!!!')
})

app.listen(port, () => {
    console.log(`Backend is running on port ${port}`)
})