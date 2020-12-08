const mongoose = require('mongoose')

const databaseUrl = 'mongodb://127.0.0.1:27017/test'

mongoose
    .connect(databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db