const express = require('express');
const router = express.Router();
const { getEmployees } = require('../controllers/employeeController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

router.get('/', protect, adminOnly, getEmployees);

module.exports = router;
