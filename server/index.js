const express = require('express')
const path = require('path')

const app = express();

const port = 3000

const clientPath = path.resolve(__dirname,'../client/dist')

app.use(express.static(clientPath))

app.get('/', (req, res) =>{
    res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'))
})

app.listen(port, () =>{
    console.log(`Server listening on port ${port}`)
})