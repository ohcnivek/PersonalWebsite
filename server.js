



// app.js
const express = require('express')
const bodyparser = require('body-parser')

// Create Express app
const app = express()

app.use(bodyparser.json())
app.use(express.static(__dirname))

// A sample route
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')))

// Start the Express server
app.listen(process.env.PORT, () => console.log('Server running on port 3000!'))