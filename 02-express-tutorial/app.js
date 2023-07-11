const express = require('express')
const app = express()
const path = require('path')

// setup static and middleware
app.use(express.static('./public'))

app.get('/', (req, res) => {
    console.log('User hit the resource')
    res.status(200).sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})

app.all('*', (req, res) => {
    res.status(404).send('<h1>Error: Resource not found</h1>')
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000')
})

