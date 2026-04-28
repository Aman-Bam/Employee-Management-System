const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendanceController');

// Define attendance routes
router.post('/:employeeId/mark', attendanceController.markAttendance);
router.get('/:employeeId', attendanceController.getAttendance);

module.exports = router;
