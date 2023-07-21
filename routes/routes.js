const express = require('express')
const controll = require('../controller/controller')
const router = express.Router()

router.post('/',controll.post)

router.get('/',controll.getAll)

router.get('/:id',controll.getOne)

router.delete('/:id',controll.delete)

module.exports = router