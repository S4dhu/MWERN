const express = require('express')

const Ctrl = require('../controllers/ctrl')

const router = express.Router()

router.get('/test', Ctrl.test)

module.exports = router