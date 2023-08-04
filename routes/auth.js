const express =require('express')
const router =express.Router()
const autoController = require("../controllers/autoController.js")
router.post('/login',autoController.login)

router.post('/register',autoController.register)
module.exports =router
