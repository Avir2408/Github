const express = require('express');
const router = express.Router();
const BookingController = require('../controllers/bookingController');

router.get('/', BookingController.getAllBookings);
router.get('/:id', BookingController.getBookingById);
router.post('/', BookingController.createBooking);
router.put('/:id', BookingController.updateBooking);
router.delete('/:id', BookingController.cancelBooking);

module.exports = router;