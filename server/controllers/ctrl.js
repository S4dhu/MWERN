const Test = require('../models/model')

const test = (req, res) => {
    return res.status(200).json({ success: true, data: 'Hello from middleware!' })
}

module.exports = {
    test,
}