const express = require('express')
const router = express.Router()
const { getTickets, createTicket } = require('../controllers/ticketController')
const { protect } = require('../middleware/autMiddleware')
router.route('/').get(protect, getTickets).post(createTicket)

module.exports = router
