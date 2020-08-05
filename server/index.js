const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path');

const db = require('./db')
const sourceRouter = require('./routes/source-router')

const app = express()
const apiPort = 3000
const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

app.use(express.static(DIST_DIR));

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.sendFile(HTML_FILE);
});

app.use('/api', sourceRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))